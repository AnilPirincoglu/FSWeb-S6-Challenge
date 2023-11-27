import { Accordion, Spinner } from "reactstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import Character from "./Character";


const Characters = () => {

    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        axios.get("https://swapi.dev/api/people")
            .then(res => {
                setCharacters(res.data.results);
                setIsLoading(false);
            });


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

            {isLoading ? <Spinner>Loading...</Spinner> : characters.map((item, index) => <Character key={index} item={item} />)}
        </Accordion>
    );
}

export default Characters;
