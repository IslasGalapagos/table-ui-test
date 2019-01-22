class Gender extends PureComponent {
  static genders = [
    {
      key: 'all',
      value: 'Все'
    },
    {
      key: 'w',
      value: 'Ж'
    },
    {
      key: 'm',
      value: 'М'
    }
  ];

  constructor(props) {
    super(props);

    this.state = {
      selected: 'all'
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const {value} = event.target;

    this.setState({
      selected: value
    });

    this.props.onChange({gender: value});
  }

  render() {
    const {selected} = this.state;

    const genders = Gender.genders.map(data => (
      <div key={`g_${data.key}`} className='gender_item'>
        <label htmlFor={`g_${data.key}`}>{data.value}</label>
        <input
          type='radio'
          name='gender'
          id={`g_${data.key}`}
          value={data.key}
          checked={selected === data.key}
          onChange={this.onChange}
        />
      </div>
    ));

    return (
      <fieldset className='gender_wrapper'>
        <legend>Пол</legend>
        {genders}
      </fieldset>
    );
  }
}

Gender.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default Gender;
