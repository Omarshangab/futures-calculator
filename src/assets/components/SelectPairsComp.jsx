import React from 'react'

export default function SelectPairsComp(props) {

const {pairs, setSelectedPair} = props


  return (
    <div className='flex flex-col mt-10'>
            <p className='flex justify-center'>What Pair Are You Trading?</p>
        <div className='flex  justify-center' >
            <select className='text-black p-2 border rounded-md  ' onChange={(e)=>setSelectedPair(e.target.value)} name="" id="">{pairs.map((pair,index)=>(
                <option key={index} value={pair.value}>{pair.name}</option>
            ))}</select>
        </div>
    </div>
  )
}
