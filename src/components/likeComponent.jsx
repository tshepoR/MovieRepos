import React from 'react';

const Like = ({ liked: isLiked, onLikeToggle }) => {

    let classes = "fa ";
    if (isLiked) {
        classes += ' ' + 'fa-heart';
    } else {
        classes += ' ' + 'fa-heart-o';
    }
    return (

        <div>
            {
                <i style={{ cursor: 'Pointer' }}
                    className={classes}
                    onClick={onLikeToggle}
                    aria-hidden="true"></i>
            }

        </div>
    )
}
export default Like;