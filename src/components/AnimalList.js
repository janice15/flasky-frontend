import './AnimalList.css'
import Animal from './Animal';

const AnimalList = () => {
    const firstAnimal = {
        name: "Violet",
        species: "pit mix"
    };

    const secondAnimal = {
        name: "Norman",
        species: "puppy"
    }

    const listOfAnimals = [
        firstAnimal,
        secondAnimal,
    ]

    const renderedAnimal = listOfAnimals.map(creature => (
        <li><Animal
            name={creature.name}
            species={creature.species}
        /> 
        </li>
    ));

    return (
        <section className="AnimalList">
            <h2>Animal List</h2>
            <ul className="Animal_list">
                {renderedAnimal}
            </ul>
        </section>
    )

};

export default AnimalList;