import React from 'react';

const EmCart = (props) => {
    const emCart = props.emCart;

    let first_name = ''
    for (let i = 0; i < emCart.length; i++) {
        const employee = emCart[i];
        first_name = `${first_name} ${employee.first_name},`
        
    }
    return (
        <div>
            <h4>Name of employee:{first_name}</h4>
        </div>
    );
};

export default EmCart;