import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faYoutube,faLinkedinIn,faInstagram,faTwitter } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'

const FooterStyled = styled.footer`
    .social,.contactInfo{
        background-color: #f7f7f7;
        color: #222222;
        padding: 1rem 1rem 0;
        text-align: center;
    }

    .social h3 {
        border-bottom: solid 1px #b6e8ff;
        font-weight: 400;
        padding-bottom: .25rem;
    }

    .soaialIcons{
        font-size: 200%;
        padding: 1rem 0;
    }

    .soaialIcons a {
        color: #223055;
        padding: 0 .5rem;
    }

    .soaialIcons a:hover {
        color: #ffc107;
    }

    .contactInfo {
        padding-top: 0;
    }

    .contactInfo article {
        border-top: solid 1px #b6e8ff;
        padding: 1rem 0;
    }

    .contactInfo h4 {
        font-weight: 400;
    }

    .contactInfo li {
        font-weight: 300;
        list-style-type: none
    }

    .copy {
        font-size: 70%;
        font-weight: 300;
        padding-top: 1rem;
    }
`


export default function Footers() {
    return (
        
            <FooterStyled>
                <section className='social' id='contact'>
                    <article>
                        <h3>let's be social connect with us</h3>
                        <div className='soaialIcons'>
                            <a href='#'><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href='#'><FontAwesomeIcon icon={faYoutube}/></a>
                            <a href='#'><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href='#'><FontAwesomeIcon icon={faFacebook}/></a>
                            <a href='#'><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>                       
                    </article>
                </section>
                <section className='contactInfo'>
                    <article>
                        <h4>Contact information</h4>
                        <ul>
                            <li>Phone : 123-456-789</li>
                            <li>Email : eshopay@code.id</li>
                            <li>Address : Sentul City</li>
                        </ul>        
                        <p className='copy'>&copy; Codeid Academy 2021</p>             
                    </article>
                </section>
            </FooterStyled>
        
    )
}
