import Plant from './assets/images.jpg'

function Card(){
    return (
         <div className="card">
            <img className="card-image" src={Plant} alt="plant-white" />
            <h2 className="card-title">Hay Bro</h2>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ab eligendi amet maxime iusto vitae consequatur</p>
         </div>
    );

}

export default Card;