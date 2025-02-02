import React from 'react';
import {NavLink, navLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">

                    <img src="./media/deveno.png" alt="Logo"/>

                </div>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact="true" to="/" activeClassName="navActive">
                            <i className="fas fa-home"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>

                    {/* <li>
                        <NavLink exact="true" to="/savoirFaire" activeClassName="navActive">
                            <i className="fas fa-mountain"></i>
                            <span>Savoir-faire</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact="true" to="/savoirFaireEK" activeClassName="navActive">
                            <i className="fas fa-mountain"></i>
                            <span>Savoir-faire Elodie KSIAZEK</span>
                        </NavLink>
                    </li> */}

                    <li>
                        <NavLink exact="true" to="/competences" activeClassName="navActive">
                            <i className="fas fa-mountain"></i>
                            <span>CV Rarib</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact="true" to="/competencesEK" activeClassName="navActive">
                            <i className="fas fa-mountain"></i>
                            <span>CV Elodie</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact="true" to="/portfolio" activeClassName="navActive">
                            <i className="fas fa-images"></i>
                            <span>Portfolio Rarib</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact="true" to="/portfolioEK" activeClassName="navActive">
                            <i className="fas fa-images"></i>
                            <span>Portfolio Elodie</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact="true" to="/contact" activeClassName="navActive">
                            <i className="fas fa-address-book"></i>
                            <span>Contact Rarib</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact="true" to="/contactEK" activeClassName="navActive">
                            <i className="fas fa-address-book"></i>
                            <span>Contact Elodie</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/rarib-laamimat/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/MattCornicDev" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/MattCornic" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    </li>
                    <li>
                        <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-codepen"></i></a>
                    </li>
                </ul>
            </div> */}

        </div>
    );
};

export default Navigation;
