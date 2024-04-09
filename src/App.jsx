import { useState, useEffect } from 'react'
import Header from './assets/components/Header'
import InputComps from './assets/components/InputComps'
import AnswerComp from './assets/components/AnswerComp'
import SelectPairsComp from './assets/components/SelectPairsComp'


function App() {
  const [riskAmount, setRiskAmount] = useState(0)
  const [stopLoss, setStopLoss] = useState(0)
  const [perPoint, setPerPoint] = useState(0)
  const [contractAmount, setContractAmount] = useState(0)
  const [contractValue, setContractValue] = useState('')
  const [selectedPair, setSelectedPair] = useState('')
  const [contractRiskDollar, setContractRiskDollar] = useState(0)

  const pairs = [{
    name: 'SPX500 (ES)',
    value: 50
    },
    {
      name: 'SPX500 (MES)',
      value: 5
    },
    {
      name: 'Nasdaq (NQ)',
      value: 20
    },
    {
      name: 'Nasdaq (MNQ)',
      value: 2
    },
    {
      name: 'DOW (YM)',
      value: 5
      },
      {
       name: 'DOW (MYM)',
       value: 0.5
       },
       {
        name: 'Gold (GC)',
        value: 100
        },
        {
          name: 'Gold (MGC)',
          value: 10
  }]

  function contractFormula() {
   let contractAmount = riskAmount / stopLoss / selectedPair;
   //round the amount to the nearest whole number
   contractAmount = Math.round(contractAmount)
   console.log(selectedPair)
   //set the value of the contractAmount state variable
   setContractAmount(contractAmount)
   
  }

useEffect(()=>{
  contractRiskAmount()
},[contractAmount])

  function contractRiskAmount (){
    let contractRisk= (contractAmount * selectedPair) * stopLoss;
   setContractRiskDollar(contractRisk)
  }

  return (
    <>
    <Header />
    <InputComps 
    riskAmount={riskAmount}
    setRiskAmount={setRiskAmount}
    stopLoss={stopLoss}
    setStopLoss={setStopLoss}
    perPoint={perPoint}
    setPerPoint={setPerPoint}
    />
    <SelectPairsComp pairs={pairs} setSelectedPair={setSelectedPair}/>
    <AnswerComp  contractFormula={contractFormula} contractRiskAmount={contractRiskAmount}/>
    <div className='flex justify-center'>
      <p className='mt-16 md:text-xl border rounded-md p-4 border-slate-700 shadow-md'>Risk = {contractRiskDollar}</p>
      <p className='mt-16 md:text-xl border rounded-md p-4 border-slate-700 shadow-md'>{contractAmount} Contracts</p>
    </div>
    </>
  )
}

export default App
