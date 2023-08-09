import React, { Component } from 'react';
import { connect } from 'react-redux';
import  {fetchApiData}  from '../api/data/api';

class Data extends Component {
  componentDidMount() {
    this.props.fetchApiData();
  }

  render() {
    const { data, loading, error } = this.props.apiData;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    if (!data) {
      return null;
    }

    return (
      <div>
        <h1>DATA</h1>
        {/* Display your data here */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  apiData: state.apiData,
});

const mapDispatchToProps = {
  fetchApiData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Data);