import {  createContext,useState } from "react";

export const AuthValContext = createContext(null);
export const AuthContext = ({children}) =>{
    const [loading,setLoading] =useState(false);
    const [error, setError] = useState(false);
    return(
        <AuthValContext.Provider value={{ loading, error,setLoading, setError}}>
            {children}
        </AuthValContext.Provider>
    )
}