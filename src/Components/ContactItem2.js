import React from 'react';
import styled from 'styled-components';

function ContactItem2({title, arr}) {
    let count = 0;
    return (
        <ContactItem2Styled>
            <div className="title">{title}</div>
            <div className="contact-info">
                <ul className="list-items">
                    {arr.map(i => <li className="list-item" key={i}>{i}</li>)}
                </ul>
            </div>
        </ContactItem2Styled>
    )
}

const ContactItem2Styled = styled.div`
    padding: 1rem;
    .title{
        font-size:1.2rem;
        font-weight: 700;
    }
    .list-items{
        list-style: none;
        .list-item{
            font-size: 0.65rem;
            clear: both;
            &:nth-child(2n+1){
                display: inline;
                float:left;
                background-color: steelblue;
            }
            &:nth-child(2n){
                display: inline;
                float:right;
                background-color: steelblue;
            }
        }
    }
`;

export default ContactItem2;
