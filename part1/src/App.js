import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <>
      <Header course={course} />
      <Content part={[part1,part2,part3]} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </>
  )
}

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <div>
        <Part part={props.part[0].name} exercises={props.part[0].exercises} />
        <Part part={props.part[1].name} exercises={props.part[1].exercises} />
        <Part part={props.part[2].name} exercises={props.part[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.total}
    </p>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}


export default App