import React, {useContext, useState} from 'react';
import classes from './Modal.module.css';
import AppContext from "../../../context/AppContext";

const Modal = () => {

    const {setShow, plangeri, setPlangeri} = useContext(AppContext);

    const materii = ["USO", "PC", "PL", "Analiza"];

    const [materie, setMaterie] = useState(materii[0]);
    const [proiect, setProiect] = useState('');


    const clicked = e => {
        e.preventDefault();
        setPlangeri([...plangeri, {materie, proiect}]);
        setProiect('');
    }

    return(
        <div className={classes.content}>
            <div className={classes.topBar}>
                <p className={classes.text}>Exprima-ti frustrarile!</p>
                <svg onClick={() => setShow(false)} className={classes.svg} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 2.5C8.1075 2.5 2.5 8.1075 2.5 15C2.5 21.8925 8.1075 27.5 15 27.5C21.8925 27.5 27.5 21.8925 27.5 15C27.5 8.1075 21.8925 2.5 15 2.5ZM20.2588 18.4913L18.4913 20.2588L15 16.7675L11.5087 20.2588L9.74125 18.4913L13.2325 15L9.74125 11.5087L11.5087 9.74125L15 13.2325L18.4913 9.74125L20.2588 11.5087L16.7675 15L20.2588 18.4913Z" fill="#263238"/>
                </svg>
            </div>
            <div style={{padding: 30}}>
                <select className={classes.input} onChange={e => setMaterie(e.target.value)}>
                    {materii.map(materie => <option value={materie}>{materie}</option>)}
                </select>
                <input type="text" className={classes.input} value={proiect} placeholder="Proiectul" onChange={e => setProiect(e.target.value)}/>
                <button className={classes.blackButton} onClick={clicked}>Incarca</button>
            </div>
            <div className={classes.topBar}>
                <p className={classes.text}>Plangeri introduse pana acum</p>
            </div>
            <div className={classes.scrollDiv}>
                {plangeri.map(plangere => (
                    <div>
                        <p className={classes.text}>{plangere.proiect}</p>
                        <p style={{color: '#92E3A9', marginTop: 0}}>({plangere.materie})</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Modal;