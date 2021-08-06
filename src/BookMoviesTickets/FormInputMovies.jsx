import React, { Component } from 'react'
import { connect } from 'react-redux';
import { confirmForm } from '../Store/Actions/MoviesAction';
class FormInputMovies extends Component {
    render() {
        const { handleConfirmForm } = this.props;
        return (
            <div className="info-movies row">
                <div className="form-group col-8">
                    <label htmlFor="">Name &nbsp;<span>*</span></label>
                    <input type="email" className="form-control" id="name" placeholder="" />
                </div>
                <div className="form-group col-4">
                    <label htmlFor="">Number of Seat &nbsp;<span>*</span></label>
                    <input type="number" className="form-control" id="number" min={1} step={1} />
                </div>
                <div className="movies-btn col-12 mt-4">
                    <button onClick={() => handleConfirmForm()}>Start Selecting</button>
                </div>
                <div className="seat-select col-12 mt-4">
                    <div className="seat"><span className="seat-green"></span>&nbsp;&nbsp; Selected Seat</div>
                    <div className="seat"><span className="seat-red"></span>&nbsp;&nbsp; Reserved Seat</div>
                    <div className="seat"><span className="seat-white"></span>&nbsp;&nbsp; Empty Seat</div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleConfirmForm: () => {
            let form = new FormData();
            form.append('name', document.getElementById('name').value);
            form.append('number', document.getElementById('number').value);
            dispatch(confirmForm(form));
        }
    }
}

export default connect(null, mapDispatchToProps)(FormInputMovies);