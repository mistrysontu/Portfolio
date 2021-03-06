import React from 'react'
import styled from 'styled-components';
function Title({title, span}) {
    return (
        <TitleStyled>
            <h2>{title} <span>{span}</span></h2>
        </TitleStyled>
    )
}

const TitleStyled = styled.div`
    position: relative;
    h2{
        color: var(--white-color);
        font-size: 3.2rem;
        font-weight: 600;
        text-transform: uppercase;
        position: relative;
        padding-bottom: 0.6rem;
        &::before{
            content: "";
            position: absolute;
            bottom:0;
            left:0;
            width: 7.8rem;
            height: 0.33rem;
            background-color: var(--background-light-color-2);
        }
        &::after{
            content: "";
            position: absolute;
            bottom:0;
            left:0;
            width: 3.7rem;
            height: 0.33rem;
            background-color: var(--primary-color);
        }
        span{
            font-size: 5rem;
            font-weight: 900;
            color: rgba(25,29,43,0.44);
            position: absolute;
            left:0;
            top:30%;
            z-index:-1;
        }
    }
`;
export default Title;
