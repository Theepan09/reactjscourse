import React, { useState } from 'react'
import './Style.css';
import style from './Style.module.css';
import styled from 'styled-components';
import './Astyle.css'

// const MyBtn = styled.button`
//     background-color:#0d63fd;
//     border-style:none;
//     color:white;
// `;

// const myButtonColor = { backgroundColor: "#0d63fd", borderStyle: "none", color: "white" };

const Products = (prodprop) => {
    const [products, setProducts] = useState(prodprop.prodList)
    return (
        <div className="style1">
            <h1>Products</h1>
            <div class="container">
                <div class="row" className="columnLimit">
                    {products.map((prodList,index) => {
                        return (
                            <div class="col-sm">
                                <img className="imgSize" src={prodList.img} alt="products" />
                                <h4>{prodList.name}</h4>
                                <h4>{prodList.desc}</h4>
                                <h4>{prodList.price}</h4>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )


// const [fruits, setFruits] = useState([
//     { id: 1, name: "Apple" },
//     { id: 2, name: "Orange" },
//     { id: 3, name: "Banana" },
//     { id: 4, name: "Grapes" }
// ])

// const deleteById = id => {
//     setFruits(oldValues => {
//         return oldValues.filter(fruit => fruit.id !== id)
//     })
// }

// return (
//     <div>
//         <ul>
//                 {fruits && fruits.map(fruit => (
//                     <li key={fruit.id}>
//                         <span className={style.BlueButton}>{fruit.name}</span>
//                         <button style={myButtonColor} onClick={() => deleteById(fruit.id)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//     </div>
// )
}

export default Products
