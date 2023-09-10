import { ChangeEvent, useState } from "react";

const Login : React.FC = () => {

    interface IFormField {
        username : string,
        password : string
    };

    const [formData, setFormData] = useState<IFormField>({
        username : '',
        password : ''
    });

    const [isEnabled, setIsEnabled] = useState<Boolean>(true);
    const [showError, setShowError] = useState(false);

    const handleInputChange = (event : ChangeEvent<HTMLInputElement>) => {
        const { name , value } = event.target;
        setFormData({...formData, [name] : value})
    }

    return (
        <>
            <input
                placeholder="username"
                name="username"
                onChange={handleInputChange}
                value={formData.username}
            />
            <input
                type="password"
                name="password"
                placeholder="password"
                onChange={handleInputChange}
                value={formData.password}
            />
            <button
                title="submitBtn"
                disabled={!formData.username || !formData.password}
                onClick={ () => {
                    setIsEnabled(!isEnabled);
                }}
                style={{ opacity : `${isEnabled ? '1' : '0.5'}`, backgroundColor : 'darkgreen'}}
            />
            <span style={{ color : 'red', visibility : `${showError ? 'visible' : 'hidden'}` }} title="errorMessage">
                Something went wrong ! Please try again.
            </span>
        </>
    )
}

export default Login;