class Search extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const {value} = event.target;

    this.setState({
      value: value
    });

    this.props.onChange({search: value});
  }

  render() {
    const {value} = this.state;

    return (
      <div className='search_wrapper'>
        <label htmlFor='search'>Поиск по имени</label>
        <input
          type='text'
          name='search'
          id='search'
          value={value}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

Search.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default Search;
