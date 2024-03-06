
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const Navigation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [permittedAge, setPermittedAge] = useState(false);

    const activeStyle = {
        fontWeight: 'bold',
        color: 'red'
    };

    const GoPrivate = async () => {
        const age = parseInt(window.prompt('Введіть свій вік:'));


        if (isNaN(age) || age < 18) {
            setPermittedAge(true);
        } else {
            setPermittedAge(false);
            navigate('/privat');
        }
    };

    useEffect(() => {
        const handleNavigation = () => {
            if (permittedAge) {
                navigate('/');
            }
        };

        handleNavigation();  

        return () => {
            handleNavigation();  
        };
    }, [permittedAge, navigate]);

    return (
        <nav>
            <ul>
                <li><NavLink to="/" style={location.pathname === '/' ? activeStyle : null}>Главная</NavLink></li>
                <li><NavLink to="/about" style={location.pathname === '/about' ? activeStyle : null}>О нас</NavLink></li>
                <li><NavLink to="/contacts" style={location.pathname === '/contacts' ? activeStyle : null}>Контакты</NavLink></li>
                <li onClick={GoPrivate} style={location.pathname === '/privat' ? activeStyle : null}> Privat</li>
            </ul>
            {permittedAge && <p>Маленький ще!!!! Подрасти спочатку!!!!</p>}
        </nav>
    );
};

export default Navigation;




















