import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline'

export type CardProps = {
  img: string
  name: string
  day: string
  hour: string
  occupation: string
}

export const Card = ({ img, name, day, hour, occupation }: CardProps) => {
  return (
    <>
      <li className="relative flex items-center gap-4 rounded-lg bg-blue-400 p-4 text-white">
        <div className="min-w-[64px]">
          <img
            className="h-16 w-16 rounded-full object-cover"
            src={img}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold">{name}</h3>
          <p className="flex gap-2">
            <CalendarIcon width={24} height={24} /> {day}
          </p>
          <p className="flex gap-2">
            <ClockIcon width={24} height={24} /> {hour}
          </p>
        </div>
        <span className="absolute right-4 inline-flex items-center self-end whitespace-nowrap rounded-full bg-gray-800 px-2.5 py-0.5 text-xs font-medium text-gray-100">
          {occupation}
        </span>
      </li>
    </>
  )
}
