import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './styles.less';

class Gender extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selected: Gender.values[0].key,
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const { value } = event.target;

    this.setState({
      selected: value,
    });

    const { onChange } = this.props;

    onChange({ gender: value });
  }

  render() {
    const { selected } = this.state;

    const genders = Gender.values.map(data => (
      <div key={`g_${data.key}`} styleName="item">
        <label htmlFor={`g_${data.key}`}>
          <span styleName="label_text">{data.value}</span>
          <input
            type="radio"
            name="gender"
            id={`g_${data.key}`}
            value={data.key}
            checked={selected === data.key}
            onChange={this.onChange}
          />
        </label>
      </div>
    ));

    return (
      <fieldset styleName="wrapper">
        <legend>Пол</legend>
        {genders}
      </fieldset>
    );
  }
}

Gender.values = [
  {
    key: 'all',
    value: 'Все',
  },
  {
    key: 'w',
    value: 'Ж',
  },
  {
    key: 'm',
    value: 'М',
  },
];

Gender.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Gender;
