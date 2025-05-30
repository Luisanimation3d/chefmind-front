import { CardIngredient } from "./components/CardIngredient/CardIngredient"

export const App = () => {
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
      >Fruta</h2>
      <div
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: "1fr 1fr 1fr",
          placeContent: "center",
        }}
      >
        <CardIngredient/>
        <CardIngredient/>
        <CardIngredient/>
        <CardIngredient/>
        <CardIngredient selected/>
        <CardIngredient/>
        <CardIngredient/>
        <CardIngredient/>
        <CardIngredient/>
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