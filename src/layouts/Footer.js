import styled from "styled-components";

const Footer = () => {

    const StyledFooter = styled.footer`
        background-color: #443e3e44;
        padding: 1rem;
        margin-top: 2rem;
        margin-bottom: 0;
        `;

    const StyledParagraph = styled.p`
        background-color: #000000b8;
        color: #ffe919;
        width:50%;
        margin: auto;
        `;

    return (
        <StyledFooter>
            <StyledParagraph>Bu websitesi deneme amacıyla oluşturulmuştur.</StyledParagraph>
        </StyledFooter>
    );
}

export default Footer;