import { createContext, useContext, useState } from "react";
import { apiClient } from "./api/ApiClient";
import { executeBasicAuthenticationService } from "./api/AuthenticationApiService";

//creating a context
export const AuthContext=createContext()

export const useAuth=()=> useContext(AuthContext)
//share the created context with other component
export default function AuthProvider({children}){
    const [isAuthenticated,setAuthenticated]=useState(false)

    const[username,setusername]=useState(null)
    const [token, setToken] = useState(null)
    const[role,setRole]=useState(null)

    async function login(username,password){
        const baToken='Basic '+window.btoa(username + ":" + password)

        try{
            const response=await executeBasicAuthenticationService(baToken)
            if(response.status===200){
                setAuthenticated(true)
                setusername(username)
                setToken(baToken)
                const userRole = await fetchUserRole(username);
        setRole(userRole);


                apiClient.interceptors.request.use(
                    (config)=>{
                        console.log('intercepting and adding a token')
                        config.headers.Authorization=baToken
                        return config
                    }
                )
                return true
            }else{
                logout()
                return false
            }
        }catch(error){
            logout()
            return false;
        }
    }
    function logout() {
        setAuthenticated(false)
        setToken(null)
        setusername(null)
    }
    async function fetchUserRole(username) {
        // You can make an API call to fetch the user's role based on the username.
        // Replace this with your actual implementation.
        return 'ADMIN'; // Example: assuming 'admin' as the role
      }
    return (
        <AuthContext.Provider value={ {isAuthenticated, login, logout, username, token,role}  }>
            {children}
        </AuthContext.Provider>
    )

}