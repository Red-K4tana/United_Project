import React from 'react';
import style from './modalWindow.module.css'


type modalWindowPropsType = {
    modalActive: boolean
    modalActiveHandler: (flag: boolean)=> void
}

export const ModalWindow = (props: modalWindowPropsType) => {
    return (
        <div className={style.active ? style.modal + ' ' + style.active : style.modal } onClick={()=> props.modalActiveHandler(false)}>
            <div className={style.active ? style.modal__content + ' ' + style.active : style.modal__content}>

            </div>

        </div>
    );
};

