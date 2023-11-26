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
      <div class="courseBox">
        <div class="bin"> <img class="bin" src="/static/images/bin.png" width="30px" height="30px" /> </div>

        <div class="courseContent">

          <div class="header">
            <form class="name-form">
              <label>
                <input type="text" class = "courseName" id="course-name" name="course-name" placeholder="Course name (optional)" />
              </label>
            </form>
          </div>

          <form class="courseDetailsBox">

            <label class="courseDetail">
              <input type="number" class="numInputC" id="credits" name="credits" onChange={(e) => (updCred(e.target.value))} placeholder="Credits"/>
            </label>

            <label class="courseDetail">
              <input type="number" class="numInputG" id="percentage" name="percentage" onChange={(e) => (updScor(e.target.value))} placeholder="Grade Percentage" />
            </label>

         </form>
        </div>
      </div>
    </>
  )
}

export default Course
