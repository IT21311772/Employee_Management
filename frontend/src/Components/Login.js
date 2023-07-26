import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom"; 

function Login() {

    const navigate = useNavigate();

    return(
        <div>
            <h1>Login Page</h1>
            <Button onClick={() => navigate("addEmp")}>Login</Button>
        </div>
    );
}

export default Login;