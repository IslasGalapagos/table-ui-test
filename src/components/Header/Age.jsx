class Age extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selected: ''
    };

    this.onChange = this.onChange.bind(this);
    this.getOptions = this.getOptions.bind(this);
  }

  onChange(event) {
    const {value} = event.target;

    this.setState({
      selected: value
    });

    this.props.onChange({age: +value});
  }

  getOptions() {
    const {persons} = this.props;

    if (!persons.length) {
      return null;
    }

    const uniqeAges = {};

    persons.forEach(person => {
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
  onChange: PropTypes.func.isRequired
};

export default Age;
