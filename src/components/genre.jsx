import React from 'react';


const Genre = ({ genres, selectedGenger, handleGenreClick }) => {

    if (genres.length === 0 || !selectedGenger) return null;
    return (



        <div className="container">
            <ul className="list-group">
                {
                    genres.map((genre, index) => <li
                        key={genre._id}
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleGenreClick(genre)}
                        className={genre._id === selectedGenger._id ? 'list-group-item active' : 'list-group-item'}>
                        {genre.name}
                    </li>)
                }
            </ul>
        </div>

    )
}
export default Genre;


