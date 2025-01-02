import { useState } from 'react'
import './App.css'
import {TextInput} from  "./Components/TextInput"
import {Button} from  "./Components/Button"
import {ListView} from  "./Components/ListView"

function App() {
  const [paragraphs, setParagraphs] = useState([])
  const [text,setText] = useState("");

  function handleSaveParagraph(){
      debugger;
      setParagraphs((prev)=> [...prev,{ Info:text }])
      //clear text on textarea
      setText("");
  }

  function handleInputText(e){
    setText(e.target.value);
  }

  return (
    <div className="container br-gray">
        <div className="container-input-form ">
            <TextInput className="text-input" onInput={handleInputText} value={text} />
            <Button onClick={handleSaveParagraph} >Save</Button>
        </div>
        <ListView paragraphs={paragraphs} />
      </div>
  )
}

export default App
