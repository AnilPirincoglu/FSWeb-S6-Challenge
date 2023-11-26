import { Accordion, Spinner } from "reactstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import Karakter from "./Character";


const Characters = () => {

    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState();

    useEffect(() => {
        setIsLoading(true);

        axios.get("https://swapi.dev/api/people/")
            .then(res => setCharacters(res.data));

        setIsLoading(false);
    }, []);

    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen('');
        } else {
            setOpen(id);
        }
    };

    return (
        <Accordion open={open} toggle={toggle}>
            <h1>Karakterler</h1>
            {isLoading && <Spinner></Spinner>}
            {isLoading ? <Spinner></Spinner> : characters.map((item, index) => <Karakter key={index} item={item} />)}
        </Accordion>
    );
}

export default Characters;
