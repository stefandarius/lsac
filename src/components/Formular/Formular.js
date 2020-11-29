import React, {useState} from 'react';
import classes from './Formular.module.css';

const Formular = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [injuratura, setInjuratura] = useState('');

    return(
        <div className={classes.content}>
            <div className={classes.description}>
                <h2 className={classes.title}>Ai tupeu și crezi că poți să aduci îmbunătățiri la platformă?</h2>
                <p className={classes.subtitle}>Trimite-ne un mail și roagă-te să nu ne apuce râsul când vedem ce îți trece prin cap.</p>
            </div>
            <div className={classes.form}>
                <span className={classes.label}>Nume</span>
                <input className={classes.input} type="text" value={name} onChange={e => setName(e.target.value)} />
                <span className={classes.label}>Email</span>
                <input className={classes.input} type="text" value={name} onChange={e => setEmail(e.target.value)} />
                <span className={classes.label}>Injuratura</span>
                <textarea className={classes.textarea} type="text" value={name} onChange={e => setInjuratura(e.target.value)} />
                <button className={classes.button}>Trimite</button>
            </div>
        </div>
    );
}

export default Formular;