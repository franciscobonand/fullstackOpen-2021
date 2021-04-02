import React from 'react'

const Course = ({courses}) => {
    return (
      <>
        <h1>Web development curriculum</h1>
        {courses.map(course => 
          <div key={course.id}>
            <Header name={course.name} />
            <Content contents={course.parts}/>
            <Total exs={course.parts.map(ex => ex.exercises)}/>
          </div>
        )}
      </>
    )
  }
  
const Header = ({name}) => {
return (
    <>
    <h2>{name}</h2>
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

const Total = ({exs}) => (
<p style={{fontWeight: 'bold'}}>
    total of {exs.reduce((a, b) => a + b)} exercises
</p>
)

const Part = ({text, val}) => <p>{text} {val}</p>

export default Course