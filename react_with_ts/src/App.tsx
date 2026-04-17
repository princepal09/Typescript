import ChaiCard from "./components/ChaiCard.tsx"
import ChaiList from "./components/ChaiList.tsx"
import Counter from "./components/Counter.tsx"
import type{Chai} from './types.ts'

const menu : Chai[] = [
  {id: 1, name: "Masala", price : 35},
  {id: 1, name: "Ginger", price : 35},
  {id: 1, name: "Black", price : 35},
]

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

      <div>
        <ChaiList items={menu}/>
      </div>
    </>
  )
}

export default App
