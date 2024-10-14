import React from 'react'
import ListItem from './ListItem'
import IngridentItem from './IngridentItem'
const Steps = (props) => {
  return (
    <div className='p-10 '>
      <div className="ingridents pb-10 w-5/6 ">
        <h2 className='border-b-2 border-[#57c233] font-bold w-full pr-6  text-xl mb-3'>Ingridents</h2>
        <ul className='px-10 flex flex-col  gap-4 flex-wrap max-h-72  list-decimal font-medium text-lg py-2'>
            {props.ingridents.map((ingrident,index)=>(
                <IngridentItem  key={index}>{ingrident}</IngridentItem>
            ))}
           
            
           
        </ul>

      </div>
        <div className="steps">
            <h2 className='border-b-2 border-[#57c233] font-bold w-full pr-6  text-xl mb-3'>Steps</h2>
            <ol className='px-10 space-y-2 list-decimal font-medium text-lg py-2'>
                {props.steps.map((step,index)=>(
                    // <li key={index}>{step}</li>
                    <ListItem key={index}>{step}</ListItem>
                ))}
            </ol>
            </div>
    </div>
  )
}

export default Steps
