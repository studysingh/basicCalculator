import styles from './container.module.css'
let Container = ({children}) => {
  return <div className= {styles.container}>
    {children}
  </div>
}
export default Container;