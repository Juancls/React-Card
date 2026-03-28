import styles from './styles.module.css'
function Card(props){
    return(
        <>
            <div className={styles.BoxCard}>
                <div className={styles.card}>
                    <h1 className={styles.title}>{props.title}</h1>
                    <img src={props.img} alt={props.title} className={styles.imgMato} />
                    <p className={styles.text}>{props.text}</p>
                </div>
            </div>
        </>
    )
}
export default Card