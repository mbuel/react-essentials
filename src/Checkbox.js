import React, { useReducer } from 'react';

function Checkbox() {
    const [ checked, toggle ] = useReducer(
        (checked) => !checked,
        false
    );

    return (
        <>
            <label htmlFor="Checkbox">
                {checked ? "checked" : "not checked"}
            </label>
            <input
                id="Checkbox"
                type="checkbox"
                value={checked}
                onChange={toggle}
            />
        </>
    );
}

export default Checkbox;