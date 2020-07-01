import React, { Component } from 'react';
import queryString from 'query-string';

class MovieDetail extends Component {

    render() {
        debugger
        const { movieId: id } = queryString.parse(this.props.location.search);
        return (

            <div>
                <span>{`Movie form ${id}`}</span>
                <br />
                <button type="button" className="btn btn-primary">Save</button>
                {/* <button type="button" className="btn btn-primary">Primary</button> */}
            </div>
        )
    }
}

export default MovieDetail;