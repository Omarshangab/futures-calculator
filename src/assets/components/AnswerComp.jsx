import React from 'react'

export default function AnswerComp(props) {
  const { contractFormula,contractRiskAmount } = props

  return (
    <div>
      <div className='flex justify-center mt-10'>
          <button onClick={()=>{contractFormula();}} className=' border border-slate-500 p-3 rounded-md px-8 shadow-2xl bg-slate-700 hover:opacity-85 hover:text-black '> Get Contract Amount </button>
        </div>
    </div>
  )
}
