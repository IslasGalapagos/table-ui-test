/** @jsx jsx */
import {jsx} from '@emotion/core';

import Gender from './Header/Gender';
import styles from './Table.styles.js';

class Table extends PureComponent {
  constructor(props) {
    super(props);

    this.createRows = this.createRows.bind(this);
  }

  createRows() {
    const {
      persons,
      filters: {search, gender, age}
    } = this.props;

    let filteredPersons = persons;

    if (search.length) {
      filteredPersons = filteredPersons.filter(person => {
        return person.name.toUpperCase().indexOf(search.toUpperCase()) === 0;
      });
    }

    const genders = Gender.values;

    if (gender !== genders[0].key) {
      filteredPersons = filteredPersons.filter(
        person =>
          (person.gender === genders[1].value && gender === genders[1].key) ||
          (person.gender === genders[2].value && gender === genders[2].key)
      );
    }

    if (age > 0) {
      filteredPersons = filteredPersons.filter(person => person.age === age);
    }

    return filteredPersons.map(person => {
      const {name, gender, age} = person;

      return (
        <tr key={`${name}${gender}${age}`}>
          <td>{name}</td>
          <td>{gender}</td>
          <td>{age}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <table css={styles}>
        <thead>
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
    age: PropTypes.number.isRequired
  }),
  persons: PropTypes.array.isRequired
};

export default Table;
