import React, {useMemo, useState} from 'react'
import SelectSelfMade, {ItemsType} from './SelectSelfMade';

export default {
    title: 'SelectSelfMade stories with useMemo',
    component: SelectSelfMade
}
type StateType = Array<ItemsType>



export const SelectStoryUseMemo = () => {
    const initialData: StateType = [
        {id: 1, value: 'NewYork', country: 'USA', isCapital: false},
        {id: 2, value: 'Rome', country: 'Italy', isCapital: true},
        {id: 3, value: 'Grodno', country: 'Belarus', isCapital: false},
        {id: 4, value: 'Phuket', country: 'Thailand', isCapital: false},
        {id: 5, value: 'Minsk', country: 'Belarus', isCapital: true},
        {id: 6, value: 'Bangkok', country: 'Thailand', isCapital: true},
    ]
    const [globalState, setGlobalState] = useState(initialData)

    const SelectContainer = React.memo(SelectSelfMade)

    let belState = useMemo(() => globalState.filter((cityObject) => cityObject.country === 'Belarus'), [globalState])
    let thaiState = useMemo(() => globalState.filter((cityObject) => cityObject.country === 'Thailand'), [globalState])
    let capitalsState = useMemo(() => globalState.filter((cityObject) => cityObject.isCapital === true), [globalState])


    const [bel, setBel] = useState<string>("Bel")
    const [thai, setThai] = useState<string>("Thai")
    const [capitals, setCapitals] = useState<string>("Capitals")

    return <>
        <p>Belarusian cities:</p>
        <SelectContainer onChange={setBel}
                         value={bel}
                         items={belState}
                         id={"bel"}
        />
        <p>Thai cities:</p>
        <SelectContainer onChange={setThai}
                        value={thai}
                        items={thaiState}
                         id={"thai"}
        />
        <p>Capital cities:</p>
        <SelectContainer onChange={setCapitals}
                        value={capitals}
                        items={capitalsState}
                         id={"capitals"}
        />
        <button onClick={()=>{
            setGlobalState([...globalState,{id: 6 + Math.random(), value: 'Test', country: 'Thailand', isCapital: true}])
            console.log(globalState)
        }}>Add new city</button>
    </>
}