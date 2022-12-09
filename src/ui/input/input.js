import React from "react";
import styles from './input.module.css';
import cx from 'clsx';

function Input ({ type, placeholder, defaultValue, disabled, className, readonly }) {
    return <input 
    type={type} 
    placeholder={placeholder} 
    defaultValue={defaultValue} 
    disabled={disabled} 
    readOnly={type} 
    className={cx(styles['input'], className)}></input>
}

export { Input };