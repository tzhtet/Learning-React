import PropType from 'prop-types'

function Student(props){

    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );

}

Student.propType = {
    name: PropType.string,
    age: PropType.number,
    isStudent: PropType.bool

}

Student.defaultProps = {
    name: "Hay Mun Oo",
    age: 0,
    isStudent: true,
}

export default Student