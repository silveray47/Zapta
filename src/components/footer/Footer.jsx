import './footer.css';
import temp_logo from '../../static/temp_logo.png'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {

    return(
        <div id='footer'>
            <div className="logo">
                 <img src={temp_logo} alt="logo" id="logo"/>
            </div>
            <div className="contact_us">
                <ul>
                    
                    <li> Zappta Offices: </li>
                        <ul>
                            <li>Sunday-Thursday 08:00-18:00</li>
                            <li>Friday 08:00-12:00</li>
                        </ul>
                    <li>Email:  Zappta@gmail.com</li>
                    <li> The Snail 3, Garden-Heights</li>
                    <li>Phone:  03-9876543</li>
                    
                </ul>
             </div>
             <div className="social_media">
                <ul>
                    <li>
                        <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <TwitterIcon fontSize="large" />
                        </a>
                    </li>
                    <li>
                        <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FacebookIcon fontSize="large" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/?hl=en" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon fontSize="large" />
                        </a>
                    </li>
                    
                </ul>
                 
                 
                 
             </div>
     </div>
    )
}


export default Footer 