
import './employees-add-form.css'

const InputForm = () =>{
    return(
        <div className="app-add-form">
            <h3>Registration</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                       className="form-control new-post-label"
                       placeholder="Enter your name" />
                <input type="text"
                       className="form-control new-post-label"
                       placeholder="Enter your surname" />
                <input type="text"
                       className="form-control new-post-label"
                       placeholder="Enter your patronymic" />
                <input type="number"
                       className="form-control new-post-label"
                       placeholder="RNTRC" />
                <h2>JJJJ</h2>
                <input type="checkbox" required="true" placeholder="save your credentials"/>


                <button type="submit"
                        className="btn btn-outline-light">Save</button>
            </form>
        </div>
    )
}


export default InputForm;