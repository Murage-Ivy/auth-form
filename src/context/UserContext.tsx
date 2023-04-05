import { createContext, useState } from "react";

type UserContextProviderProps = {
    children: React.ReactNode
}

type UserProps = {
    username: string,
    password: string

}

type SignedUserProps = {
    username: string,
    password: string
    password_confirmation: string
}

type UserContextType = {
    loggedUser: UserProps | null,
    setLoggedUser: React.Dispatch<React.SetStateAction<UserProps | null>>
    signedUser: SignedUserProps | null,
    setSignedUser: React.Dispatch<React.SetStateAction<SignedUserProps | null>>
    handleChangeLogin: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleSubmitLogin: (event: React.MouseEvent<HTMLFormElement>) => void,
    handleChangeSignup: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleSubmitSignup: (event: React.MouseEvent<HTMLFormElement>) => void
}
export const UserContext = createContext<UserContextType>({} as UserContextType);


export const UserContextProvider = ({ children }: UserContextProviderProps) => {

    const [loggedUser, setLoggedUser] = useState<UserProps>({
        username: '',
        password: ''
    })
    const [signedUser, setSignedUser] = useState<SignedUserProps>({
        username: '',
        password: '',
        password_confirmation: ''
    })

    const handleChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setLoggedUser(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleChangeSignup = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setSignedUser(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleSubmitSignup = (event: React.MouseEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(signedUser)
        setSignedUser({
            username: '',
            password: '',
            password_confirmation: ''
        })

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
        signedUser,
        setLoggedUser: setLoggedUser as React.Dispatch<React.SetStateAction<UserProps | null>>,
        setSignedUser: setSignedUser as React.Dispatch<React.SetStateAction<SignedUserProps | null>>,
        handleChangeLogin,
        handleSubmitLogin,
        handleChangeSignup,
        handleSubmitSignup
    }
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )

}

