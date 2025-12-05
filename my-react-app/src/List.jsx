

function List(props){

    // const fruits = [{id: 1, name: "apple", calories: 90}, 
    //                 {id: 2, name: "orange", calories: 40},
    //                 {id: 3, name: "banana", calories: 34},
    //                 {id: 4, name: "coconut", calories: 56},
    //                 {id: 5, name: "pineapple", calories: 70} 
    //                 ];

    //fruits.sort((a,b) => a.name.localeCompare(b.name)); //ALPHABETICAL
    //fruits.sort((a,b) => b.name.localeCompare(a.name));   //REVERSE ALPHABETICAL
    //fruits.sort((a,b) => a.calories - b.calories); // NUMERIC
    //fruits.sort((a, b) => b.calories - a.calories); 

    const categtory = props.category;
    const itemList =  props.items;

    const listItems = itemList.map(item => <li key={item.id}>
                                            {item.name}: &nbsp; 
                                            <b>{item.calories}</b></li>);
    return (
        <>
        <h3 className="list-category">{categtory}</h3>
        <ol className="list-items">{listItems}</ol>
        </>
    );
}

export default List