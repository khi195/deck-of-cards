import React from 'react';

const Button = props => {
    return (
        <div>
            <button type="button" 
                onClick={props.onClick} 
                disabled={props.disabled}>
                    {props.Label} 
            </button>
        </div>
    )
}

export default Button;