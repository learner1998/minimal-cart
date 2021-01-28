import React from 'react'

export const Product = ({product,onAdd}) => {
    return (
        <div>
            <img className="small" src={product.image} alt={product.name}></img>
            <h3>{product.name}</h3>
            <div>{product.price}</div>
            <div>
                <button  onClick={()=>onAdd(product)}>
                    Add To Cart
                </button>
            </div>


        </div>
    )
}
