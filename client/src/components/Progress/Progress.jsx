import { useContext } from "react";
import Title from "../Title/Title";
import styles from "./Progress.module.css";
import { AppContext } from "../../AppContent";

import imgUrl from "../../assets/img-trophy-min.png";

const Progress = () => {
  const { progressBarValue } = useContext(AppContext);
  return (
    <div className={styles.container}>
      <Title iconName={"chart"} text={"Progresso"} />

      <input
        type="range"
        className={styles.progressBarFill}
        readOnly
        value={progressBarValue}
      />
      <div className={styles.preogressBarValue}>
        <span>0%</span>
        <span>50%</span>
        <span>100%</span>
      </div>
      {progressBarValue === 100 && (
        <div className={styles.taskCompletedMessage}>
          <img src={imgUrl} alt="Troféu" width="40px" />
          <span>Parabéns! você concluiu todas as tarefas de hoje</span>
        </div>
      )}
    </div>
  );
};

export default Progress;
