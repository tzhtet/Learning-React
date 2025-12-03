import Plant from './assets/plant.jpeg'

function Card(){
    return (
         <div className="card">
            <img src={Plant} alt="plant-white" />
            <h2>Hay Bro</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ab eligendi amet maxime iusto vitae consequatur architecto nesciunt, praesentium, 
                harum beatae inventore tempore reprehenderit voluptatum dolor voluptas temporibus iste quasi id?</p>
         </div>
    );

}

export default Card;