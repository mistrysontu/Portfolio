import React from 'react'
import ComingSoon from '../Components/ComingSoon';
import Title from '../Components/Title';
import ContactItem from '../Components/ContactItem';
import styled from 'styled-components';
import avtar from "../img/avtar.jpeg";
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import GitHub from '@material-ui/icons/GitHub';
import ContactItem2 from '../Components/ContactItem2';
function ResumePage() {
    const gitHub = <GitHub/>
    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationOnIcon />
    const arr = [phone, 8622923347,
                email, "mistrysontu@gmail.com",
                gitHub, "https://github.com/mistrysontu",
                location, "Kolkata, WB, India",
            ];
    return (
        <ResumePageStyled>
            <div className="container">
                <div className="left-section">
                    <div class="avtar">
                        <img src={avtar} alt="avtar" />
                    </div>
                    
                    <div className="Name"><h1>Sontu Mistry</h1></div>
                    <ContactItem2 title="Contact Information" arr={arr}/>
                </div>
                <div className="right-section">
                    mistry
                </div>
            </div>
        </ResumePageStyled>
    )
}

const ResumePageStyled = styled.div`
    /* color: #862258; */
    padding: 2rem 3rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    .container{
        position: relative;
        width: 100%;
        max-width: 1000px;
        min-width: 800px;
        display: grid;
        align-items: center;
        grid-template-columns: 0.75fr 2fr;
        @media screen and (max-width:1000px){
            flex-direction: column;
            .left-section{
                width: 100%;
                /* margin-bottom: 2rem; */
            }
        }
        .left-section{
            position: relative;
            color: #862258;
            /* align-items: center; */
            /* justify-content: center; */
            height: 120vh;
            background-color: white;
            
            .avtar{
                position: relative;
                margin: 0 auto;
                width: 200px;
                align-items: center;
                justify-content: center;
                text-align: center;
                padding-top: 1rem;
                img{
                    width: 100%;
                    border: 5px solid steelblue;
                    border-radius: 50%;
                }
            }
            .Name h1{
                text-align: center;
                font-size: 1.7rem;
                padding: 0 .5rem;
                padding-bottom: 1rem;
                border-bottom: 2px solid steelblue;
                /* padding: 0 .5rem; */
            }

            .sub-container{
                width: 100%;
                text-align: left;
                padding: 1rem 1rem;
                
            }
        }
        .right-section{
            position: relative;
            height: 120vh;
            background-color: steelblue;
        }
    }
    
`;

export default ResumePage;
