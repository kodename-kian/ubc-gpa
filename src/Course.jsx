import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Course.css'

function Course() {
  const [count, setCount] = useState(0)

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
            <input type="number" id="credits" name="credits" placeholder="Credits" />
          </label>

          <label class="course-detail">
            <input type="number" id="percentage" name="percentage" placeholder="Grade Percentage" />
          </label>

          <select class="letter-grade-select course-detail">
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
          </select>

        </form>

      </div>
    </>
  )
}

export default Course
