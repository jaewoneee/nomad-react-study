import { useState, useEffect } from "react";
function CleanUp() {
  const [minutes, setMinutes] = useState(0);
  const [flip, setFlip] = useState(false);
  const onchange = (e) => {
    setMinutes(e.target.value);
  };
  const reset = () => {
    setMinutes(0);
  };
  const makeFlip = () => {
    reset();
    setFlip((current) => !current);
  };
  const Btn = (props) => {
    return (
      <button
        style={{ fontWeight: props.text === "reset" ? "bold" : "light" }}
        onClick={props.event}
      >
        {props.text}
      </button>
    );
  };
  // * cleanup 기능
  // 컴포넌트가 파괴될 때 실행시키고 싶은 함수는 리턴으로 담으면 된다!!
  // 1.
  // function Hello() {
  //   function ByeFunction() {
  //     console.log("this function works when the component is unmounted");
  //   }
  //   function HelloFunction() {
  //     console.log("this function works when the component is mounted");
  //     return ByeFunction();
  //   }
  //   useEffect(HelloFunction, []);
  // }

  // 2.
  useEffect(() => {
    console.log("this function works when the component is mounted");
    return () => {
      console.log("this function works when the component is unmounted");
    };
  }, []);

  return (
    <div className="CleanUp">
      <h1>Super Converter</h1>
      <label htmlFor="minutes">Minutes</label>
      <input
        value={flip ? minutes * 60 : minutes}
        id="minutes"
        type="numer"
        onChange={onchange}
        disabled={flip === true}
      ></input>
      <label htmlFor="hours">Hours</label>
      <input
        value={flip ? minutes : Math.round(minutes / 60)}
        disabled={flip === false}
        id="hours"
        type="number"
      ></input>
      {/* <button onClick={reset}>reset</button>
      <button onClick={makeFlip}>flip</button> */}
      <Btn text="reset" event={reset} />
      <Btn text="flip" event={makeFlip} />
    </div>
  );
}

export default CleanUp;
