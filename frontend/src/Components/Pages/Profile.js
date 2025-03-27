import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();

    const handLogout = () =>{
        navigate("/Login")
    }
    return(
        <>
        <div>
            <h3>Profile</h3>
            <button onClick={handLogout}> Log out </button>
        </div>
        </>
    );
}
export default Profile