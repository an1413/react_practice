import {useRef, useState} from 'react';

function InputForm1() {

  const [msg, setMeg] = useState(``);
  const ref = useRef();

  const handleBtn = (e) => {
    e.preventDefault();
    const text = ref.current.value;
    console.log(text);
    console.log('cliked me');
    ref.current.value = ``;
    setMeg(text);
  }

  return (
    <div className="app">

      <h2>{msg}</h2>
      <form>
      <input type="text" placeholder="enter your msg" ref={ref}></input>
      <button onClick={handleBtn}>submit</button>
      </form>
      <br></br>
      <hr></hr>

    </div>
  );
}
export default InputForm1;
