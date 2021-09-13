import React from 'react'
import ComingSoon from '../Components/ComingSoon';
import Title from '../Components/Title';
import styled from 'styled-components';
function ProjectPage() {
    return (
        <ProjectPageStyled>
            <Title title={'Projects'} span={'Projects'} />
            <div id="keep-center">
                <ComingSoon />
            </div>
        </ProjectPageStyled>
    )
}

const ProjectPageStyled = styled.div`
    padding: 5rem;
    #keep-center{
        /* background-color: steelblue; */
        transform: translate(0%, 250%);
    }
`;

export default ProjectPage;
