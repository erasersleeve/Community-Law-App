import React from "react";
import styled from 'styled-components';

const Styles = styled.div `
    footer {
        position: fixed;
        display: flex;
        margin-left: -5%;
        margin-right: -5%;
        margin-top: 30px;
        background-color: #111d4aff;
        bottom: 0;
        height: 40px;
        line-height: 40px;
        width: 110%;

    }
`



function Footer() {

    return (
        <>
        <Styles>
            <footer className="footer">
                <div className="container">
                    <a href="https://github.com/ccraig7321" className="text-light p-4 ">Chelsey Craig's Github</a>
                    <a href="https://github.com/AndrewbHall96" className="text-light p-4 ">Andrew Hall's Github</a>
                    <a href="https://github.com/Jchomer90" className="text-light p-4 ">Josh Homer's Github</a>
                    <a href="https://github.com/Turtando" className="text-light p-4 ">Chris Turton's Github</a>
                    <a href="https://github.com/erasersleeve" className="text-light p-4 ">Tim 
                    Winters's Github</a>
                </div>
            </footer>
        </Styles>
        </>
    )
}

export default Footer;



