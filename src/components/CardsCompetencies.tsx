import React from 'react'
import CardCompetencies from './CardCompetencies'

interface IData {
  id: number
  competency: string
}

interface IPropsCardsCompetencies {
  data: IData[]
}

const CardsNewCompetencies: React.FC<IPropsCardsCompetencies> = ({ data }) => {
  return (
    <ul className='grid grid-cols-1 md:grid-cols-2 lg:gap-4 gap-2 h-auto items-center justify-center md:mb-[20px] mb-[10px] lg:mb-[30px] text-center'>
      {data.map((item) => {
        return <CardCompetencies content={item.competency} />
      })}
    </ul>
  )
}

export default CardsNewCompetencies
