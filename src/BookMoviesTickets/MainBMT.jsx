import React, { Component } from 'react'
import './assets/css/movies.css';
import FormInputMovies from './FormInputMovies';
import ListSeatMovies from './ListSeatMovies';
import ReceiptMovies from './ReceiptMovies';
import { connect } from 'react-redux';
import { confirmReceipt } from '../Store/Actions/MoviesAction';
class MainBMT extends Component {
    render() {
        return (
            <div className="page-movies">
                <h3 className="title-movies">MOVIE SEAT SELECTION</h3>
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6 main-movies">
                        <h4 className="message-movies">Fill The Required Details Below And Select Your Seats</h4>
                        <div className="form-movies">
                            <FormInputMovies />
                        </div>
                        <ListSeatMovies />
                        <div className="sreen-movies">
                            <h4>SCREEN THIS WAY</h4>
                        </div>
                        <div className="comfirm-movies">
                            <button onClick={() => this.props.handleConfirmReceipt()}>Confirm Selection</button>
                        </div>
                        <ReceiptMovies />
                        <div className="col-3"></div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleConfirmReceipt: () => {
            dispatch(confirmReceipt());
        }
    }
}

export default connect(null, mapDispatchToProps)(MainBMT);