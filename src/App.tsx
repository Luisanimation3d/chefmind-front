import { CardIngredient } from "./components/CardIngredient/CardIngredient"
import ingredients from './assets/ingredientes_orientales.json'
import { useState } from "react";
import { FinalRecipe } from "./components/finalRecipe/finalRecipe";
import './App.css'
interface Ingredient {
  id: number;
  name: string;
  type: string;
  imagen: string;
}

export const App = () => {
  const [step, setStep] = useState(0)
  const [selected, setSelected] = useState<number[]>([])
  const [showFinalRecipe, setShowFinalRecipe] = useState(false)

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

  const hasSelection = !!selected[step]

  const handleNext = () => {
    if (!hasSelection) return
    setStep(s => Math.min(s + 1, types.length - 1))
    if(selected.length === 4) setShowFinalRecipe(true)
  }

  const reiniciar = () => {
    setStep(0)
    setSelected([])
    setShowFinalRecipe(false)
  }

  return (<>
  <h1 className="logo">LUCAYAJO</h1>
  {!showFinalRecipe ?
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
            dimmed={selected[step] !== item.id}
          />
        ))}
      </div>
      <div
        className="buttons_container"
      >
        {
          step > 0 &&
          <button
            className="prev-btn"
            onClick={() => setStep(step - 1)}
          >
            prev
          </button>
        }
        <button
          onClick={handleNext}
        >
          {
            step === 3 ?
            'finish' :
            'next'
          }
        </button>
      </div>
    </div>
    :
    <FinalRecipe combo={selected.join('-')} reiniciar={reiniciar}/>
    }
  </>
  )
}