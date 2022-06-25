import React from 'react';
import style from './modalWindow.module.css'


type modalWindowPropsType = {
    modalActive: boolean
    modalActiveHandler: (flag: boolean)=> void
    children: React.ReactNode
}

export const ModalWindow = (props: modalWindowPropsType) => {
    return (
        <div className={props.modalActive ? style.modal + ' ' + style.active : style.modal } onClick={()=> props.modalActiveHandler(false)}>
            <div className={props.modalActive ? style.modal__content + ' ' + style.active : style.modal__content} onClick={e => e.stopPropagation()}>
                {props.children}
            </div>

        </div>
    );
};

