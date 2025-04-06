import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common'
import { FindManyUserArgs, FindUniqueUserArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import {
  LoginInput,
  LoginOutput,
  RegisterWithCredentialInput,
  RegisterWithProviderInput,
} from './dtos/create-user.input'
import { UpdateUserInput } from './dtos/update-user.input'
import * as bcrypt from 'bcryptjs'
import { v4 as uuid } from 'uuid'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async registerWithCredential({
    name,
    image,
    email,
    password,
  }: RegisterWithCredentialInput) {
    const existingUser = await this.prisma.credentials.findUnique({
      where: { email },
    })
    if (existingUser) {
      throw new BadRequestException('User already exist with this email.')
    }
    const salt = bcrypt.genSaltSync()
    const passwordHash = bcrypt.hashSync(password, salt)
    const uid = uuid()
    return this.prisma.user.create({
      data: {
        name,
        uid,
        image,
        Credentials: { create: { email, passwordHash } },
        AuthProvider: { create: { type: 'Credentials' } },
      },
      include: { Credentials: true },
    })
  }

  registerWithProvider({ name, image, uid, type }: RegisterWithProviderInput) {
    return this.prisma.user.create({
      data: { name, image, uid, AuthProvider: { create: { type } } },
    })
  }

  async login({ email, password }: LoginInput): Promise<LoginOutput> {
    const user = await this.prisma.user.findFirst({
      where: { Credentials: { email } },
      include: { Credentials: true },
    })
    if (!user) {
      throw new UnauthorizedException('Invalid email or password')
    }
    const isPassword = bcrypt.compareSync(
      password,
      user.Credentials!.passwordHash,
    )

    if (!isPassword) {
      throw new UnauthorizedException('Invalid email or password')
    }

    const jwtToken = this.jwtService.sign(
      { uid: user.uid },
      { algorithm: 'HS256' },
    )

    return { token: jwtToken }
  }

  create(createUserInput: RegisterWithProviderInput) {
    return this.prisma.user.create({
      data: createUserInput,
    })
  }

  findAll(args: FindManyUserArgs) {
    return this.prisma.user.findMany(args)
  }

  findOne(args: FindUniqueUserArgs) {
    return this.prisma.user.findUnique(args)
  }

  update(updateUserInput: UpdateUserInput) {
    const { uid, ...data } = updateUserInput
    return this.prisma.user.update({
      where: { uid },
      data: data,
    })
  }

  remove(args: FindUniqueUserArgs) {
    return this.prisma.user.delete(args)
  }
}
