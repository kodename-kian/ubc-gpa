import { useState } from 'react'
import './App.css'
import Term from './Term.jsx'

function App() {

  //useStates
  const [terms, setTerms] = useState(2);
  const [allTerms, setAllTerms] = useState([1]);

  const [totalScore, setTS] = useState([0]);
  const [totalCredits, setTC ] = useState([0]);

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

      <div class="wrapper"> 
        <button class="termButton" onClick={()=> addTerm()}>
          <img width="40px" height="40px" class="buttonIcon" src="public/plus.png" />
          <span class="buttonText"> Add Term  </span>
        </button>
      </div>

    </>
  )
}

function Summary({tGPA}){
  return (<div class="gpaText"> Your Overall GPA: {tGPA} </div>);
}

function Header(){
  return (<h1 class="header"> UBC GPA Calculator </h1>);
}

export default App
