
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import Films from './Films';

const Karakter = (args) => {

  const { item } = args;



  return (
    <div>
      <AccordionItem>
        <AccordionHeader targetId={item.name} >{item.name}</AccordionHeader>
        <AccordionBody accordionId={item.name}>
          <div>
            <p><strong>Height</strong> :{item.height}</p>
            <p><strong>Mass</strong> :{item.mass}</p>
            <p><strong>Hair Color</strong> : {item.hair_color}</p>
            <p><strong>Skin Color</strong> : {item.skin_color}</p>
            <p><strong>Eye Color</strong> : {item.eye_color}</p>
            <p><strong>Birth Year</strong> : {item.birth_year}</p>
            <p><strong>Gender</strong> : {item.gender}</p>
            <Films />
          </div>


        </AccordionBody>
      </AccordionItem>
    </div>
  );
}

export default Karakter;