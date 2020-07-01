import React, { Component } from 'react';
import ButtonControl from './common/button';
import InputTextControl from './common/input';
import FormHelper from './common/formHelper';
import Joi from 'joi';

class RegisterForm extends Component {

    schema = {
        username: Joi.string().required().email().label("Username"),
        password: Joi.string().required().min(5).label("Password"),
        name: Joi.string().required().label("Name")
    }

    state = {
        reisterUserObj: {
            username: '',
            password: '',
            name: ''
        },
        errors: {}
    }

    onSubmit = (e) => {

        e.preventDefault();

        const errorsData = FormHelper.validateFormSchema(this.state.reisterUserObj, this.schema);
        this.setState({ errors: errorsData || {} });

        if (errorsData) return null;

        console.log('do server');


    }

    handleChange = async ({ currentTarget: input }) => {
        debugger
        const reisterUserObj = { ...this.state.reisterUserObj };
        reisterUserObj[input.name] = input.value;
        await this.setState({ reisterUserObj });

        const errorsData = FormHelper.validateFormProperty(this.state.reisterUserObj, input.name, this.schema);

        this.setState({ errors: errorsData || {} });

    }

    render() {
        debugger
        const { username, password, name } = this.state.reisterUserObj;
        const { errors } = this.state;
        return <div className="container">
            <form onSubmit={this.onSubmit}>
                <h1>Register</h1>
                <InputTextControl
                    label="Username"
                    value={username}
                    name="username"
                    error={errors.username}
                    onChange={this.handleChange} />

                <InputTextControl
                    label="Password"
                    value={password}
                    error={errors.password}
                    name="password"
                    onChange={this.handleChange} />

                <InputTextControl
                    label="Name"
                    value={name}
                    name="name"
                    error={errors.name}
                    onChange={this.handleChange} />

                <ButtonControl
                    label="Register"
                    errors={errors} />
            </form>

        </div>
    }
}

export default RegisterForm;