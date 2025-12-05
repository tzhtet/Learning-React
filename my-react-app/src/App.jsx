import List from "./List.jsx";

function App() {

  const fruits = [{id: 1, name: "apple", calories: 90}, 
                    {id: 2, name: "orange", calories: 40},
                    {id: 3, name: "banana", calories: 34},
                    {id: 4, name: "coconut", calories: 56},
                    {id: 5, name: "pineapple", calories: 70} 
                    ];
  
  const vegetables = [{id: 6, name: "potatos", calories: 110}, 
                      {id: 7, name: "celery", calories: 15},
                      {id: 8, name: "carrots", calories: 44},
                      {id: 9, name: "corn", calories: 56},
                      {id: 10, name: "broccoli", calories: 30} 
                    ];

  return(
    <>
    <List items={fruits} category="Fruits"/>
    <List items= {vegetables} category="Vegetables"/>
    </>
  );
}
export default App
