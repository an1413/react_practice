// import {useRef, useState} from 'react';
import InputForm1 from './Components/InputForm1';
import InputForm2 from './Components/InputForm2';

function App() {

  // const [msg, setMeg] = useState(``);
  // const ref = useRef();

  // const handleBtn = (e) => {
  //   e.preventDefault();
  //   const text = ref.current.value;
  //   console.log(text);
  //   console.log('cliked me');
  //   ref.current.value = ``;
  //   setMeg(text);
  // }



  return (
    <div className="app">

      <InputForm1 />
      <InputForm2 />


      {/* <h2>{msg}</h2>
      <form>
      <input type="text" placeholder="enter your msg" ref={ref}></input>
      <button onClick={handleBtn}>submit</button>
      </form>
      <br></br>
      <hr></hr> */}

    </div>
  );
}
export default App;
