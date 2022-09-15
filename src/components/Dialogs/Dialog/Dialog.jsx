import {Link} from "react-router-dom";
import s from "../Dialogs.module.css";
import React from "react";



const DialogItem =(props)=>{
    const path = "/dialog/" + props.id;
    return(
        <div >
            <Link className={s.dialog} to={path}> {props.name}</Link>

        </div>


    )
}

export default DialogItem;