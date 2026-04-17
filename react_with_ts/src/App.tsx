import ChaiCard from "./components/ChaiCard.tsx"
import Counter from "./components/Counter.tsx"

const App = () => {
  return (
    <>
      <div>
        <ChaiCard name='Headphones' price={5000}  />
        <ChaiCard name='I-Phone' price={80000}  />
      </div>
      <div>
        <Counter/>
      </div>
    </>
  )
}

export default App
