import { useState } from 'react'
import './App.css'
import CardContainer from './components/CardContainer'
import type { Flashcard } from './types/FlashCardInfo'

const exampleCard: Flashcard = {
  id: 1,
  category: "Arrays",
  frontQuestion: "What is an array in JS/TS?",
  backAnswer: "Its a variable used to store a collection or a list of multiple values"
}

function App() {
  return (
    <div>
      <CardContainer card={exampleCard} />
    </div>
  )
}

export default App
