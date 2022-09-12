import './footer.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import myLogo from '../../static/zapta-ink.svg'
import willSlap from '../../static/willSlap.svg'

const Footer = () => {

    return(
        <div id='footer'>
           
            <div className="contact_us">
                <ul>
                    
                    <li> <span className="list-su-heading"> Zappta Offices:</span> </li>
                        <ul>
                            <li>Sunday-Thursday 08:00-18:00</li>
                            <li>Friday 08:00-12:00</li>
                        </ul>
                    <li><span className="list-su-heading">Email:</span> <a href="http://" target="_blank"> Zappta@gmail.com</a></li>
                    <li> The Snail 3, Garden-Heights</li>
                    <li><span className="list-su-heading">Phone:</span>  03-9876543</li>
                    
                </ul>
                <br />
                <p>All rights reserved to Atar Paz and Raymond Agarunov &copy;</p>
             </div>

             <div className="logo-footer">
                 <img id='rock-smith' src={willSlap} alt="willSlap"/>
            </div>
          {/*   <div className="logo-footer">
                 <img id='myLogoFooter' src={myLogo} alt="myLogo"/>
            </div> */}


             <div className="social_media">
                <ul>
                    <li>
                        <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <TwitterIcon fontSize="large"  sx={{color: 'white'}} />
                        </a>
                    </li>
                    <li>
                        <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FacebookIcon fontSize="large"  sx={{color: 'white'}} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/?hl=en" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon fontSize="large" sx={{color: 'white'}} />
                        </a>
                    </li>
                    
                </ul>
            
                 
                 
                 
             </div>
     </div>
    )
}


export default Footer 