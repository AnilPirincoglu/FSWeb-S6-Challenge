import axios from "axios";
import { useEffect, useState } from "react";

const CharacterFilms = (args) => {
    const { films } = args;
    const [filmNames, setFilmNames] = useState([]);


    useEffect(() => {
        const dizi = []
        films.map((url, index) =>
            axios.get(url)
                .then(res => {
                    dizi.push(res.data.title);
                    if (index === dizi.length - 1)
                        setFilmNames(dizi);
                }))
    }, [films])


    return (
        <ul>
            {filmNames.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    )
}
export default CharacterFilms;