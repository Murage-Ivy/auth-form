import { useNavigate } from "react-router-dom"


function PokemonHeader() {
    const navigate = useNavigate();
    return (
        <div className="pokemon-header">
            <div className="header-section">
                <h1 id="logo">Poke<span>mon.</span></h1>
                <button id="logout" onClick={() => {
                    sessionStorage.removeItem('user')
                    navigate('/')
                }}>Log Out</button>
            </div>

            <div className="top-section">
                <div className="left-side">
                    <h2>Welcome to our Pokemon website</h2>
                    <p>Whether you're a long-time fan or a newcomer to the world of Pokemon,

                        our website has everything you need to know about the creatures
                        that have captured the hearts and imaginations of people all over the world.</p>
                    <button id="get-started">
                        <a href="#pokemon-container">Get Started</a>
                    </button>
                </div>
                <div className="right-side">
                    <img src="../images/saru.png" alt="saru" />
                </div>


            </div>

        </div>
    )
}

export default PokemonHeader