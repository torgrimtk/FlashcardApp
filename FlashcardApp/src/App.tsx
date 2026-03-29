import './App.css'
import CardContainer from './components/CardContainer'
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

function App() {
  return (
    <div>
      {exampleStack.cards.map((oneCard) => (
      
          <CardContainer card={oneCard}/>
    
      ))}
    </div>
  )
}

export default App
