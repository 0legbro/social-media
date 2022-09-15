import React from 'react';
import {Link} from "react-router-dom";
import s from './Dialogs.module.css';
import Messages from "./messages/Messages";


const Dialogs = (props) => {
return(
    <div className={s.Dialogs}>
        <div className={s.dialogsContent}>
            <div ><Link className={s.dialog} to="/dialog/1"> Sasha</Link></div>
            <div ><Link className={s.dialog} to="/dialog/2"> Oleh</Link></div>
            <div ><Link className={s.dialog} to="/dialog/3"> Yuriy</Link></div>
            <div ><Link className={s.dialog} to="/dialog/4"> Alina</Link></div>
            <div ><Link className={s.dialog} to="/dialog/5"> Dasha</Link></div>
        </div>
            <Messages/>
    </div>
)


}

export default Dialogs;