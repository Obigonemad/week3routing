import { Outlet, useNavigate } from "react-router-dom";

const FindBook = ({setId}) => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const id = document.getElementById("id").value;
        navigate(`/findbook/${id}`); 
        
    };

    return (
        <>
            <form onSubmit={handleSubmit}>


    
            <p>Enter book id:</p>
            <input type="text" id="id" />
            <button onClick={setId}>Find Book</button>
            <div id="book"></div>
            </form>
            <Outlet />
        </>
    )
}

export default FindBook;