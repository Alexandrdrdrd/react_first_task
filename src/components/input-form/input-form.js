
import './employees-add-form.css'


let onIncrease = () => {

    let formData = new FormData(document.forms.person);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/url");
    xhr.send(formData);

}

const InputForm = () =>{
    return(
        <div className="app-add-form">
            <h3>Registration</h3>
            <form name='person'>
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
                <input type="integer"
                       className="form-control new-post-label"
                       placeholder="RNTRC" />
                <input type="checkbox" required="true" placeholder="save your credentials"/>
                <button type="submit"
                        className="btn btn-outline-light"
                        onClick={onIncrease}>Save</button>
            </form>
        </div>
    )
}


export default InputForm;