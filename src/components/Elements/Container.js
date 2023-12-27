import styles from './Container.module.css';
export const Container = (props) => {
    return (
        <section className={styles.style}>
            {props.children}
        </section>
    );
}