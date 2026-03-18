import { useState } from "react";
import { type Flashcard } from "../types/FlashCardInfo";



type FlashcardDisplayProps = {
    card: Flashcard
}

function CardContainer({ card }: FlashcardDisplayProps) {
    const [isFlipped, setIsFlipped] = useState(false)

    return (
        // Centering Container
        <div className="flex min-h-screen items-center justify-center">

            {/* Card Wrapper with Perspective */}
            <div
                className="group h-64 w-96 [perspective:1000px]"
                onClick={() => setIsFlipped(!isFlipped)}
            >

                {/* Inner Card Container */}
                <div
                    className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''
                        }`}
                >
                    {/* Front Face */}
                    <div className="absolute inset-0 rounded-xl bg-blue-600 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                        <h1 className="text-3xl font-bold">{card.frontQuestion}</h1>
                        <p className="text-sm">{card.id}</p>
                        <p className="text-sm">{card.category}</p>
                    </div>

                    {/* Back Face */}
                    <div className="absolute inset-0 rounded-xl bg-gray-800 text-white flex flex-col items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                        <h1 className="text-3xl font-bold">{card.backAnswer}</h1>
                        <p className="text-sm">{card.id}</p>
                        <p className="text-sm">{card.category}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardContainer