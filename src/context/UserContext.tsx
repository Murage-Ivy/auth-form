import { createContext, useState } from "react";

type UserContextProviderProps = {
    children: React.ReactNode
}

type UserProps = {
    username: string,
    password: string

}

type UserContextType = {
    loggedUser: UserProps | null,
    setLoggedUser: React.Dispatch<React.SetStateAction<UserProps | null>>


}
export const UserContext = createContext<UserContextType>({} as UserContextType);


export const UserContextProvider = ({ children }: UserContextProviderProps) => {

    const [loggedUser, setLoggedUser] = useState<UserProps>({
        username: '',
        password: ''
    })

    const value: UserContextType = {
        loggedUser,
        setLoggedUser: setLoggedUser as React.Dispatch<React.SetStateAction<UserProps | null>>
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )

}

