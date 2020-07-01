import React, { Component } from 'react';
import { getAllPosts } from '../services/postsServices';


class Post extends Component {

    state = {
        todos: [],
        posts: []
    }


    getPosts = async () => {

        const data = await getAllPosts();
        debugger

        
    }
    post =(0)


    async componentDidMount() {

        debugger

        try {

            await this.getPosts();
            debugger

        }
        catch (ex) {
            debugger
        }


        // debugger
        // const t = httpClient('https://jsonplaceholder.typicode.com').get('/posts', {
        //     headers: {

        //     }
        // });
        // const { data: todos } = await t;

        // this.setState({ todos });

    }
    onDelete = (todo) => {
        console.log(todo);
    }
    postData = async () => {

        try {
            const todo = {
                title: "mac",
            }
            //const data = await httpClient.delete();
            //const todos = [newTodo, ...this.state.todos];
            //this.setState({ todos });
            var f = "";


        } catch (ex) {

            console.error(ex);

            debugger

        }



    }

    render() {
        const { todos } = this.state;

        return (
            <div>
                <h1>Todos</h1>
                <button onClick={this.postData} className="btn btn-primary">add</button>
                <ul>
                    {
                        todos.map((todo) => <li key={todo.id}>{todo.title}<button onClick={() => this.onDelete(todo)} className="btn btn-primary">Delete</button></li>)
                    }
                </ul>
            </div>
        )
    }
}

export default Post;