import { $Enums, BookingTimeline } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class BookingTimelineEntity
  implements RestrictProperties<BookingTimelineEntity, BookingTimeline>
{
  id: number
  status: $Enums.BookingStatus
  timestamp: Date
  bookingId: number
  valetId: string | null
  managerId: string | null
}
