import styled from "styled-components";
import Welcome from "../components/Welcome";
import Characters from "../components/Characters";

const Main = (args) => {

    const { mainComponent } = args;

    const StyledMain = styled.main`
    padding: 1rem;
    margin: auto;
    margin-top: 2rem;
    min-height: calc(100vh - 18rem);
    width: 50%;
    `;

    return (
        <StyledMain>
            {mainComponent === "welcome" && <Welcome />}
            {mainComponent === "characters" && <Characters />}
        </StyledMain>
    );
}

export default Main;