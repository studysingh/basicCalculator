import styles from './display.module.css'
let Display = ({displayText}) =>{
  return <input type="text" className={styles.display} readOnly value={displayText} />
}
export default Display;