import './employees-add-form.css'
import {Component} from "react";

class NewInputForm extends Component{

    constructor(props) {
        super(props);
        this.state={
            name:"",
            surname:"",
            patronymic:"",
            code:0,
            agreement:false
        }
    }

    onClickForm = () =>
        this.setState(({agreement}) => ({
            agreement: !agreement
        }))


     onSubmitForm = async() =>
     {
         await fetch('http://localhost:8080/api/persons', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })}
    ;


    onValueChange = (e) =>
        this.setState({
            [e.target.name]: e.target.value
        })
    render() {
        return(
            <div className="app-add-form">
                <h3>Registration</h3>
                <form  onSubmit={this.onSubmitForm}
                    className="add-form d-flex">
                    <input type="text"
                           className="form-control new-post-label"
                           placeholder="What is your name?"
                           onChange={this.onValueChange}
                           value={this.state.name}
                           name="name"/>
                    <input type="text"
                           className="form-control new-post-label"
                           placeholder="Enter your surname"
                           onChange={this.onValueChange}
                           value={this.state.surname}
                           name="surname"/>
                    <input type="text"
                           className="form-control new-post-label"
                           placeholder="Enter your patronymic"
                           onChange={this.onValueChange}
                           value={this.state.patronymic}
                           name="patronymic"/>
                    <input type="number"
                           className="form-control new-post-label"
                           placeholder="Enter your code"
                           onChange={this.onValueChange}
                           value={this.state.code}
                           name="code"/>

                    <input type="checkbox" required={true} placeholder="agreement"
                           name="agreement" className="form-control new-post-label"
                           id="agreement"
                    onClick={this.onClickForm}/>
                    <label for="agreement">agreement for personal data processing</label>
                    <button type="submit"
                            className="btn btn-outline-light"
                           >Submit</button>
                </form>
            </div>
        )}
}
export default NewInputForm;