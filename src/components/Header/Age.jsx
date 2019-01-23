import Gender from './Gender';

class Age extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selected: ''
    };

    this.onChange = this.onChange.bind(this);
    this.getOptions = this.getOptions.bind(this);
    this.getFilteredPersons = this.getFilteredPersons.bind(this);
  }

  onChange(event) {
    const {value} = event.target;

    this.setState({
      selected: value
    });

    this.props.onChange({age: +value});
  }

  getFilteredPersons() {
    const {persons, search, gender} = this.props;
    const genders = Gender.values;

    return persons.filter(person => {
      let isSuitable = true;

      if (search.length) {
        isSuitable =
          person.name.toUpperCase().indexOf(search.toUpperCase()) === 0;
      }

      if (isSuitable && gender !== genders[0].key) {
        isSuitable =
          (person.gender === genders[1].value && gender === genders[1].key) ||
          (person.gender === genders[2].value && gender === genders[2].key);
      }

      return isSuitable;
    });
  }

  getOptions() {
    if (!this.props.persons.length) {
      return null;
    }

    const uniqeAges = {};

    this.getFilteredPersons().forEach(person => {
      const {age} = person;

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
    const {selected} = this.state;

    return (
      <div className='age_wrapper'>
        <label htmlFor='select_age'>Возраст</label>
        <select
          id='select_age'
          name='age'
          value={selected}
          onChange={this.onChange}>
          <option value={0}>Все</option>
          {this.getOptions()}
        </select>
      </div>
    );
  }
}

Age.propTypes = {
  persons: PropTypes.array.isRequired,
  search: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Age;
