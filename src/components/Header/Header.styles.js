import {css} from '@emotion/core';

export default css`
  margin-bottom: 40px;

  fieldset {
    padding: 0;
    border: none;
  }

  .search_wrapper,
  .gender_wrapper,
  .age_wrapper {
    display: inline-block;
    vertical-align: top;
  }

  .search_wrapper label,
  .gender_wrapper legend,
  .age_wrapper label {
    font-weight: bold;
    margin-bottom: 10px;
  }

  .search_wrapper,
  .age_wrapper {
    label {
      display: block;
    }
  }

  .search_wrapper input {
    outline: none;
  }

  .gender_wrapper {
    margin: 0 30px;
  }

  .gender_item {
    display: inline-block;
    vertical-align: top;

    label,
    input {
      vertical-align: top;
    }

    label {
      margin-right: 5px;
    }

    input {
      cursor: pointer;
    }

    &:not(:last-child) {
      margin-right: 15px;
    }
  }

  .age_wrapper select {
    cursor: pointer;
  }
`;
