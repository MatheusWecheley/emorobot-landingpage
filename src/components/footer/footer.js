import {RiFacebookLine} from 'react-icons/ri'
import {FiInstagram, FiTwitter, FiLinkedin} from 'react-icons/fi'
import './footer.css'


const Footer = () => {
    return(
        <div className="footer-container">
            <div className="footer-content">
                <nav>
                    <ul>
                        <li><a href="https://facebok.com/matheus.leal07/"><RiFacebookLine/></a></li>
                        <li><a href="https://www.instagram.com/maath_leal/"><FiInstagram/></a></li>
                        <li><a href="https://linkedin.com/in/matheus-wecheley-745237214/"><FiLinkedin/></a></li>
                    </ul>
                </nav>
                <h3>Entre em contato comigo!</h3>
                <h3>Desenvolvidor por Matheus Wecheley</h3>
            </div>
        </div>
    )
}

export default Footer;