import { useState } from "react"


const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="bg-gray-900 text-white p-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
            >
                {isOpen ? "Close" : "Add New Flashcard"}
            </button>

            {isOpen && (
                <div className="mt-4">
                    Placeholder Flashcard
                </div>
            )}
        </header>
    )
}

export default Header