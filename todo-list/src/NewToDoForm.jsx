import { useState } from "react";

export function NewToDoForm(props) {
    const [newItem, setNewItem] = useState(""); {/*onChange save whatever we type as the newItem, then react will render the whole html again for the new state */}

    function handleSubmit(e) { 
        e.preventDefault(); {/* prevent the page to refresh when Add is pressed */}
        if (newItem === "") return
    
        props.onSubmit(newItem); {/* destructuring how*/}
    
        setNewItem(""); {/* returns empty array to clear out the typebox after we added todo */}
    }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">Whatchu gonna do?</label>
                <input 
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    type="text" 
                    id="item" 
                    placeholder="Type here"
                />
            </div>
            <button className="btn">Add</button>
        </form>
    )
}