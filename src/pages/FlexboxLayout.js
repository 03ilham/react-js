import React from 'react'
import styled from 'styled-components'

const Flex1 = styled.div`
    display : flex;
    gap : 3px;
    flex-direction : row-reverse;
`;

const FlexLayout = styled.div`
    display : flex;
    min-height : 100vh;
    flex-direction : column;

    header{
        background-color : #ccc;
        font-size : 3rem;
    }

    main article{
        background-color : #00c9f2;
        flex : 1;
    }

    main{
        display : flex;
        flex-direction : column;
        flex:1;
    }

    main aside{
        background-color : #FF0000;
    }

    footer{
        background-color : #ccc;
    }

    @media(min-width : 768px){
        main{
            display : 80%;
            margin : 0 auto;
            flex-direction : row
        }

        .leftSidebar{
            order : -1
        }
    }
`;

export default function FlexBoxLayout() {
    return (
        <FlexLayout>
            <header>Header</header>
            <main>
                <article>main</article>
                <aside>Right Sidebar </aside>
                <aside className='leftSidebar'>Left Sidebar 2</aside>
            </main>
            <footer></footer>
            {/* <div style={{background:"red"}}>A</div>
            <div style={{background:"yellow"}}>B</div>
            <div style={{background:"green"}}>C</div>
            <div style={{background:"blue"}}>D</div>
            <div style={{background:"gray"}}>E</div> */}
        </FlexLayout>
    )
}
