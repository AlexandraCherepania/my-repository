import React from 'react';



const Filter = ({ value, onChange }) => {
    return (
         <label>
            Фільтер по назві:
            <input
                type="text"
                value={value}
                onChange={onChange} />
            </label>
    );
}

export default Filter;