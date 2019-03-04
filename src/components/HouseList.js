import React from 'react';
import cloneDeep from 'lodash/cloneDeep';
import reject from 'lodash/reject';
import findIndex from 'lodash/findIndex';
import swal from 'sweetalert2';
import HouseForm from './HouseForm';
import HouseItem from './HouseItem';
import { postHouse, getHouses, putHouse, deleteHouse } from '../api/house.api';

class HouseList extends React.Component {
  houseFormRef = React.createRef();

  state = {
    houses: [],
  };

  addHouse = (house) => {
    return postHouse(house).then((resp) => {
      const houses = cloneDeep(this.state.houses);
      house._id = resp._id;
      houses.push(house);
      this.setState({ houses });
    });
  }

  saveHouse = (house) => {
    return putHouse(house).then((resp) => {
      const houses = cloneDeep(this.state.houses);
      const i = findIndex(houses, { _id: house._id });
      houses[i] = house;
      this.setState({ houses });
    });
  }

  deleteHouse = (_id) => {
    swal.fire({
      text: 'Are you sure you want to delete this item?',
      type: 'warning',
      showCancelButton: true
    }).then((resp) => {
      if (resp && !resp.dismiss) {
        return deleteHouse(_id).then(() => {
          let houses = cloneDeep(this.state.houses);
          houses = reject(houses, { _id });
          this.setState({ houses });
        });
      }
      return false;
    })
  }

  editHouse = (item) => {
    this.houseFormRef.current.handleOpen(item);
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

  componentDidMount() {
    return getHouses().then((houses) => {
      this.setState({ houses });
    });
  }

  render() {
    const showList = this.state.houses.length > 0;
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
          {showList ? (
            <ul className="list-unstyled">{this.state.houses.map(this.renderHouseItem)}</ul>
          ) : (
            <div className="no-entries">
              <h3 className="text-muted">No entries :(</h3>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default HouseList;