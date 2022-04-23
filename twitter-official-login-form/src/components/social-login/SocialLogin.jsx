import { Link } from '../link/Link'
import './styles.css';

const social = [
    {class:"fab fa-apple",link:"#",name:"Sign in with Apple"},
    {class:"fab fa-windows",link:"#",name:"Sign in with Microsoft"}
];
export const SocialLogin = ()=>{
    return (
        <div className="input-form">
            <Link links={social}/>
            </div>
    );
}