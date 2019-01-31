import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Search extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const { value } = event.target;

    this.setState({
      value,
    });

    const { onChange } = this.props;

    onChange({ search: value });
  }

  render() {
    const { value } = this.state;

    return (
      <div className="search_wrapper">
        <label htmlFor="search">
          <span className="label_text">Поиск по имени</span>
          <input
            type="text"
            name="search"
            id="search"
            value={value}
            onChange={this.onChange}
          />
        </label>
      </div>
    );
  }
}

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Search;
