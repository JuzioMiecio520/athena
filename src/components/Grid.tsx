import {createRef, useEffect, useRef, useState} from "react"
import {GridStack} from "gridstack";

export default function useGrid() {
    const refs = useRef({})
    const gridRef = useRef();
    const [items, setItems] = useState([{ id: 'item-1' }, { id: 'item-2' }])

    return {
        addItem: () => {

        },
        Grid: () => <Grid items={items} refs={refs} gridRef={gridRef} />
    }
}

function Grid({ items, refs, gridRef }) {

    if (Object.keys(refs.current).length !== items.length) {
        items.forEach(({ id }) => {
            refs.current[id] = refs.current[id] || createRef()
        })
    }

    useEffect(() => {
        gridRef.current = gridRef.current ||
            GridStack.init({float: true}, '.controlled')
        const grid = gridRef.current
        grid.batchUpdate()
        grid.removeAll(false)
        items.forEach(({ id }) => grid.makeWidget(refs.current[id].current))
        grid.batchUpdate(false)
    }, [items])

    return (
        <div>
            <div className={`grid-stack controlled`}>
                {items.map((item, i) => {
                    return (
                        <div ref={refs.current[item.id]} key={item.id} className={'grid-stack-item'}>
                            <div className="grid-stack-item-content">
                                item {JSON.stringify(item, null, 2)}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
