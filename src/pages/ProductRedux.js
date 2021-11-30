import React, { useState } from "react";
import { connect } from "react-redux";
import { doAddProduct } from "../redux/actions/ProductAction";

export function ProductRedux(props) {

    const [values, setValues] = useState({
        id: undefined,
        name: undefined,
        stock: 0
    })

    const handleChange = name => event => {
        setValues({...values, [name]: event.target.value})
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        const payload ={
            id: values.id,
            name: values.name,
            stock: values.stock
        }

        props.onCreateProduct(payload)
    }

  return (
    <div>
        <form onSubmit={onSubmit}>
            <input
                value={values.id}
                onChange={handleChange('id')}
                type="text"
                placeholder="id"
            />
            <input
                value={values.name}
                onChange={handleChange('name')}
                type="text"
                placeholder="name"
            />
            <input
                value={values.stock}
                onChange={handleChange('stock')}
                type="text"
                placeholder="stock"
            />
            <button className="button" type="submit">
                Save
            </button>
        </form>
      {props.products &&
        props.products.map((prod) => {
          return (
            <>
              <p>
                {prod.id} {prod.name} {prod.stock}
              </p>
            </>
          );
        })}
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
    onCreateProduct: payload => dispatch(doAddProduct(payload.id,payload.name,payload.stock))
});

export default connect(mapStateToProps,mapDispatchToProps)(ProductRedux);
