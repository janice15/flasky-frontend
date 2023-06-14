import './Animal.css';

const Animal = (props) => {
return (<section className='Animal'>
    <h3>Animal name: {props.name}</h3>
    <p>Species: {props.species}</p>
    <img src="http://placekitten.com/200/300"alt="Photograph of Willow"></img>
    </section>);

};

export default Animal;