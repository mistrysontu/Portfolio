import React from 'react';
import styled from 'styled-components';

function ComingSoon() {
    return (
        <ComingSoonStyled>
            <h1>Comming Soon...</h1>
        </ComingSoonStyled>
    )
}

const ComingSoonStyled = styled.div`
    display: flex;
    max-height: 100vh;
    /* align-items: center; */
    justify-content: center;
`;

export default ComingSoon;
