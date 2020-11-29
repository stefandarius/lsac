import React, {useState} from 'react';

const AppContext = React.createContext();

export const LSACProvider = ({children}) => {
    const [show, setShow] = useState(false);
    const [plangeri, setPlangeri] = useState([{materie: 'USO', proiect: 'Tema 2'}]);

    return(
        <AppContext.Provider value={{show, setShow, plangeri, setPlangeri}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;