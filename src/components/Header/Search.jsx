class Search extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  onSubmit(event) {
    if (event.keyCode === 13) {
      this.props.onSubmit({search: this.state.value});
    }
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
          onKeyUp={this.onSubmit}
        />
      </div>
    );
  }
}

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default Search;
