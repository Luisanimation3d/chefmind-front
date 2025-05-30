import styles from './CardIngredient.module.css'

export const CardIngredient = ({
    selected
}: {
    selected?: boolean
}) => {
    return (
        <div
            className={`${styles.card_container} ${selected ? styles.card_selected : ''}`}
        >
            <img 
                src="https://images.unsplash.com/photo-1618422689173-3dbcdeb82fa7?q=80&w=2088&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Frambuesa" 
                className={`${styles.card_image}`}
            />
            <div
                className={`${styles.card_info}`}
            >
                <span>Frambuesa</span>
            </div>
        </div>
    )
} 