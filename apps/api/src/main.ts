import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { INestApplication } from '@nestjs/common'

async function bootstrap() {
  const app: INestApplication<any> = await NestFactory.create(AppModule)
  app.enableCors()

  const config = new DocumentBuilder()
    .setTitle('AUTOSPACE | SACHIN SINGH')
    .setDescription(
      `The Autospace  API.
      <h1>Looking for graphql api?</h1>  
      Go to <a href='/graphql' target='_blank'>/graphql</a>
      Or,
      You might also need to use a <a target='_blank' href="https://studio.apollographql.com/sandbox/explorer?endpoint=http://localhost:3000/graphql&document=query users{users{uid}}"> Apollo Explorer</a> for greater experience
    `,
    )
    .setVersion('0.1')
    .addBearerAuth()
    .build()

  const documentFactory = SwaggerModule.createDocument(app as any, config)
  SwaggerModule.setup('api', app as any, documentFactory)

  await app.listen(process.env.PORT ?? 3000)
}
bootstrap()
