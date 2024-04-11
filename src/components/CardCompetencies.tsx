import React from 'react'

interface IPropsCardCompetencies {
  content: string
}

const CardCompetencies: React.FC<IPropsCardCompetencies> = ({ content }) => {
  return (
    <li className='relative hover:bg-gradient-to-r from-yellow-400 to-red-500 p-5 cursor-pointer lg:p-[30px] rounded-[10px] text-center border-solid border-b-slate-600 border-[1px] transition duration-300 transform lg:hover:-translate-y-2 md:hover:-translate-y-2 hover:text-white min-h-[100%] text-[14px] lg:text-[20px]'>
      {content}
    </li>
  )
}

export default CardCompetencies
