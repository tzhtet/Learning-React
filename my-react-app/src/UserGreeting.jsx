import PropTypes from 'prop-types'


function UserGreeting(props){

    // if(props.isLoggedIn){
    //     return <h2>Hello, Java User {props.username}</h2>
    // }
    //  return <h2>Please Login to Continue</h2>

    //  return (props.isLoggedIn ? 
    //                            <h2 className="welcome-message">
    //                             Hello, friends I am Java User, my name is {props.username}
    //                             </h2> 
    //                          : <h2 className="login-prompt">
    //                             Please Login to Continue
    //                             </h2>)
    
    const welcomeMessage = <h2 className="welcome-message">
                             Hello, friends I am Java User, my name is {props.username} 
                            </h2>
    const loginPrompt =   <h2 className="login-prompt">
                                 Please Login to Continue
                           </h2>
    return(props.isLoggedIn ? welcomeMessage: loginPrompt)                      
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}


export default UserGreeting