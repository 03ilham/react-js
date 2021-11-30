import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SidebarStyled = styled.aside`
    background-color: #F7F7F7;

    ul{
        list-style-type: none;
    }

    ul li a {
        display: inline-block;
        text-decoration: none;
        width: 60%;
        padding: 0%.75rem 1rem;
        color: #212f54;
        border-bottom: solid 1px rgba(255,255,255,.5);
        transition: 0ms.14s ease-in-out;
    }

    li a:hover{
        color: #36bae6;
        background: #e0e5eb;
    }

`

export default function Sidebar() {
    return (
        <SidebarStyled>
            <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/counter'>Counter</Link></li>
                <li><Link to='/product'>Food Resto</Link></li>
                <li><Link to='/todo'>Villa Booking</Link></li>
                <li><Link to='/redux'>Product Redux</Link></li>
            </ul>
        </SidebarStyled>
    )
}
