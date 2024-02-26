import { useState } from "react"


const App = () => {


    const [itemArry, setItemArry] = useState(['Item 1', 'Item 2'])

    const AppItem = () => {
        setItemArry(prevItem => {
            return [...prevItem, `Item ${prevItem.length + 1}` ]
        })
    }


    const itemArryHolder = itemArry.map(item => <p>{item}</p>)



    return (
        <section className="main">
            <div className="container">
                <button onClick={AppItem}> Add New Item </button>
                <div className="item-container">
                    {itemArryHolder}
                </div>
            </div>
        </section>
    )
}

export default App