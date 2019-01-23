import {hot} from 'react-hot-loader';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {Global} from '@emotion/core';

import TableHeader from './Header';
import Table from './Table';
import {commonStyles} from './Container.styles';
import {getPersonsThunk, changeFilter} from '../store/actions';

class Container extends PureComponent {
  componentDidMount() {
    if (!this.props.persons.length) {
      this.props.getPersons();
    }
  }

  render() {
    const {filters, persons, changeFilter, loader} = this.props;
    console.log(loader);
    return (
      <React.StrictMode>
        <Global styles={commonStyles} />
        {loader && (
          <div className='loader'>
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
    age: PropTypes.number.isRequired
  }),
  persons: PropTypes.array.isRequired,
  changeFilter: PropTypes.func.isRequired
};

const mapStateToProps = store => ({
  loader: store.loader,
  filters: store.filters,
  persons: store.persons
});

const mapDispatchToProps = dispatch => ({
  getPersons: () => dispatch(getPersonsThunk()),
  changeFilter: data => dispatch(changeFilter({payload: data}))
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  hot(module)
)(Container);
