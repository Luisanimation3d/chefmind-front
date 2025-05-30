import { CardIngredient } from "./components/CardIngredient/CardIngredient"
import ingredients from './assets/ingredientes_orientales.json'
import { useState } from "react";
import './App.css'
interface Ingredient {
  id: number;
  name: string;
  type: string;
  imagen: string;
}

export const App = () => {
  const [step, setStep] = useState(1)
  const [selected, setSelected] = useState<number[]>([])

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

  const onSelect = (id: number) => {
    const selectedItems = [...selected];
    selectedItems[step] = id;
    setSelected(selectedItems)
  }

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
        className="cards_container"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
        }}
      >
        {items.map((item) => (
          <CardIngredient
            key={item.id}
            ingredient={item}
            onClick={onSelect}
            selected={selected[step] === item.id}
          />
        ))}
      </div>
      <div
        className="buttons_container"
      >
        {
          step > 1 &&
          <button
            className="prev-btn"
            onClick={() => setStep(step - 1)}
          >
            prev
          </button>
        }
        <button
          onClick={() => setStep(step + 1)}
        >
          {
            step === 4 ?
            'finish' :
            'next'
          }
        </button>
      </div>
    </div>
  )
}

// proteina
//  carbohidrato
//  Salsa
// Vegetal