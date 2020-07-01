import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../Redux/users/actionCreators';


class User extends Component {

    componentDidMount() {
        console.log(this.props.users);
    }


    render() {
        console.log(this.props);

        return (

            <div>
                <span>Hello{this.props.users[0].name}</span>
                <ul>
                    {
                        this.props.users.map((user) => <li key={user.id}>{user.name}</li>)
                    }
                </ul>

                <button onClick={() => this.props.addUserFunc({ id: 1, name: 'newUserAdded' })}>click</button>
            </div>
        )
    }

}

const mapStateToPros = (state) => {
    debugger
    return {
        users: state.users
    }
}
const mapDispatchToPros = (dispatch) => {
    return {
        addUserFunc: (user) => dispatch(addUser(user))

    }
}

export default connect(mapStateToPros, mapDispatchToPros)(User);





