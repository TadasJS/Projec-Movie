import axios from "axios";
import { createContext, useState } from "react";


function getUserFromLocalStorage() {
    let user = localStorage.getItem('token')

    if (!user){
      return  {email:'', user_role:''}
    }

    return JSON.parse(user)
}


export const UserContext = createContext()

export function UserProvider ({children}) {
    
    const [user, setUser] = useState (getUserFromLocalStorage())
    const [token, setToken] = useState()

    
    function loginUser(person) {

        console.log(person)
        try {
            axios
            .post('http://localhost:3000/api/users/login', person)
            .then((data) => {
                console.log(data.data)
                setToken(data.data)
                console.log('cia tokenas...',token)
            })
            
        } catch (error) {
            console.error(error)
        }
        // if (person === 'admin') {
        //     setUser({...user, email: person, user_role:'admin'})            
        //     localStorage.setItem('token', JSON.stringify({email: person, user_role:'admin'}))
           
        // }  

        // if(person === 'user'){          
        //     setUser({...user, email: person, user_role:'user'})
        //     localStorage.setItem('token', JSON.stringify({email: person, user_role:'user'}))
                       
        // }   
        
    }
    
    function logoutUser() {
        setUser({...user, email:'', user_role:''})
        localStorage.removeItem('token')
        
    }
 
    return(
       <UserContext.Provider value={{user, loginUser, logoutUser}}>
        {children}
       </UserContext.Provider>
    )
}