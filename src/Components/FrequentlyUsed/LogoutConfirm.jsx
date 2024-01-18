import { useNavigate } from 'react-router-dom';

function Logout({ closeLogoutModal }) {
    const navigate = useNavigate();

    const Logout = () => {
        localStorage.clear();
        closeLogoutModal();
        navigate('/SignIn');
    };

    return (

        <div className="flex items-center justify-center font-lateef">
        <div className="text-center">
            <p className="text-3xl m-12 mx-auto px-12">
            Are you sure you want to log out?
            </p>
            <div className="flex justify-center p-6 items-center">
                <button className="bg-book text-white  py-1 px-8  text-3xl inline-block mt-5 "
                    onClick={Logout}>
                   Confirm
                </button>
            </div>
        </div>
    </div>
    );
}

export default Logout;