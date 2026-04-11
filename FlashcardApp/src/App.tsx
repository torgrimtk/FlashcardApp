import { useState } from 'react'
import './App.css'
import CardContainer from './components/CardContainer'
import Header from './components/header/Header'
import type { Flashcard } from './types/FlashCardInfo'

const exampleCardOne: Flashcard = {
  id: 1,
  category: "Arrays",
  frontQuestion: "What is an array in JS/TS?",
  backAnswer: "Its a variable used to store a collection or a list of multiple values"
}

const examplecardTwo: Flashcard = {
  id: 2,
  category: "Functions",
  frontQuestion: "How do we write a function in TS?",
  backAnswer: "We declare it with like: 'function myFunc {}"
}

const exampleCardThree: Flashcard = {
  id: 3,
  category: "Tailwind",
  frontQuestion: "How do we use Tailwind in a file to style our app?",
  backAnswer: "We can write code in the jsx return statement "
}

const exampleStack = {
  name: "Frontend basics",
  cards: [exampleCardOne, examplecardTwo, exampleCardThree]
}

const [stack, setStack] = useState({
  name: "New Flashcard",
  cards: [exampleCardOne, examplecardTwo, exampleCardThree]
});

function App() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    if (currentIndex < exampleStack.cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }

  return (

    <div>
      <Header />
      <CardContainer card={exampleStack.cards[currentIndex]} />
      <button onClick={goToPrevious}>Previous</button>
      <button onClick={goToNext}>Next</button>
    </div>
  )
}

export default App

