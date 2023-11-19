import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Term from './Term.jsx'

function App() {
  //useStates
  const [terms, setTerms] = useState(0);
  const [allTerms, setAllTerms] = useState(Array(0));
  const [totalScore, setTS] = useState(1);
  const [totalCredits, setTC ] = useState(2);

  //add term function
  function addTerm(){
    setAllTerms( [...allTerms, (<div key={terms}> <Term /> </div>) ]);
    setTerms( terms+1 );
  }

  return (
    <>
      <Header />

      <Summary totalScore={totalScore} totalCredits={totalCredits} />

      {allTerms}

      <div> 
        <button onClick={()=> addTerm()}>
          Add Term 
        </button>
      </div>

    </>
  )
}

function Summary({totalScore, totalCredits}){
  if( totalCredits == 0 ){
    return (<div> Please add credits to calculate your average! </div> );
  }
  else{
    return (<div> Your total average is {totalScore/totalCredits}! </div> );
  }

}

export default App
