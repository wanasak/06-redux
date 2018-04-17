import React, { Component } from "react";
import { connect } from "react-redux";
import { moviesList, directorList } from "../actions/index";
import { bindActionCreators } from "redux";
import MoviesList from "../components/MoviesList";

class App extends Component {
    componentWillMount() {
        this.props.moviesList();
        this.props.directorList();
    }

    render() {
        return (
            <div>
                <MoviesList {...this.props} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.movies
    };
};

// const mapDispatchToProps = dispatch => {
//     return {
//         getMovies: () => {
//             dispatch(moviesList());
//         },
//         getDirectors: () => {
//             dispatch(directorList);
//         }
//     };
// };

// instead of above code, we use bindActionCreators
const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            moviesList,
            directorList
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
