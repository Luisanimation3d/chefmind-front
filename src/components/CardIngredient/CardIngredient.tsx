import styles from './CardIngredient.module.css'

export const CardIngredient = ({
    selected,
    dimmed,
    onClick,
    ingredient
}: {
    selected?: boolean,
    dimmed?: boolean,
    onClick: (id: number) => void,
    ingredient: {
        id: number,
        name: string,
        imagen: string
    }
}) => {
    return (
        <div
            className={`
                ${styles.card_container} 
                ${selected ? styles.card_selected : ''}
                ${dimmed ? styles.card_dimmed : ''}
            `}
            onClick={() => onClick(ingredient.id)}
        >
            <img 
                src={`/public/ingresients/${ingredient.imagen}`}
                alt={ingredient.name}
                className={`${styles.card_image}`}
            />
            <div
                className={`${styles.card_info}`}
            >
                <span>{ingredient.name}</span>
            </div>
        </div>
    )
} 