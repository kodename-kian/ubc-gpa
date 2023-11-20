import { useState } from 'react'
import './Course.css'

function Course({num, usf, ucf}) {
  const [count, setCount] = useState(0);

  function updCred(val){
    ucf(num,val);
  }

  function updScor(val){
    usf(num,val);
  }

  return (
    <>
      <div class="course-box">
        <div class="bin"> <img class="bin" src="/public/bin.png" width="30px" height="30px" /> </div>

        <div class="header">
          <form class="name-form">
            <label>
              <input type="text" id="course-name" name="course-name" placeholder="Course name (optional)" />
            </label>
          </form>
        </div>

        <form class="course-details-box">

          <label class="course-detail">
            <input type="number" id="credits" name="credits" onChange={(e) => (updCred(e.target.value))} placeholder="Credits"/>
          </label>

          <label class="course-detail">
            <input type="number" id="percentage" name="percentage" onChange={(e) => (updScor(e.target.value))} placeholder="Grade Percentage" />
          </label>

{/*          <select class="letter-grade-select">
            <option value="A+">A+</option>
            <option value="A">A</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B">B</option>
            <option value="B-">B-</option>
            <option value="C+">C+</option>
            <option value="C">C</option>
            <option value="C-">C-</option>
            <option value="D">D</option>
            <option value="F">F</option>
          </select>*/}

        </form>

      </div>
    </>
  )
}

export default Course
