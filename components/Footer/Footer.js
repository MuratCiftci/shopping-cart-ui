import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import RoomIcon from '@mui/icons-material/Room';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlineIcon from '@mui/icons-material/MailOutlined';
import styles from './Footer.module.css'  

  
 
  const Footer = () => {
    return (
      <div className={styles.container}>
        <div className={styles.left}>
          <h1>Shoppy</h1>
          <p className={styles.desc}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly believable.
          </p>
          <div className={styles.socialContainer}>
            <div className={styles.socialIcon} style={{ backgroundColor: "3B5999"}}>
              <FacebookIcon />
            </div>
            <div className={styles.socialIcon} style={{ backgroundColor: "E4405F"}}>
              <InstagramIcon />
            </div>
            <div className={styles.socialIcon} style={{ backgroundColor: "55ACEE"}}>
              <TwitterIcon />
            </div>
            <div className={styles.socialIcon} style={{ backgroundColor: "E60023"}}>
              <PinterestIcon />
            </div>
          </div>
        </div>
        <div className={styles.center}>
          <h3 className={styles.title}>Useful Links</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>Home</li>
            <li className={styles.listItem}>Cart</li>
            <li className={styles.listItem}>Man Fashion</li>
            <li className={styles.listItem}>Woman Fashion</li>
            <li className={styles.listItem}>Accessories</li>
            <li className={styles.listItem}>My Account</li>
            <li className={styles.listItem}>Order Tracking</li>
            <li className={styles.listItem}>Wishlist</li>
            <li className={styles.listItem}>Wishlist</li>
            <li className={styles.listItem}>Terms</li>
          </ul>
        </div>
        <div className={styles.right}>
          <h3 className={styles.title}>Contact</h3>
          <div className={styles.contactItem}>
            <RoomIcon style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
          </div>
          <div  className={styles.contactItem}>
            <PhoneIcon style={{marginRight:"10px"}}/> +1 234 56 78
          </div>
          <div  className={styles.contactItem}>
            <MailOutlineIcon style={{marginRight:"10px"}} /> contact@lama.dev
          </div>
          <img className={styles.payment} src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </div>
      </div>
    );
  };
  
  export default Footer;