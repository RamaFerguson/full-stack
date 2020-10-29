import React from "react";
import ReactDOM from 'react-dom';
import FilterButton from './FilterButton';
import renderer from 'react-test-renderer';

describe('FilterButton', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <React.StrictMode>
        <FilterButton />
      </React.StrictMode>,
      div
    );
  });
  it('renders correctly', () => {
    const name = "All";
    const filter = ["All", "NotStarted", "Started", "Completed"]
    function setFilter(name) { console.log(name); }
    const filterButton = renderer
                  .create(<FilterButton       
                    key={name}
                    name={name}
                    isPressed={name === filter}
                    setFilter={setFilter} />)
                  .toJSON();
    expect(filterButton).toMatchSnapshot();
  })
})