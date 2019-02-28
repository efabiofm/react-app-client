import React from 'react';
import cloneDeep from 'lodash/cloneDeep';
import HouseForm from './HouseForm';
import HouseItem from './HouseItem';

class HouseList extends React.Component {
  state = {
    houses: [],
  };

  addHouse = (house) => {
    const houses = cloneDeep(this.state.houses);
    houses.push(house);
    this.setState({ houses });
  }

  renderHouseItem(value, key) {
    return <li key={key}><HouseItem value={value}></HouseItem></li>;
  }

  render() {
    const showList = this.state.houses.length > 0;
    return (
      <div className="container">
        <h1 className="text-uppercase">Real Estate List</h1>
        <div className="text-center">
          <HouseForm className="text-right" addHouse={this.addHouse}/>
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