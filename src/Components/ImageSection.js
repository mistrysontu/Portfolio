import React from 'react'
import styled from 'styled-components';
import resume from '../img/pic.jpeg'
import PrimaryButton from '../Components/PrimaryButton';
function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt="resume"/>
            </div>
            <div className="right-content">
                <div className="sub-titile">
                    <h4>I am <span>Sontu Mistry</span></h4>
                </div>
                <p className="paragraph">
                I am a CS student at IIT Kharagpur, Kharagpur, India.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Language</p>
                        <p>Location</p>
                        <p>Occupation</p>
                    </div>
                    <div className="info">
                        <p>: Sontu Mistry</p>
                        <p>: 23</p>
                        <p>: Indian</p>
                        <p>: Bengali, English, Hindi</p>
                        <p>: Kolkata, West Bengal, India</p>
                        <p>: Student</p>
                    </div>
                </div>
                    <PrimaryButton title="Download CV" />
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 75%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
