import React from 'react';
import swal from 'sweetalert2';
import { connect } from 'react-redux';
import HouseForm from './HouseForm';
import HouseItem from './HouseItem';
import { deleteHouseDB, postHouseDB, putHouseDB } from '../actions/actionCreators';

export class HouseList extends React.Component {
  houseFormRef = React.createRef();

  addHouse = (house) => this.props.dispatch(postHouseDB(house));
  saveHouse = (house) => this.props.dispatch(putHouseDB(house));
  editHouse = (item) => this.houseFormRef.current.handleOpen(item);

  deleteHouse = (id) => {
    swal.fire({
      text: 'Are you sure you want to delete this item?',
      type: 'warning',
      showCancelButton: true
    }).then(resp => resp && !resp.dismiss && this.props.dispatch(deleteHouseDB(id)))
  }

  renderHouseItem = (value) => {
    return (
      <li key={value._id}>
        <HouseItem
          value={value}
          deleteHouse={this.deleteHouse}
          editHouse={this.editHouse}/>
      </li>
    );
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-uppercase">Real Estate List</h1>
        <div className="text-center">
          <HouseForm
            ref={this.houseFormRef}
            className="text-right"
            addHouse={this.addHouse}
            saveHouse={this.saveHouse}
            />
        </div>
        <div className="mt-3">
          {
            this.props.houses && (
              this.props.sendingRequest ? (
                <div className="no-entries">
                  <h3 className="text-muted">Loading...</h3>
                </div>
              ) : (
                this.props.houses.length > 0 ? (
                  <ul className="list-unstyled">{this.props.houses.map(this.renderHouseItem)}</ul>
                ) : (
                  <div className="no-entries">
                    <h3 className="text-muted">No entries!</h3>
                  </div>
                )
              )
            )
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    houses: state.houses,
    sendingRequest: state.sendingRequest
  };
}

export default connect(mapStateToProps)(HouseList);