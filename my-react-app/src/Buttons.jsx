

function Buttons(){

    let count = 0;
    // const handleClick = () => console.log("HEE HEE!! 😆😆😆😆😆😆")

    // const handleClick2 = (name) => console.log(`${name} stop clicking me 😆😆😆😆😆😆`)

    const handleClick = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} , Hay you clicked me ${count} time/s`)
        }else{
            console.log(`${name} stop clicking me!`)
        }
    }
     return(<button onClick={() => handleClick("Hay TZH")}>Click me 😆</button>)

}

export default Buttons