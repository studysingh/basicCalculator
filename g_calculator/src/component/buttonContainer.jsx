import styles from "./buttonContainer.module.css";
import { IoIosBackspace } from "react-icons/io";
let ButtonContainer = ({calculateAns}) => {
  let x = <IoIosBackspace />
  // console.log(x.type.name)IoIosBackspace
  let btnArr = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    x,
    "=",
    ".",
  ];
  function isDigit(val) {
    if (val === ".") return false;
    let changeInt = parseInt(val);
    if (changeInt >= 0 && changeInt <= 9) return false;
    else return true;
  }
  return (
    <div className={styles.container}>
      {btnArr.map((btn) => {
        return (
          <button
          onClick={(event) => calculateAns(btn , event)}
            key={btn}
            className={`${styles.buttons} ${
              isDigit(btn) ? styles.operators : ""
            }`}
            
          >
            {btn}
          </button>
        );
      })}
    </div>
  );
};
export default ButtonContainer;
