import "../../App.css";
import "./counter.css";
import useMyCounterReducer from "../../Hooks/useMyCounterReducer/useMyCounterReducer";
import { useState } from "react";
import { FaPlus, FaRedo, FaMinus } from "react-icons/fa";

const INITIALS = {
  DECREMENT: "decrement",
  INCREMENT: "increment",
  RESET: "reset",
  SETVALUE: "setvalue",
};

function Counter() {
  const reducer = (state, action) => {
    switch (action.type) {
      case INITIALS.DECREMENT:
        {
          return setCount((prev) => prev - 1);
        }
        break;

      case INITIALS.INCREMENT:
        {
          return setCount((prev) => prev + 1);
        }
        break;
      case INITIALS.RESET:
        return setCount(0);
    }
  };

  const [state, dispatch] = useMyCounterReducer(reducer, INITIALS);
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="counter">
        <div className="number-cont">
          <h1 className="number" onChange={() => {
            console.log('counting')
          }}>{count}</h1>
        </div>

        <div className="buttons-cont">
          <button
            className="decrement"
            onClick={() => {
              dispatch({ type: INITIALS.DECREMENT });
            }}
          >
            <FaMinus />
          </button>

          <button
            className="reset"
            onClick={() => {
              dispatch({ type: INITIALS.RESET });
            }}
          >
            <FaRedo />
          </button>

          <button
            className="increment"
            onClick={() => {
              dispatch({ type: INITIALS.INCREMENT });
            }}
          >
            <FaPlus />
          </button>
        </div>

        
      </div>
    </>
  );
}

export default Counter;
