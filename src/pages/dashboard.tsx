import { Card } from 'components/Card'
import DashboardLayout from 'components/DashboardLayout'
import { useEffect, useState } from 'react'

type CardData = {
  avatar: string
  id: number
  name: string
  serviceDays: string[]
  serviceHours: string
  specialty: string
}

export default function Dashboard() {
  const [cards, setCards] = useState<CardData[]>([])

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        'https://get-moments.herokuapp.com/professionals'
      )
      const data = await response.json()
      return setCards(data)
    }
    getData()
  }, [])

  return (
    <DashboardLayout>
      <div>
        <h1 className="mb-4 text-2xl font-bold">Lista de médicos</h1>
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card: CardData) => (
            <Card
              day={card.serviceDays[0]}
              hour={card.serviceHours}
              img={`https://get-moments.herokuapp.com/${card.avatar}`}
              name={card.name}
              occupation={card.specialty}
            />
          ))}
        </ul>
      </div>
    </DashboardLayout>
  )
}
