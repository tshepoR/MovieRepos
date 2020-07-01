import React, { Component } from 'react';
import { movies } from '../moviesFakeData';
import {
    InputTextControl,
    InputNumberControl,
    InputSelectControl,
    ButtonControl
} from './common';
import { GenreArray } from '../genreFakeData';
import FormHelper from './common/formHelper';
import Helper from './common/helper';
import queryString from 'query-string';
import Joi from 'joi';
import AlertMessage from './common/alertMessage';


class MovieForm extends Component {

    schema = {
        title: Joi.string().required().min(3),
        rate: Joi.number().required().min(1).max(11),
        numberInStock: Joi.number().required().min(0),
        selectedGenre: Joi.number().required(),
    }
    state = {
        genre: [],
        movie: {
            selectedGenre: '',
            title: '',
            rate: '',
            numberInStock: '',

        },
        errors: {}

    }
    componentDidMount() {
        let movie = {};
        const params = queryString.parse(this.props.location.search);

        const movieData = movies.find(m => m._id === +params.movieId);
        this.setState({ genre: GenreArray.filter(g => !g.name.includes('All genres')) });

        if (movieData) {
            movie = {
                title: movieData.titile,
                numberInStock: movieData.numInStock,
                rate: movieData.dailyRentalRate,
                selectedGenre: movieData.genre._id
            }
            this.setState({ movie });
        }


    }
    handleInputChange = ({ currentTarget: input }) => {
        const movie = { ...this.state.movie };
        movie[input.name] = input.value;

        const errorsData = FormHelper.validateFormProperty(movie, input.name, this.schema);

        this.setState({ movie, errors: errorsData || {} });

    }
    onSubmit = (e) => {
        e.preventDefault();

        const errorsObj = FormHelper.validateFormSchema(this.state.movie, this.schema);
        this.setState({ errors: errorsObj || {} });
        if (errorsObj) {
            return null;

        } else {
            const { title, numberInStock, rate, selectedGenre } = this.state.movie;
            const { genre } = this.state;
            const { history } = this.props;
            let id = 909090;
            const movie = {
                _id: Math.floor(Math.random() * 10) + 2000,
                titile: title,
                numInStock: numberInStock,
                dailyRentalRate: rate,
                publishDate: new Date(),
                liked: false,
                genre: genre.find(gen => gen._id === +selectedGenre)
            }
            if (movies.find(m => m._id === movie._id)) {
                this.setState({ errors: { error: "Movie already exists." } })
            } else {
                this.setState({ errors: {} })
            }

            movies.push(movie);
            history.push("/");

        }

    }

    render() {
        const { title, rate, numberInStock, selectedGenre } = this.state.movie;
        const { genre: options, errors } = this.state;

        return (

            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <h1>Movie Form</h1>
                    <InputTextControl
                        label="Title"
                        value={title}
                        name="title"
                        error={errors.title}
                        onChange={this.handleInputChange}
                    />
                    <InputSelectControl
                        label="Genre"
                        name="selectedGenre"
                        value={selectedGenre}
                        options={options}
                        error={errors.selectedGenre}
                        onChange={this.handleInputChange}
                    />
                    <InputNumberControl
                        label="Number in Stock"
                        value={numberInStock}
                        name="numberInStock"
                        error={errors.numberInStock}
                        onChange={this.handleInputChange}

                    />
                    <InputTextControl
                        label="Rate"
                        value={rate}
                        name="rate"
                        error={errors.rate}
                        onChange={this.handleInputChange}

                    />
                    <ButtonControl
                        label="Save"
                        errors={errors} />

                </form>
                <AlertMessage error={errors.error} />
            </div>
        )

    }
}

export default MovieForm;