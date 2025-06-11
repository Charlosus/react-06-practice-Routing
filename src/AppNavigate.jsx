// Router not only allow to navigate after clicking link but also after 
// specific action of user after event or after effect.
// For example after user have loged in we can redirect page to user profile 
// but only after request is susccesfull 

// THIS IS DECLARATIVE
// import { useNavigate } from "react-router-dom";

// export const Login = () => {
//     const navigate = useNavigate();

//     const handleSubmit = async values => {
//         const response = await FakeAPI.login(values);
//         if (response.success) {
//             navigate('/profile', {replace: true});
//         }
//     };

//     return (
//         <div>
//             <h1>Login page</h1>
//             <LoginForm onSubmit={handleSubmit} />
//         </div>
//     )
// }

// replace is very usefull propety it render profile on top of component 
// because user after loging to site dont have any thing to do on loging page 
// and so user could not return to login page with back key 

// replace is easy to use and short in code 
// to do the same we would have to useState but it is much longer then just replace 


// THIS IS IMPERATIVE
import { Navigate, useState } from 'react-router-dom';

export const Login = () => {
    const [isLoginSuccess, setIsLoginSuccess] = useState(false);

    const handleSubmit = async values => {
        const response = await FakeAPI.login(values);
        setIsLoginSuccess(response.success);
    };

    if (isLoginSuccess) {
        return <Navigate to='/profile' replace />;
    }

    return (
        <div>
            <h1>Login page</h1>
            <LoginForm onSubmit={handleSubmit}/>
        </div>
    );
};