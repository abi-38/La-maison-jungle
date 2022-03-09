import { useState } from 'react'

function QuestionForm() {
    const [inputValue, setInputValue] = useState("Posez votre question ici")
    function checkValue(value) {
        if (!value.includes('f')) {
            setInputValue(value)
        }
    }
    // function handleSubmit(e) {
    //     e.preventDefault()
    //     alert(e.target['my_input'].value)
    // }

    return (
        <div>
            <textarea
                value={inputValue}
                onChange={(e) => checkValue(e.target.value)}
            />
            <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
        </div>
    )
}

export default QuestionForm