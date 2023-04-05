import { createContext, useState } from "react";

type UserContextProviderProps = {
    children: React.ReactNode
}

type UserProps = {
    username?: string,
    password?: string

}

type UserContextType = {
    loggedUser: UserProps | null,
    setLoggedUser: React.Dispatch<React.SetStateAction<UserProps | null>>
    handleChangeLogin: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleSubmitLogin: (event: React.MouseEvent<HTMLFormElement>) => void
}
export const UserContext = createContext<UserContextType>({} as UserContextType);


export const UserContextProvider = ({ children }: UserContextProviderProps) => {

    const [loggedUser, setLoggedUser] = useState<UserProps>({
        username: '',
        password: ''
    })


    const handleChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setLoggedUser(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleSubmitLogin = (event: React.MouseEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(loggedUser)
        setLoggedUser({
            username: '',
            password: ''
        })
    }


    const value: UserContextType = {
        loggedUser,
        setLoggedUser: setLoggedUser as React.Dispatch<React.SetStateAction<UserProps | null>>,
        handleChangeLogin,
        handleSubmitLogin
    }
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )

}

