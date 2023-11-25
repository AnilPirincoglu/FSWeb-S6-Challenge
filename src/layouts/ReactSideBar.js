import { Button, Input, Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";

import "./ReactSideBar.css"

const ReactSideBar = (args) => {

    const { isOpen, toggle } = args;

    return (
        <div>
            <Offcanvas isOpen={isOpen} toggle={toggle}>
                <OffcanvasHeader toggle={toggle}>
                    Menu
                </OffcanvasHeader>
                <OffcanvasBody>
                    <Input id="exampleSearch" name="search" placeholder="Enter Keyword" type="search" />
                    <Button >Characters</Button>
                    <Button >Films</Button>
                    <Button >Planets</Button>
                    <Button >Vehicles</Button>
                    <Button >Star Ships</Button>
                </OffcanvasBody>
            </Offcanvas>
        </div>
    );
}

export default ReactSideBar;