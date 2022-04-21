import { Logo } from '../logo/Logo';
import { SocialLogin } from '../../components/social-login/SocialLogin';
import { Footer } from '../footer/Footer'
import './styles.css';

export const Header = ()=>{
    return (
        <header>
            <Logo />
            <SocialLogin />
            <p>or</p>
            <Footer />
        </header>
    );
}