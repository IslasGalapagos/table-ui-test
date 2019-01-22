import {css} from '@emotion/core';

export default css`
  max-width: 900px;
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;
  background-color: #fdfdfd;

  thead {
    border-bottom: 1px solid #ddd;

    td {
      font-weight: bold;
    }
  }

  tr {
    td {
      width: 33.333333%;
      padding: 15px;
    }

    &:not(:last-child) td {
      border-bottom: 1px solid #ddd;
    }
  }
`;
