import '../CSS/Header.css'


const opcoesHeader = ['notas','matriculas','cadastrados']

function Header (){
    return(
        <div className='Header'>
            <header>
                <h1><strong className='nextStrong'>Next</strong>Code</h1>
                <p className='pdoHeader'>level up your skills</p>
            </header>
            <nav>
                <ul>
                    {opcoesHeader.map((texto) => (
                        <li className='opcoes'><a>{texto}</a></li>
                    ))}
                </ul>
            </nav>
            <div className='opcaoLogin'>
                <button className='opcaoAcessarBtn'>ACESSAR</button>
                <button className='opcaologinBtn'>LOGIN</button>

            </div>
        </div>
    )
}

export default Header