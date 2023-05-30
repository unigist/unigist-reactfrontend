import './Auth.css';
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [authenticate, setAuthenticate] = useState(false);


    const handleLogin = (e) => {
        setLoading(true)

        const user = {
            username,
            password
        }
        console.log(user);

        fetch('ttp://127.0.0.1:8000/auth/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        }).then((res) => {
            console.log(res);
            if (res.status === 200) {
                if (res.token) {
                    let dateTodayString = new Date().toDateString();
                    localStorage.setItem('token-'+dateTodayString, res.token);
                    setAuthenticate(true);
                }
            }
        })
    }


    return (
        <section className="row h-100 rounded h-100" id="login-page">
                <h1 className="text-center position-relative display-5 py-4">
                    Login
                    <Link to='/auth/register' className='me-3 btn text-white position-absolute end-0'>
                        <i className="bi bi-chevron-double-right display-6"></i>
                    </Link>
                </h1>
                <form className='mt-3'>
                    <div className="mb-3">
                        <input type="text" placeholder='Enter your username'  value={username} onChange={e => setUsername(e.target.value)} className="form-control  form-control-lg" id="exampleInputEmail1" aria-describedby="usernameHelp" />
                    </div>
                    <div className="mb-3">
                        <input type="password" placeholder='Enter your password' value={password} onChange={e => setPassword(e.target.value)} className="form-control  form-control-lg" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-5 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <div className="d-grid">
                        <input type="submit" className={`btn btn-primary btn-lg`} disabled={loading} onClick={handleLogin} value={!loading ? 'Log in' : 'Logging in'}/>
                    </div>
                </form>
                {authenticate && <Navigate to="/profile" replace={true} />}
        </section>
    )
}

export default Login;
