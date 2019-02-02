import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Search from './Search';
import Gender from './Gender';
import Age from './Age';

import './styles.less';

class TableHeader extends PureComponent {
  render() {
    const {
      persons,
      search,
      gender,
      onInputChange,
    } = this.props;

    return (
      <div styleName="wrapper">
        <fieldset disabled={!persons.length}>
          <Search onChange={onInputChange} />
          <Gender onChange={onInputChange} />
          <Age
            onChange={onInputChange}
            persons={persons}
            search={search}
            gender={gender}
          />
        </fieldset>
      </div>
    );
  }
}

TableHeader.propTypes = {
  search: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  persons: PropTypes.arrayOf(PropTypes.object).isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default TableHeader;
