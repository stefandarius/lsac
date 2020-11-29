import React, {useContext} from 'react';
import classes from './Backdrop.module.css';
import AppContext from '../../../context/AppContext';
import Modal from '../Modal/Modal'

const Backdrop = () => {

    const {show, setShow} = useContext(AppContext);

    const close = () => {
        console.log(show);
        setShow(false);
    }

    return show ? (
        <div>
            <div onClick={close} className={classes.backdrop}>

            </div>
            <div>
                <Modal />
            </div>
        </div>
    ) : null;

}

export default Backdrop;