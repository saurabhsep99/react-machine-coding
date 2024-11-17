import { useState } from 'react'

let jsonData = [
    { name: 'First', id: 1, checked: false },
    { name: 'Second', id: 2, checked: false },
    { name: 'Third', id: 3, checked: false },
    { name: 'Fourth', id: 4, checked: false },
    { name: 'Fivth', id: 5, checked: false },
    { name: 'Sixth', id: 6, checked: false }
]

function TransferableLlist() {

    const [firstBoxItems, setFirstBoxItems] = useState(jsonData || []);
    const [secondBoxItems, setSecondBoxItems] = useState([]);

    const transferedItems = (from, to, setFrom, setTo) => {
        let newfrom = [...from];
        let filteredItems = newfrom.filter((item) => item.checked)?.map((item) => ({ ...item, checked: false }))
        let notCheckedItems = newfrom.filter((item) => !item.checked);
        setTo([...to, ...filteredItems]);
        setFrom(notCheckedItems);
    }

    const handleCheckedItems = (e, index, arr, context) => {
        let newArrItems = [...arr];
        let modifiedData = newArrItems?.map((data, idx) => {
            if (index === idx) {
                return { ...data, checked: !data.checked }
            }
            return data;


        })
        context === 1 ? setFirstBoxItems(modifiedData) : setSecondBoxItems(modifiedData);
    }
    return (
        <div aria-label='transferable list' style={{ display: 'flex', gap: '10px', alignItems: 'center', alignContent: 'center' }}>
            {/* //implemt first box */}
            <div style={{ width: '200px', height: '300px', border: '1px solid black' }}>
                {firstBoxItems?.map((item, index) => (
                    <div key={index}>
                        <label aria-label='first_box' aria-describedby='first box of transfereable list ' onClick={(e) => handleCheckedItems(e, index, firstBoxItems, 1)} style={{ display: 'block', margin: '10px', padding: '5px', border: '1px solid black', backgroundColor: item?.checked ? 'black' : 'aquamarine', color: item?.checked ? 'white' : 'black' }}>{item?.name}</label>
                    </div>
                ))}
            </div>

            {/* //implement actions */}
            <div style={{ display: 'flex', flex: 1, flexDirection: 'column', gap: '10px' }}>
                <button onClick={() => transferedItems(secondBoxItems, firstBoxItems, setSecondBoxItems, setFirstBoxItems)}
                >Left</button>
                <button onClick={() => transferedItems(firstBoxItems, secondBoxItems, setFirstBoxItems, setSecondBoxItems)}
                >Right</button>
            </div>

            {/* //implement second box */}

            <div style={{ width: '200px', height: '300px', border: '1px solid black' }}>
                {secondBoxItems?.map((item, index) => (
                    <div key={index}>
                        <label onClick={(e) => handleCheckedItems(e, index, secondBoxItems)} style={{ display: 'block', margin: '10px', padding: '5px', border: '1px solid black', backgroundColor: item?.checked ? 'black' : 'aquamarine', color: item?.checked ? 'white' : 'black' }}>{item?.name}</label>
                    </div>
                ))}
            </div>

        </div>

    )
}
export default TransferableLlist;