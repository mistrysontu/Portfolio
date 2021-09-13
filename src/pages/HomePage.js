import React from 'react'
import styled from 'styled-components'
import LinkedIn from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import Particle from '../Components/Particles'

function HomePage() {
    return (
        <HomePageStyled>
            <div className="my-particles-js">
                <Particle/>
            </div>
            <div className="typography">
                <h1> <span>Sontu Mistry</span></h1>
                <p> Hello My name is Sontu Mistry and I'm a CS Student at IIT Kharagpur. </p>
                <div className="icons">
                    <a href="https://www.google.com/" className="icon i-facebook"><LinkedIn/></a>
                    <a href="https://www.google.com/" className="icon i-github"><GithubIcon/></a>
                    <a href="https://www.google.com/" className="icon i-gmail"><MailIcon/></a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;

    .typography{
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width:80%;

        .icons{
            margin-top: 1rem;
            display: flex;
            justify-content: center;
            .icon{
                display: flex;
                align-items: center;
                justify-content: center;
                border: 2px solid var(--border-color);
                border-radius: 50%;
                transition: all 0.3s ease-in-out;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                    cursor: pointer;
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: 0.5rem;
                }
            }
        }
    }

`

export default HomePage;
