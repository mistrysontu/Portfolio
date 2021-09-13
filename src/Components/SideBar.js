import React from 'react'
import styled from 'styled-components';
import Navigation from './Navigation';

function SideBar() {
    return (
        <SlideBarStyled>
            <Navigation />
        </SlideBarStyled>
    )
}

const SlideBarStyled = styled.div`
    width: 16.3rem;
    position: fixed;
    top:0;
    bottom:0;
    left:0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    background-color: var(--sidebar-dark-color);
`

export default SideBar;
