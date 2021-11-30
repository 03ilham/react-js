import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const Hero = styled.div`
    background: url("../../belanjaonline.jpg") no-repeat center right;
    background-size: cover;
    color: #fff;
    font-size: 20px;
    text-align: center;
    display: grid;
    grid-template-columns: 10px 2fr 10px;
    grid-template-rows: .5fr 1fr 10px;
    grid-gap: 20px;
    img{
        margin: auto;
        padding-top: 1rem;
        grid-column: 2/3;
        grid-row: 1/2;
        height: 165px;
    }

    article{
        grid-column: 2 / 3;
        grid-row: 2/3;
    }

    article p {
        font-size : 18px;
        font-weight : 600;
        line-height : 22px;
        color : whaite;
    }

    h1{
        font-size: 1rem;
        text-transform: uppercase;
        font-weight : 600;
    }

    button {
        background-color: #fff;
        border-radius: 4px;
        border: #fff;
        color: #2abadf;
        font-size: 1rem;
        padding: 5px 10px;
        margin: .75rem auto 0;
        cursor: pointer; 
    }
`

export default function Headers() {
    return (
        <Hero>
            <img src='../../logo512.png' alt='Online Shop'/>
            <article>
                <h1>Welcome To Shopee</h1>
                <p>Make your life easier, just stay home, pick your desire then chekout</p>
                <button>Getting started <FontAwesomeIcon icon={faAngleDoubleRight}/></button>
            </article>
        </Hero>
    )
}
