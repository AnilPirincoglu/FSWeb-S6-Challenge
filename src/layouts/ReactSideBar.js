import { Button, Input, Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";

import "./ReactSideBar.css"

const ReactSideBar = (args) => {

    const { open, toggle, setMainComponent } = args;

    return (
        <Offcanvas isOpen={open} toggle={toggle}>
            <OffcanvasHeader toggle={toggle}>
                Menu
            </OffcanvasHeader>
            <OffcanvasBody >
                <Input id="exampleSearch" name="search" placeholder="Enter Keyword" type="search" />
                <Button onClick={() => setMainComponent("characters")} >Characters</Button>
                <Button onClick={() => setMainComponent("films")} >Films</Button>
                <Button onClick={() => setMainComponent("planets")} >Planets</Button>
                <Button onClick={() => setMainComponent("vehicles")} >Vehicles</Button>
                <Button onClick={() => setMainComponent("starships")} >Starships</Button>
            </OffcanvasBody>
        </Offcanvas>
    );
}

export default ReactSideBar;