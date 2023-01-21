import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import StyledButton from './components/styledButton/StyledButton';
import StyledHeader from './components/styledButton/styledHeader/StyledHeader';
import StyledInput from './components/StyledInput/StyledInput';
import CustomForm from "./components/CustomForm/CustomForm";


const App = () => {
  const[innerText,setInnerText]= useState("");
  const[clicked,setClicked]= useState(false);
  const[inputValue,setInputValue]=useState();

  useEffect(()=>{
    clicked ? setInnerText("Clicked") : setInnerText("Click me");
  },[clicked]);

  function buttonClick(){
    setClicked(!clicked);
  }

  function onChangeFunction(event){
    setInputValue(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <StyledHeader innerHTML="First React app!" />
        <StyledButton innerText={innerText} onClickHandler={buttonClick}/>
        <StyledInput onChangeHandler={onChangeFunction} value={inputValue}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 
        </a>
        <CustomForm />
      </header>
    </div>
  );
}

export default App;
