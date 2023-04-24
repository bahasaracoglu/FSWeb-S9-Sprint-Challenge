import React, { useEffect } from "react";
import { useState } from "react";

// önerilen başlangıç stateleri
const initalState = {
  message: "",
  email: "",
  steps: 0,
  index: 4, //  "B" nin bulunduğu indexi
};

export default function AppFunctional(props) {
  const [state, setState] = useState(initalState);

  // AŞAĞIDAKİ HELPERLAR SADECE ÖNERİDİR.
  // Bunları silip kendi mantığınızla sıfırdan geliştirebilirsiniz.

  let XY;
  switch (state.index) {
    case 0:
      XY = "(1, 1)";
      break;
    case 1:
      XY = "(2, 1)";
      break;
    case 2:
      XY = "(3, 1)";
      break;
    case 3:
      XY = "(1, 2)";
      break;
    case 4:
      XY = "(2, 2)";
      break;
    case 5:
      XY = "(3, 2)";
      break;
    case 6:
      XY = "(1, 3)";
      break;
    case 7:
      XY = "(2, 3)";
      break;
    case 8:
      XY = "(3, 3)";
      break;
    default:
    // code block
  }

  console.log(XY);
  /*
  function getXY(index) {
    // Koordinatları izlemek için bir state e sahip olmak gerekli değildir.
    // Bunları hesaplayabilmek için "B" nin hangi indexte olduğunu bilmek yeterlidir.
  }*/

  function getXYMesaj() {
    // Kullanıcı için "Koordinatlar (2, 2)" mesajını izlemek için bir state'in olması gerekli değildir.
    // Koordinatları almak için yukarıdaki "getXY" helperını ve ardından "getXYMesaj"ı kullanabilirsiniz.
    // tamamen oluşturulmuş stringi döndürür.
  }

  function reset() {
    setState(initalState);
  }

  function sonrakiIndex(yon) {
    // Bu helper bir yön ("sol", "yukarı", vb.) alır ve "B" nin bir sonraki indeksinin ne olduğunu hesaplar.
    // Gridin kenarına ulaşıldığında başka gidecek yer olmadığı için,
    // şu anki indeksi değiştirmemeli.

    if (state.index >= 1 && state.index <= 7) {
      if (yon === "left") {
        setState({
          ...state,
          index: state.index - 1,
          steps: state.steps + 1,
        });
      } else if (yon === "right") {
        setState({
          ...state,
          index: state.index + 1,
          steps: state.steps + 1,
        });
      } else if (yon === "up") {
        setState({
          ...state,
          index: state.index - 3,
          steps: state.steps + 1,
        });
      } else if (yon === "down") {
        setState({
          ...state,
          index: state.index + 3,
          steps: state.steps + 1,
        });
      }
    }

    console.log(yon);
  }

  console.log(state);
  /*
  function ilerle(evt) {
    // Bu event handler, "B" için yeni bir dizin elde etmek üzere yukarıdaki yardımcıyı kullanabilir,
    // ve buna göre state i değiştirir.
  }*/

  function onChange(evt) {
    // inputun değerini güncellemek için bunu kullanabilirsiniz
  }

  function onSubmit(evt) {
    // payloadu POST etmek için bir submit handlera da ihtiyacınız var.
  }

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Koordinatlar {XY}</h3>
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
        <h3 id="message"></h3>
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
      <form>
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
