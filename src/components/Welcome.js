import styled from "styled-components";

const Welcome = () => {

    const StyledDiv = styled.div`
    background-color: #ffffff3b;
    border-radius: 1rem;
    padding: 1rem;
    `;

    return (
        <StyledDiv>
            <h1>Star Wars MiniWiki' ye Hoşgeldiniz.</h1>
            <h4>Sol üst köşedeki Logoya tıklayarak gezinmeye başlayabilirsiniz.</h4>
        </StyledDiv>

    );
}

export default Welcome;