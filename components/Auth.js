import { getAuth } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { Nav } from "./Nav";
import nookies from 'nookies';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [currentUser, setcurrentUser] = useState()
    useEffect(() => {
        const auth = getAuth();
        return auth.onIdTokenChanged(async (currentUser) => {
            if (!currentUser) {
                nookies.set(undefined, 'token', null, { path: '/' });
                return;
            }
            const token = await currentUser.getIdToken();
            setcurrentUser(currentUser);
            nookies.set(undefined, 'token', token, { path: '/' });
        })
    }, [])

    return (
        <AuthContext.Provider value={{currentUser}}>
            <div className="h-screen">
                <Nav />
                <main className="h-screen">
                    {children}
                </main>
            </div>
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);