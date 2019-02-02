import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { compose } from 'redux';
import { connect } from 'react-redux';

import TableHeader from './Header';
import Table from './Table';
import { getPersonsThunk, changeFilterAction } from '../store/actions';

import './container.less';

class Container extends PureComponent {
  componentDidMount() {
    const { persons, getPersons } = this.props;

    if (!persons.length) {
      getPersons();
    }
  }

  render() {
    const {
      filters,
      persons,
      changeFilter,
      loader,
    } = this.props;

    return (
      <React.StrictMode>
        {loader && (
          <div className="loader">
            <span>Загрузка</span>
          </div>
        )}
        <TableHeader
          onInputChange={changeFilter}
          persons={persons}
          search={filters.search}
          gender={filters.gender}
        />
        <Table persons={persons} filters={filters} />
      </React.StrictMode>
    );
  }
}

Container.propTypes = {
  loader: PropTypes.bool.isRequired,
  filters: PropTypes.shape({
    search: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }).isRequired,
  persons: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeFilter: PropTypes.func.isRequired,
  getPersons: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  loader: store.loader,
  filters: store.filters,
  persons: store.persons,
});

const mapDispatchToProps = dispatch => ({
  getPersons: () => dispatch(getPersonsThunk()),
  changeFilter: data => dispatch(changeFilterAction({ payload: data })),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  hot(module),
)(Container);
