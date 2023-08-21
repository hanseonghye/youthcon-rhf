import { css } from '@emotion/react';

export const dateFieldLayout = css`
  .divider {
    margin-bottom: 5px;
    align-self: flex-end;
  }

  .hyphen {
    align-self: center;
  }
`;

export const autoCompleteSearchField = css`
  margin-top: 30px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #e1e2e3;
  padding: 11px 20px 11px 15px;
  font-size: 15px;
  appearance: none;
  -webkit-appearance: none;

  &:hover {
    border: 1px solid blue;
  }
`;
