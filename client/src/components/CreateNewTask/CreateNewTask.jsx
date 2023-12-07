import { useState } from "react";
import Title from "../Title/Title";
import styles from "./CreateNewTask.module.css";

import addIcon from "../../assets/icon-add.svg"

const CreateNewTask = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    inputValue.length ? setInputValue("") : null;
    // if (inputValue.length) {
    //   setInputValue("");
    // }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className={styles.container}>
      <Title iconName={"pencil"} text={"Criar nova tarefa"} />
      <form className={styles.inputContainer} onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={handleChange}
          autoFocus
          placeholder="Nome da tarefa"
          type="text"
        />
        <button type="submit">
        <img src={addIcon} alt="Adicionar tarefa" />
        </button>
      </form>
    </div>
  );
};

export default CreateNewTask;
