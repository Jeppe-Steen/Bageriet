import { Login } from "../../Components/Login/Login";
import Style from './LoginPage.module.scss';

export function LoginPage(props) {

    return (
        <main className={Style.mainContainer}>
            <Login loginData={props.loginData} setLoginData={props.setLoginData} />
        </main>
    )
} 