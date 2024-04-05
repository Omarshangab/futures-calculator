import React from 'react'
import { useState } from 'react'

export default function 
(props) {
  //store the value for each user input for later use
  const { riskAmount, setRiskAmount, stopLoss, setStopLoss, perPoint, setPerPoint } = props


  return (
    <div className='flex justify-center'>
        <div className=' flex flex-col  gap-7 mt-28 w-full max-w-3xl justify-center'> 
            <input id='riskAmountField' onChange={(e)=> setRiskAmount(Number(e.target.value))} className=' flex mx-16 border p-2 rounded-md shadow-xl text-black ' type='text' placeholder='How Much Do You Want To Risk?' />
            <input id='stopLossField' onChange={(e)=> setStopLoss(Number(e.target.value))} className=' flex mx-16 border p-2 rounded-md shadow-xl text-black ' type='text' placeholder='In Points, How Big Is Your Stop Loss' />
        </div>
    </div>
  )
}
