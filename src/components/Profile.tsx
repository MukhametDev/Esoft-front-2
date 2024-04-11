import React, { useState } from 'react'
import photo from './../images/unnamed.jpg'
import CardsCompetencies from './CardsCompetencies'
import CardsNewCompetencies from './CardsNewCompetencies'
import { v4 as uuidv4 } from 'uuid'

type Item = {
  id: number
  competency: string
}

const competenciesData: Item[] = [
  {
    id: uuidv4(),
    competency: 'Javascript и typescript,react',
  },
  {
    id: uuidv4(),
    competency: 'HTML5 и CSS3,кроссбраузерная и адаптивная верстка',
  },
  {
    id: uuidv4(),
    competency: 'Препроцессоры scss,less и фреймворки tailwind css, styled components',
  },
  {
    id: uuidv4(),
    competency: 'Node js, работал с фреймворками express js и nest js',
  },
]

const newCompetenciesData: Item[] = [
  {
    id: uuidv4(),
    competency: 'Next js',
  },
  {
    id: uuidv4(),
    competency: 'TypeORM',
  },
  {
    id: uuidv4(),
    competency: 'Zustand, Mobx',
  },
  {
    id: uuidv4(),
    competency: 'Углубленно Nest js',
  },
  {
    id: uuidv4(),
    competency: 'Углубленно React',
  },
  {
    id: uuidv4(),
    competency: 'RabbitMQ',
  },
  {
    id: uuidv4(),
    competency: 'Apache Kafka',
  },
  {
    id: uuidv4(),
    competency: 'Apollo',
  },
  {
    id: uuidv4(),
    competency: 'Алгоритмы и структуры данных ',
  },
  {
    id: uuidv4(),
    competency: 'Углубленно typescript',
  },
]

interface IPropsProfile {}

const Profile: React.FC<IPropsProfile> = () => {
  const [newData, setNewData] = useState(newCompetenciesData)
  const [data, setData] = useState(competenciesData)
  return (
    <>
      <header className='flex flex-col items-center lg:mb-[30px] md:mb-[20px] mb-[10px]'>
        <img className='rounded-[50%] w-[20vw] pt-[20px] h-auto' src={photo} alt='photo_profile' />
        <h2 className='lg:text-[30px] md:text-[25px] text-[16px] font-bold   bold lg:mb-[30px]'>
          Жанбеков Мухаметжан Жабаевич
        </h2>
        <div className='lg:text-[25px] text-[16px] md:text-[20px]'>Мои компетенции</div>
      </header>
      <CardsCompetencies data={data} />
      <div className='text-center lg:text-[25px] text-[16px] md:text-[20px] lg:mb-[30px] md:mb-[20px] mb-[10px]'>
        Технологии, которые я хочу изучить
      </div>
      <CardsNewCompetencies newdata={newData} />
      <footer className='text-center'>
        <span className='font-bold'>© Все права защищены</span>
      </footer>
    </>
  )
}

export default Profile
