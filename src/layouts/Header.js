import styled from "styled-components";

const Header = (args) => {

    const { toggle } = args;

    const StyledHeader = styled.header`
        background-color: #443e3e44;
        padding: 1rem;
        `;

    const Logo = styled.img`
        max-height: 8rem;
        border-radius: .7rem;
        float: left
        `;

    const Title = styled.h1`
        font-family: 'Tourney', sans-serif;
        background-color: #000000b8;
        color: #ffe919;
        padding: .5rem 1.5rem;
        border-radius:.7rem;
        display: inline-block;
        line-height: 7rem;
        margin-left: -13.25rem;
        `;


    return (
        <StyledHeader>
            <Title>Star Wars MiniWiki</Title>
            <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png" onClick={toggle} />

        </StyledHeader>
    );
}

export default Header;