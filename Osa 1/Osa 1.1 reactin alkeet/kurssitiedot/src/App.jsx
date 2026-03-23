
// Part-komponentti on tehty sinulle valmiiksi.
// Se saa propsina part- ja exercises-arvot, jotka se näyttää renderöinnissä.
// Käytä Part-komponenttia App-komponentissa, jotta saat osat ja tehtävien määrät näkyviin.
const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  )
}


const App = () => {
  // Komponentin alussa on määritelty muuttujia, jotka sisältävät kurssin tiedot.
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <Part part={part1} exercises={exercises1} />
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App
// export { Part, Header, Total }
// export { Content }