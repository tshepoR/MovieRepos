import React, { Component } from 'react';
import Joi from 'joi';
import InputTextControl from './common/input';
import ButtonControl from './common/button';
import FormHelper from './common/formHelper';


class LoginForm extends Component {
    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    }

    state = {
        account: {
            username: '',
            password: ''
        },
        errors: {}
    }

    onSubmit = (e) => {
        e.preventDefault();
        const errors = FormHelper.validateFormSchema(this.state.account, this.schema);
        this.setState({ errors: errors || {} });
        if (errors) {
            return;
        }

        console.log(e);

    }


    handleInputChange = ({ target: input }) => {

        const account = { ...this.state.account };
        account[input.name] = input.value;
        this.setState({ account });
        const errors = FormHelper.validateFormProperty(account, input.name, this.schema);
        this.setState({ errors: errors || {} });
    }
    render() {
        const { username, password } = this.state.account;
        const { errors } = this.state;


        return (

            <div className="Container">
                <h1>Login Form</h1>
                <form onSubmit={this.onSubmit}>

                    <InputTextControl
                        name="username"
                        label="UserName"
                        value={username}
                        error={errors.username}
                        onChange={this.handleInputChange}

                    />

                    <InputTextControl
                        name="password"
                        label="Password"
                        value={password}
                        error={errors.password}
                        onChange={this.handleInputChange}

                    />
                    <ButtonControl label="Login" errors={errors} />
                </form>

            </div>
        )
    }
}

export default LoginForm;