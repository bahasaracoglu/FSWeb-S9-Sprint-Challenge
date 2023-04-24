import React, { useEffect } from "react";
import { useState } from "react";

// önerilen başlangıç stateleri
const initalState = {
  initialMessage: "",
  initialEmail: "",
  initialSteps: 0,
  initialIndex: 4, //  "B" nin bulunduğu indexi
};

export default function AppFunctional(props) {
  const [state, setState] = useState(initalState);

  // AŞAĞIDAKİ HELPERLAR SADECE ÖNERİDİR.
  // Bunları silip kendi mantığınızla sıfırdan geliştirebilirsiniz.

  let cord;
  switch (state.initialIndex) {
    case 0:
      cord = "(1, 1)";
      break;
    case 1:
      cord = "(2, 1)";
      break;
    case 2:
      cord = "(3, 1)";
      break;
    case 3:
      cord = "(1, 2)";
      break;
    case 4:
      cord = "(2, 2)";
      break;
    case 5:
      cord = "(3, 2)";
      break;
    case 6:
      cord = "(1, 3)";
      break;
    case 7:
      cord = "(2, 3)";
      break;
    case 8:
      cord = "(3, 3)";
      break;
    default:
    // code block
  }

  console.log(cord);

  function getXY(index) {
    // Koordinatları izlemek için bir state e sahip olmak gerekli değildir.
    // Bunları hesaplayabilmek için "B" nin hangi indexte olduğunu bilmek yeterlidir.
  }

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

    if (yon === "left") {
      setState({
        ...state,
        initialIndex: state.initialIndex - 1,
        initialSteps: state.initialSteps + 1,
      });
    } else if (yon === "right") {
      setState({
        ...state,
        initialIndex: state.initialIndex + 1,
        initialSteps: state.initialSteps + 1,
      });
    } else if (yon === "up") {
      setState({
        ...state,
        initialIndex: state.initialIndex - 3,
        initialSteps: state.initialSteps + 1,
      });
    } else if (yon === "down") {
      setState({
        ...state,
        initialIndex: state.initialIndex + 3,
        initialSteps: state.initialSteps + 1,
      });
    }

    console.log(yon);
  }

  console.log(state);

  function ilerle(evt) {
    // Bu event handler, "B" için yeni bir dizin elde etmek üzere yukarıdaki yardımcıyı kullanabilir,
    // ve buna göre state i değiştirir.
  }

  function onChange(evt) {
    // inputun değerini güncellemek için bunu kullanabilirsiniz
  }

  function onSubmit(evt) {
    // payloadu POST etmek için bir submit handlera da ihtiyacınız var.
  }

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Koordinatlar {cord}</h3>
        <h3 id="steps">{state.initialSteps} kere ilerlediniz</h3>
      </div>
      <div id="grid">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((idx) => (
          <div
            key={idx}
            className={`square${idx === state.initialIndex ? " active" : ""}`}
          >
            {idx === state.initialIndex ? "B" : null}
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
        <input id="email" type="email" placeholder="email girin"></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  );
}
