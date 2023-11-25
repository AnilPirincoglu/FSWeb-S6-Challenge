import styled from "styled-components";

const SideBar = () => {

    const SideBar = styled.div`
        width: 20rem;
        background-color: #443e3e44;
        height: calc(100vh - 11rem);
        align-items: center;
        `;
    const ButtonDiv = styled.div`
        display: flex;
        flex-direction: column;
        height: calc((100vh - 11rem)/2);
        justify-content: center;
        `;

    return (
        <SideBar>
            <ButtonDiv>
                <Button >Characters</Button>
                <Button >Films</Button>
                <Button >Planets</Button>
                <Button >Vehicles</Button>
                <Button >Star Ships</Button>
            </ButtonDiv>
        </SideBar >
    );
}