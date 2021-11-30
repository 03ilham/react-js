import React from 'react'
import { ProductUI } from "./productStyled";
import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/fa/";

export const ProductItem = (props) => {
    return props.products.map((el) => (
        <ProductUI>
          <li>
            <span>{el.prod_id}</span>
            <span>{el.prod_name}</span>
            <span>{el.prod_price}</span>
            <span>{el.prod_stock}</span>
            <div>
                <span>
                    <Icon size={14} icon={trash} onClick={()=>props.onDelete(el.prod_id)}/>
                </span>
            </div>
          </li>
        </ProductUI>
      ));
}
