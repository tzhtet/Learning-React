

function List(){

    const fruits = [{id: 1, name: "apple", calories: 90}, 
                    {id: 2, name: "orange", calories: 40},
                    {id: 3, name: "banana", calories: 34},
                    {id: 4, name: "coconut", calories: 56},
                    {id: 5, name: "pineapple", calories: 70} 
                    ];

    const listItem = fruits.map(fruit => <li key={fruit.id}>
                                            {fruit.name}: &nbsp; 
                                            <b>{fruit.calories}</b></li>);
    return (<ol>{listItem}</ol>);
}

export default List