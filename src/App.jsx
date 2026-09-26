import './App.css'

function App() {
  return (
    <main className="welcome">
      <div className="welcome__mark" aria-hidden="true">SE</div>
      <p className="welcome__eyebrow">YOUR CAMPUS, IN GOOD COMPANY</p>
      <h1>Student Events</h1>
      <p className="welcome__copy">Find your people. Make the most of campus life.</p>
      <a className="welcome__link" href="mailto:hello@studentevents.example">See you around campus <span aria-hidden="true">↗</span></a>
      <span className="welcome__orb welcome__orb--one" aria-hidden="true" />
      <span className="welcome__orb welcome__orb--two" aria-hidden="true" />
    </main>
  )
}

export default App
