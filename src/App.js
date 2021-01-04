import React from 'react'
import './App.css';
import restaurant from './restaurant.jpg'

function Header(props) {
  return (
    <header>
      <h1>{props.name} Cacino</h1>
    </header>
  )
}

function Main(props) {
  return (
    <section>
      <p>We serve {props.adjective} delicacies daily.</p>
      <img 
        src={restaurant} 
        height={200} 
        alt="outside a restaurant"/>
      <ul style={{textAlign: "left"}}>
        {props.dishes.map((dish) => (
          // eslint-disable-next-line react/jsx-key
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  )
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  )
}

const dishes = [
  "Macaroni and Cheese",
  "Eggs",
  "Challah",
  "French Toast"
]

const dishObjects = dishes.map((dish, i) => ({id: i, title: dish}));

function App() {
  return (
    <div className="App">
      <Header name="Nezmah"/>
      <Main adjective="amazing" dishes={dishObjects}/>
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
