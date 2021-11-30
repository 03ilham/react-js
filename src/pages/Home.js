import React from 'react'
import styled from 'styled-components'

const Side = styled.div`
img{
    margin: auto;
    padding-top: 0rem;
    grid-column: 2/3;
    grid-row: 1/2;
    height: 200px;
}
`

export default function Home() {
    return (
        <Side>
            <h2>Welcome To Shopee</h2>
            <img src='../../shopee.jpg' alt='Online Shooping'/>
        </Side>
    )
}
