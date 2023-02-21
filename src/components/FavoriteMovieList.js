import React from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

const FavoriteMovieList = ({ favorites, displayFavorites }) => {
    return (
        <div className="col-xs savedContainer">
            <h5>Favorite Movies</h5>
            {displayFavorites &&
                favorites.map((movie) => {
                    return (
                        <div key={movie.id}>
                            <Link
                                className="btn btn-light savedButton"
                                to={`/movies/${movie.id}`}>
                                {movie.title}
                                <span>
                                    <span className="material-icons">remove_circle</span>
                                </span>
                            </Link>
                        </div>
                    );
                })}
        </div>
    );
};

const mapStateToProps = ({ favorites }) => {
    return {
        favorites: favorites.favorites,
        displayFavorites: favorites.displayFavorites,
    };
};

export default connect(mapStateToProps, {})(FavoriteMovieList);
