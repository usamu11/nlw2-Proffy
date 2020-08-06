import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/41910801?s=460&v=4" alt="Samuel Macedo" />
                <div>
                    <strong>Samuel Macedo</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de química avançada
                <br /><br />
                Apaixonado por explodir coisas em laboratório epor mudar a vida das pessoas através de experiências.
            </p>

            <footer>
                <p>
                    Preço/hora 
                    <strong>80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;





