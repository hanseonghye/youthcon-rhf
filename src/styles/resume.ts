import { css } from '@emotion/react';

export const resumeLayout = css`
  margin-top: 50px;
  margin-bottom: 200px;
  .tip1 {
    color: #666;
    background-color: #f8f8f8;
    padding: 10px;
    align-self: center;
  }

  .MuiInput-root {
    border: none !important;

    &:before,
    &:after {
      border: none !important;

      &.Mui-error {
        border-bottom: 1px solid #d32f2f !important;
        //-webkit-transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      }
    }

    &.Mui-error {
      border-bottom: 1px solid #d32f2f !important;
    }
  }
`;

export const careerCardLayout = css`
  .date {
    align-items: center;

    .checker {
      width: 14px;
      height: 14px;
      margin: 0 5px 0 0;
      position: relative;
      border: 0;
      background-size: cover;
    }

    .label {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-align: start;
      align-items: flex-start;
      color: rgba(0, 0, 0, 0.4);
    }
  }

  .addProject {
    font-weight: 600;
    font-size: 16px;
    padding: 20px 0;

    &:hover {
      background: none;
    }
  }
`;

export const blueBox = css`
  background-color: #f3f9fe;
  padding: 15px 20px;

  p {
    white-space: pre-wrap;
    font-size: 12px;
    line-height: 1.42;
    letter-spacing: normal;
    color: #666;
  }
`;

export const skilBoxLayout = css`
  .skills {
    display: flex;
    background-color: #f5fcf8;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-top: 20px;
    padding: 20px 18px;
  }

  .skillChip {
    background-color: #e4f4ec;
    padding: 0 16px;
    margin: 10px 8px 0 0;
  }
`;

export const floatingButton = css`
  position: fixed;
  top: auto;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0 50px;
  background-color: #fff;
  border-top: 1px solid #e0e0e0;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1060px;
    padding: 15px 0;
    margin: 0 auto;

    div {
      align-items: center;
    }
  }
`;
