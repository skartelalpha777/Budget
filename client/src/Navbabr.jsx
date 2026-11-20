export default function Navbar() {


    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
                <div className="container-fluid">
                    <a className="navbar-brand d-flex align-items-center" href="#">
                        <i className="fas fa-pizza-slice fa-lg mx-2"></i>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="">Accueil</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Administration</a>
                            </li>
                        </ul>
                        <ul
                            className="navbar-nav ms-auto align-items-center">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle d-flex align-items-center" href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="https://static.vecteezy.com/ti/vecteur-libre/p1/26530349-anonyme-la-personne-silhouette-icone-vecteur-vectoriel.jpg" className="rounded-circle" height="32" width="32" alt="Avatar" />
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown1">
                                    <li>
                                        <a className="dropdown-item" href="">Mon Profil</a>
                                    </li>

                                    <li>
                                        <a className="dropdown-item text-danger" href="">Déconnexion</a>
                                    </li>

                                    <li>
                                        <a className="dropdown-item text-danger" href="">Se connecter</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item text-danger" href="">S'inscrire</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    )

}