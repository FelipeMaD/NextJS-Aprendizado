import styles from "../styles/Timeline.module.css";
import { FaCircle, FaArrowLeft, FaColumns, FaRegHandPaper } from "react-icons/fa";

export default function Timeline() {
  const steps = [
    {
      number: 1,
      text: "lorwem asjkodnasjkindasl oaskam kdclasknd aksmds",
      icon: <FaCircle />,
    },
    {
      number: 2,
      text: "lorwem asjkodnasjkindasl oaskam kdclasknd aksmds",
      icon: <FaArrowLeft />,
    },
    {
      number: 3,
      text: "lorwem asjkodnasjkindasl oaskam kdclasknd aksmds",
      icon: <FaColumns />,
    },
    {
      number: 4,
      text: "lorwem asjkodnasjkindasl oaskam kdclasknd aksmds",
      icon: <FaRegHandPaper />,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.timeline}>
        {steps.map((step, i) => (
          <div key={i} className={styles.step}>
            <div className={styles.content}>
              <h2>{step.number}</h2>
              <p>{step.text}</p>
            </div>
            <div className={styles.circle}>{step.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
}