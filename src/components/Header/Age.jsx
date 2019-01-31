import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Gender from './Gender';

class Age extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selected: '',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const { value } = event.target;

    this.setState({
      selected: value,
    });

    const { onChange } = this.props;

    onChange({ age: +value });
  }

  getFilteredPersons() {
    const { persons, search, gender } = this.props;
    const genders = Gender.values;

    return persons.filter((person) => {
      let isSuitable = true;

      if (search.length) {
        isSuitable = person.name.toUpperCase().indexOf(search.toUpperCase()) === 0;
      }

      if (isSuitable && gender !== genders[0].key) {
        isSuitable = (person.gender === genders[1].value && gender === genders[1].key)
          || (person.gender === genders[2].value && gender === genders[2].key);
      }

      return isSuitable;
    });
  }

  getOptions() {
    const { persons } = this.props;

    if (!persons.length) {
      return null;
    }

    const uniqeAges = {};

    this.getFilteredPersons().forEach((person) => {
      const { age } = person;

      if (typeof uniqeAges[age] === 'undefined') {
        uniqeAges[age] = null;
      }
    });

    return Object.keys(uniqeAges).map(age => (
      <option key={age} value={age}>
        {age}
      </option>
    ));
  }

  render() {
    const { selected } = this.state;

    return (
      <div className="age_wrapper">
        <span className="label_text">Возраст</span>
        <select
          name="age"
          value={selected}
          onChange={this.onChange}
        >
          <option value={0}>Все</option>
          {this.getOptions()}
        </select>
      </div>
    );
  }
}

Age.propTypes = {
  persons: PropTypes.arrayOf(PropTypes.object).isRequired,
  search: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Age;
