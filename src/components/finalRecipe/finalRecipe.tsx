import recipes from "../../assets/platos_orientales_final.json"
import './finalRecipe.css'

export const FinalRecipe = (props: { combo: string }) => {
    const dishData = recipes.find(rec => rec.combo_id === props.combo) || recipes[0];

    return (
        <div className="app-container">
            <div className="recipe-card">
                {/* Sección de la imagen */}
                <div className="recipe-image-section">
                    <img
                        src={'images/recipes/'+dishData.imagen || 'images/image_default.png'}
                        alt={dishData.name}
                        className="recipe-image"
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src="images/image_default.png";
                        }}
                    />
                </div>

                {/* Sección de detalles de la receta */}
                <div className="recipe-details-section">
                    <div>
                        {/* Nombre del platillo */}
                        <h1 className="dish-name">
                            {dishData.name}
                        </h1>
                        {/* Descripción */}
                        <p className="dish-description">
                            {dishData.description}
                        </p>

                        {/* Tiempo de preparación */}
                        <div className="preparation-time">
                            <svg className="time-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span className="time-value">{dishData.time}</span>
                        </div>

                        {/* Ingredientes */}
                        <h2 className="section-heading">Ingredientes</h2>
                        <ul className="ingredients-list">
                            {Object.entries(dishData.ingredients).map(([key, value]) => (
                                <li key={key} className="ingredient-item">
                                    <span className="ingredient-key">{key}:</span> {value}
                                </li>
                            ))}
                        </ul>

                        {/* Pasos de la receta */}
                        <h2 className="section-heading">Preparación</h2>
                        <ol className="steps-list">
                            {dishData.recipe.steps.map((step, index) => (
                                <li key={index} className="step-item">
                                    {step}
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* Botón de acción */}
                    <div className="button-container">
                        <button className="print-button" onClick={() => window.print()}>
                            Imprimir receta
                        </button>
                    </div>
                    <div className="button-container">
                        <button className="back-button">
                            Crear otra receta
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}