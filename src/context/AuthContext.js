//Se puede acceder desde cualquier lugar
import {createContext} from 'react';

const AuthContext = createContext({
    auth: undefined, 
    user: undefined,
    login: () =>null,
    logout: () =>null,
})

export default AuthContext
