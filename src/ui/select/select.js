import React from "react";
import styles from './select.module.css';

function Select ({ options, onBlur }) {
    return (
    <select onBlur={onBlur} className={styles['select']}>
    {options && 
    options.map((options, index) => {
        return <option key={index}>{options}</option>
    })}
    </select>
    )
}

export { Select };