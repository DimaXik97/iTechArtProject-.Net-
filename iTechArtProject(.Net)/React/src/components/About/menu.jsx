import React from 'react';
import {Link} from 'react-router-dom'

const Menu = ()=> {
    return (<ul className="menu container">
            <li className="element-menu">
                <Link to="/about/news">Новости</Link>
            </li>
            <li className="element-menu">
                <Link to="/about/vacancies">Вакансии</Link>
            </li>
            <li className="element-menu">
                <Link to="/about/contacts">Контакты</Link>
            </li>
        </ul>);
};
export default Menu;