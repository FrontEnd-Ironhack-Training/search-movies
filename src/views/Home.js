import React, { Component } from "react";
import Title from "../components/Title";
import SearchForm from "../components/SearchForm";
import MoviesList from '../components/MoviesList';

class Home extends Component {

  state = {
    results: [],
    usedSearch: false
  };

  _handleResults = results => {
    this.setState({ results, usedSearch: true });
  };

  _renderResults = () => {
    return this.state.results.length === 0 ? (
      <p> Sorry! 😞 Results not found!</p>
    ) : (
      <MoviesList movies={this.state.results} />
    );
  };

  render() {
    return (
      <div>
        <Title>Search Movies</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this._handleResults} />
        </div>
        {this.state.usedSearch ? (
          this._renderResults()
        ) : (
          <small>Use the form to search movie</small>
        )}
      </div>
    );
  }
}

export default Home;
