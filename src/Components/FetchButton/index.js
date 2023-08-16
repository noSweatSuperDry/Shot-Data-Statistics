import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';
import { fetchShots } from '../../redux/slice/dataSlice';

class FetchData extends Component {
  render() {
   
    return (
      <div className='refresh'>
        <button className='refresh-button' onClick={this.props.fetchShots}>
          Refresh Data
        </button>
      </div>
    );
  }
}

// Mapping dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    fetchShots: () => dispatch(fetchShots())
  };
};

export default connect(null, mapDispatchToProps)(FetchData);
