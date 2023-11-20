import { useState } from 'react'
import './Term.css'
import Course from './Course.jsx'

function Term({num, key, upd}) {
  const [courses, setCourses] = useState(0);
  const [allCourses, setAllCourses ] = useState([]);
  const [scores, setScores] = useState([]);
  const [credits, setCredits] = useState([]);
  const [gpa, setGPA] = useState(0);

  function addCourse(){
    setAllCourses( [...allCourses, courses]);
    setScores([...scores, 0]);
    setCredits([...credits, 0]);
    setCourses( courses+1 );
  }

  function updateScores(ind, val){
    const clone = scores;
    clone[ind] = val;
    setScores(clone);
    getGPA();
  }

  function updateCredits( ind, val){
    const clone = credits;
    clone[ind] = val;
    setCredits(clone);
    getGPA();
  }

  function getGPA(){
    let Sclone = scores;
    let Cclone = credits;

    let Ssum = 0;
    let Csum = 0;

    for( let i = 0; i < Sclone.length; i++ ){
      Ssum += parseInt( Sclone[i] ) * parseInt( Cclone[i] );
      Csum += parseInt( Cclone[i] );
    }

    setGPA( Ssum/Csum );

    upd( num, Ssum, Csum );
  }

  return (
    <>
      <div class="term">
        
        <div class="termText"> TERM {num}: GPA: {gpa} </div>

        <div class="courseBlock">
          {allCourses.map((course, index) => {
            return (
              <Course num={course} key={index} usf={updateScores} ucf={updateCredits}/>
            )
        })}

        </div>

        <div> 
          <button class="termButton" onClick={()=> addCourse()}>  
            <img width="40px" height="40px" class="buttonIcon" src="public/plus.png" />
            <span class="buttonText"> Add Course </span>
          </button>

        </div>

      </div>
    </>
  )
}

export default Term
