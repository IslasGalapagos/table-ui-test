import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Gender from '../Header/Gender';

import './styles.less';

class Table extends PureComponent {
  createRows() {
    const {
      persons,
      filters: { search, gender, age },
    } = this.props;

    let filteredPersons = persons;

    if (search.length) {
      filteredPersons = filteredPersons.filter(person => (
        person.name.toUpperCase().indexOf(search.toUpperCase()) === 0
      ));
    }

    const genders = Gender.values;

    if (gender !== genders[0].key) {
      filteredPersons = filteredPersons.filter(person => (
        (person.gender === genders[1].value && gender === genders[1].key)
        || (person.gender === genders[2].value && gender === genders[2].key)
      ));
    }

    if (age > 0) {
      filteredPersons = filteredPersons.filter(person => person.age === age);
    }

    return filteredPersons.map((person) => {
      const {
        name,
        gender: personGender,
        age: personAge,
      } = person;

      return (
        <tr key={`${name}${personGender}${personAge}`}>
          <td>{name}</td>
          <td>{personGender}</td>
          <td>{personAge}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <table styleName="table">
        <thead styleName="header">
          <tr>
            <td>Имя</td>
            <td>Пол</td>
            <td>Возраст</td>
          </tr>
        </thead>
        <tbody>{this.createRows()}</tbody>
      </table>
    );
  }
}

Table.propTypes = {
  filters: PropTypes.shape({
    search: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }).isRequired,
  persons: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
