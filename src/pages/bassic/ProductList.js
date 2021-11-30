import React, { useState } from "react";
import { ProductUI } from "./productStyled";
import { ProductItem } from "./ProductItem";

const MOCK_PRODUCTS = [
  { prod_id: 1, prod_name: "TV", prod_price: 1000, prod_stock: 10 },
  { prod_id: 2, prod_name: "Handphone", prod_price: 500, prod_stock: 100 },
  { prod_id: 3, prod_name: "Laptop", prod_price: 200, prod_stock: 100 },
];

export default function ProductList() {
  const [display, setDisplay] = useState(false);
  let [products, setProducts] = useState(MOCK_PRODUCTS);
  let [values, setValues] = useState({
    prod_name: "",
    prod_price: 0,
    prod_stock: 0,
  });

  const onDelete = (id) =>{
    //alert(id)
    const foundProduct = products.filter(el=> el.prod_id !== id);
    setProducts([...foundProduct])

  }

  //const render = () => {
    // return products.map((el) => (
    //   <ProductUI>
    //     <li>
    //       <span>{el.prod_id}</span>
    //       <span>{el.prod_name}</span>
    //       <span>{el.prod_price}</span>
    //       <span>{el.prod_stock}</span>
    //       <div>
    //           <span>
    //               <Icon size={14} icon={trash} onClick={()=>onDelete(el.prod_id)}/>
    //           </span>
    //       </div>
    //     </li>
    //   </ProductUI>
    // ));
  //};

  const showDisplay = () => {
    setDisplay(true);
  };

  const hidden = () => {
    setDisplay(false);
  };

  const addProduct = () => {
    products.push(
      {
        prod_id: 4,
        prod_name: "Computer",
        prod_price: 100,
        prod_stock: 10,
      },
      {
        prod_id: 5,
        prod_name: "Motor",
        prod_price: 1000,
        prod_stock: 100,
      }
    );
    setDisplay(true)
  };

  const tambahProduct = () => {
    setProducts([
      ...products,
      {
        prod_id: 4,
        prod_name: "Komputer",
        prod_price: 500,
        prod_stock: 10,
      },
    ]);
  };


  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setProducts([
      ...products,
      {
        prod_id: parseInt(Math.random() * 10),
        prod_name: values.prod_name,
        prod_price: values.prod_price,
        prod_stock: values.prod_stock,
      },
    ]);
    setDisplay(true);
    //alert(values.prod_name)
  };

  return (
    <ProductUI>
      <h1>Product List</h1>
      <button onClick={showDisplay}>Display Product</button>
      <button onClick={hidden}>Hide Product</button>
      <button onClick={addProduct}>Add Products</button>
      <button onClick={tambahProduct}>Add Products Spreed</button>
      {
      display ? <ProductItem 
      products={products}
      onDelete={onDelete}
      />
       : null
      }
      <form action="#">
        <div>
          <input
            name="prod_name"
            placeholder="name"
            value={values.prod_name}
            onChange={handleChange("prod_name")}
          />
          <input
            name="prod_price"
            placeholder="price"
            value={values.prod_price}
            onChange={handleChange("prod_price")}
          />
          <input
            name="prod_stock"
            type='number'
            placeholder="stock"
            value={values.prod_stock}
            onChange={handleChange("prod_stock")}
          />
          <button type="submit" onClick={onSubmit}>
            Simpan
          </button>
        </div>
      </form>
    </ProductUI>
  );
}
