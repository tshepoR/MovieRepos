import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Like from './likeComponent';
import Pagination from './pagination';
import Genre from './genre';
import { movies } from '../moviesFakeData';
import { GenreArray } from '../genreFakeData';
import _ from 'lodash'
import ButtonControl from "./common/button";
import InputTextControl from './common/input'; import Helper from "./common/helper";
;

class Movie extends Component {

    state = {
        movies: [],
        moviesCopy: [],
        genres: [],
        pageSize: 3,
        currentPage: 1,
        selectedGenger: {},
        movieCount: 0,
        searchString: ''

    }
    componentDidMount() {

        this.setState({
            movies: movies,
            genres: GenreArray,
            moviesCopy: movies
        });

    }
    deleteMovie(movie) {
        this.setState({ movies: this.state.movies.filter(m => m._id !== movie._id) })
    }
    onLikeToggle(movie) {

        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movie };
        movies[index].liked = !movies[index].liked;

        this.setState({ movies });
    }

    handleGenreClick = (genre) => {

        if (genre._id) {

            this.setState({
                selectedGenger: genre,
                currentPage: 1,
                searchString: '',
                movies: this.state.moviesCopy.filter(m => m.genre._id === genre._id)
            });

        } else {

            this.setState({
                selectedGenger: genre,
                currentPage: 1,
                searchString: '',
                movies: this.state.moviesCopy
            });
        }

    }
    handlePagination = (page) => {

        let filteredMovies = [];
        const { selectedGenger } = this.state;

        if (selectedGenger._id) {

            filteredMovies = this.state.moviesCopy.filter(m => m.genre._id === selectedGenger._id);
        } else {

            filteredMovies = this.state.moviesCopy;
        }
        this.setState({ currentPage: page, movies: filteredMovies });

    }


    navigateToMovie(movie) {

        this.props.history.push(`/movies?movieId=${movie._id}`);
        console.log(movie);
    }

    addNewMoview = () => {
        this.props.history.push(`/movies/add`);
    }

    handleSearch = ({ currentTarget: input }) => {
        debugger
        if (!input.value) {

            this.setState({ movies: [], selectedGenger: {}, searchString: input.value });
        }

        if (input.value.length !== 3) {
            this.setState({ searchString: input.value, selectedGenger: {} });
            return;
        }

        const filteredMovies = this.state.moviesCopy.filter(m => m.titile.toLowerCase().includes(input.value.toLowerCase()));
        this.setState({ movies: filteredMovies, selectedGenger: {}, currentPage: 1, searchString: input.value });

    }


    render() {
        return (

            <div className="row">
                <div className="col-md-4">
                    <Genre
                        genres={this.state.genres}
                        selectedGenger={this.state.selectedGenger}
                        handleGenreClick={this.handleGenreClick} />
                </div>

                <div className="col-md-8">
                    {
                        this.renderMovies()
                    }
                </div>
            </div>

        )
    }

    renderMovies() {

        let moviesData = [];
        const { movies, currentPage, pageSize, searchString } = this.state;

        if (movies.length === 0) {
            return <span>There are no movies in the database</span>
        }

        if (!searchString) {
            moviesData = Helper.paginate(movies, currentPage, pageSize);
        } else {
            moviesData = movies;
        }


        return (

            <React.Fragment>

                <ButtonControl
                    label="New Movie"
                    handleClick={this.addNewMoview} /> <br />
                <span >{`Now showing ${movies.length} in the database`}</span>
                <br />
                <InputTextControl
                    value={searchString}
                    onChange={this.handleSearch}
                />

                <table className="table" style={{ marginTop: 10 }}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            moviesData.map(movie => (
                                <tr key={movie._id}>

                                    <td>
                                        <Link to={`/movies/add?movieId=${movie._id}`}> {movie.titile}</Link>

                                    </td>
                                    <td>
                                        {movie.genre.name}
                                    </td>
                                    <td>
                                        {movie.numInStock}
                                    </td>
                                    <td>
                                        {movie.dailyRentalRate}
                                    </td>
                                    <td>
                                        <Like
                                            liked={movie.liked}
                                            onLikeToggle={() => this.onLikeToggle(movie)} />
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => this.deleteMovie(movie)}
                                            className="btn btn-danger">Delete</button>
                                    </td>

                                </tr>))
                        }
                    </tbody>
                </table>
                {!searchString &&
                    <Pagination
                        numPages={movies.length}
                        pageSize={this.state.pageSize}
                        currentPage={this.state.currentPage}
                        handlePagination={this.handlePagination} />
                }


            </React.Fragment>

        )

    }


}
export default Movie;