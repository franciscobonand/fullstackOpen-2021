import ReactDOM from 'react-dom'
import React from 'react'

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

const Course = ({course}) => {
  return (
    <>
      <Header name={course.name} />
      <Content contents={course.parts}/>
    </>
  )
}

const Header = ({name}) => {
  return (
    <>
      <h1>{name}</h1>
    </>
  )
}

const Content = ({contents}) => {
  return (
    <div>
      {contents.map(part => 
        <Part key={part.id} text={part.name} val={part.exercises} />
      )}
    </div>
  )
}

// const Total = (props) => {
//   return (
//     <p>
//       Number of exercises {props.parts[0].exercises + 
//                             props.parts[1].exercises +
//                             props.parts[2].exercises}
//     </p>
//   )
// }

const Part = ({text, val}) => <p>{text} {val}</p>

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)