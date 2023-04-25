import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const initalState = {
  message: "",
  email: "",
  steps: 0,
  index: 4,
};

export default function AppFunctional(props) {
  const [state, setState] = useState(initalState);

  let XY = {};
  switch (state.index) {
    case 0:
      XY = { X: 1, Y: 1 };
      break;
    case 1:
      XY = { X: 2, Y: 1 };
      break;
    case 2:
      XY = { X: 3, Y: 1 };
      break;
    case 3:
      XY = { X: 1, Y: 2 };
      break;
    case 4:
      XY = { X: 2, Y: 2 };
      break;
    case 5:
      XY = { X: 3, Y: 2 };
      break;
    case 6:
      XY = { X: 1, Y: 3 };
      break;
    case 7:
      XY = { X: 2, Y: 3 };
      break;
    case 8:
      XY = { X: 3, Y: 3 };
      break;
    default:
  }

  //console.log(XY);

  function reset() {
    setState(initalState);
  }

  function sonrakiIndex(yon) {
    if (yon === "left" && XY.X !== 1) {
      setState({
        ...state,
        index: state.index - 1,
        steps: state.steps + 1,
        message: "",
      });
    } else if (yon === "right" && XY.X !== 3) {
      setState({
        ...state,
        index: state.index + 1,
        steps: state.steps + 1,
        message: "",
      });
    } else if (yon === "up" && XY.Y !== 1) {
      setState({
        ...state,
        index: state.index - 3,
        steps: state.steps + 1,
        message: "",
      });
    } else if (yon === "down" && XY.Y !== 3) {
      setState({
        ...state,
        index: state.index + 3,
        steps: state.steps + 1,
        message: "",
      });
    }
    if (XY.X === 1 && yon === "left") {
      setState({ ...state, message: "Sola gidemezsiniz" });
    } else if (XY.X === 3 && yon === "right") {
      setState({ ...state, message: "Sağa gidemezsiniz" });
    } else if (XY.Y === 1 && yon === "up") {
      setState({ ...state, message: "Yukarıya gidemezsiniz" });
    } else if (XY.Y === 3 && yon === "down") {
      setState({ ...state, message: "Aşağıya gidemezsiniz" });
    }

    // console.log(yon);
  }

  console.log(state);

  function onSubmit(evt) {
    evt.preventDefault();
    axios
      .post("http://localhost:9000/api/result", {
        x: XY.X,
        y: XY.Y,
        steps: state.steps,
        email: state.email,
      })
      .then(function (response) {
        setState({
          ...state,
          message: response.data.message,
          email: "",
        });

        //console.log(response.data.message);
      })
      .catch(function (error) {
        setState({ ...state, message: error.response.data.message });
        // console.log({ ...state, message: error.response.data.message });
      });

    console.log(state);
  }

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Koordinatlar {`(${XY.X},${XY.Y})`}</h3>
        <h3 id="steps">{state.steps} kere ilerlediniz</h3>
      </div>
      <div id="grid">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((idx) => (
          <div
            key={idx}
            className={`square${idx === state.index ? " active" : ""}`}
          >
            {idx === state.index ? "B" : null}
          </div>
        ))}
      </div>
      <div className="info">
        <h3 id="message">{state.message}</h3>
      </div>
      <div id="keypad">
        <button id="left" onClick={() => sonrakiIndex("left")}>
          SOL
        </button>
        <button id="up" onClick={() => sonrakiIndex("up")}>
          YUKARI
        </button>
        <button id="right" onClick={() => sonrakiIndex("right")}>
          SAĞ
        </button>
        <button id="down" onClick={() => sonrakiIndex("down")}>
          AŞAĞI
        </button>
        <button id="reset" onClick={() => reset()}>
          reset
        </button>
      </div>
      <form onSubmit={onSubmit}>
        <input
          id="email"
          type="email"
          placeholder="email girin"
          value={state.email}
          onChange={(event) =>
            setState({ ...state, email: event.target.value })
          }
        ></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  );
}
