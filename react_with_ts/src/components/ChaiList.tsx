import type {Chai} from '../types'
import ChaiCard from './ChaiCard'

interface ChaiListProp{
    items : Chai[]
}

const ChaiList = ({items}: ChaiListProp) => {
  return (
    <div>
        {items.map((chai) => (
            <ChaiCard key={chai.id} name={chai.name} price={chai.price}/>
        ) )}
    </div>
  )
}

export default ChaiList
