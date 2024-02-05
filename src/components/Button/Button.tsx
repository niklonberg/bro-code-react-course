import styles from "./Button.module.css";

function Button() {
  //when we set styles using modules, each declaration inside
  //the css file will recieve a unique hash, so no naming conflicts are possible.
  return <button className={styles.btn}>Click me</button>;
}

export default Button;
