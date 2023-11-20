import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Term from './Term.jsx'

function App() {

  //useStates
  const [terms, setTerms] = useState(1);
  const [allTerms, setAllTerms] = useState([]);

  const [totalScore, setTS] = useState([]);
  const [totalCredits, setTC ] = useState([]);

  const [tGPA, setTGPA] = useState(0);

  //add term function
  function addTerm(){
    setAllTerms( [...allTerms, terms] );
    setTS([...totalScore, 0]);
    setTC([...totalCredits, 0]);
    setTerms( terms + 1 );
  }

  function updates( ind, s, c ){
    const clone1 = totalScore;
    clone1[ind-1] = s;
    setTS(clone1);

    const clone2 = totalCredits;
    clone2[ind-1] = c;
    setTC(clone2);

    recompute();
  }

  function recompute(){
    const clone1 = totalScore;
    const clone2 = totalCredits;

    let superSc = clone1.reduce(function(a,b) { return a+b; }, 0)
    let superCr = clone2.reduce(function(a,b) { return a+b; }, 0)

    setTGPA(superSc/superCr);
  }



  return (
    <>
      <Header />

      <Summary tGPA={tGPA}/>

      <div class="termBlock">
        {allTerms.map((term, index) => {
          return (
            <Term num={term} key={index} upd={updates} />
          )
        })}
      </div>

      <div> 
        <button onClick={()=> addTerm()}>
          Add Term 
        </button>
      </div>

    </>
  )
}

function Summary({tGPA}){
  return (<div> Your Overall GPA: {tGPA} </div>);
}

export default App
