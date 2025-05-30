import { CardIngredient } from "./components/CardIngredient/CardIngredient"
import ingredients from './assets/ingredientes_orientales.json'
import { useState } from "react";
interface Ingredient {
  id: number;
  name: string;
  type: string;
  imagen: string;
}

export const App = () => {
  const [step, setStep] = useState(1)

  const grouped = ingredients.reduce<Record<string, Ingredient[]>>((acc, item) => {
    if (!acc[item.type]) {
      acc[item.type] = [];
    }
    acc[item.type].push(item);
    return acc;
  }, {});
  
  const types = Object.keys(grouped)

  const currentType = types[step]

  const items = grouped[currentType] || []

  const gridSize = Math.ceil(Math.sqrt(items.length));
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      gap: '1rem'
    }}>
      <h2
        style={{
          color: '#fff',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          fontSize: '1.5rem'
        }}
      >
        {currentType}
      </h2>
      <div
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          placeContent: "center",
        }}
      >
        {items.map((item) => (
          <CardIngredient
            key={item.id}
            ingredient={item}
          />
        ))}
      </div>
      <button
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '.5rem 1rem',
          borderRadius: '8px',
          border: 'none',
          background: '#00C896',
          color: '#fff',
          fontWeight: '700',
          letterSpacing: '0.04em'
        }}
      >
        Siguiente
      </button>
    </div>
  )
}

// proteina
//  carbohidrato
//  Salsa
// Vegetal