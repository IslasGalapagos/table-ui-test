import { PureComponent } from 'react';
import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx } from '@emotion/core';

import Search from './Search';
import Gender from './Gender';
import Age from './Age';
import styles from './Header.styles';

class TableHeader extends PureComponent {
  render() {
    const {
      persons,
      search,
      gender,
      onInputChange,
    } = this.props;

    return (
      <div css={styles}>
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
