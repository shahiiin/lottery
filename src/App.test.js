import React from 'react';
import { render } from '@testing-library/react';
import { DatePicker, message } from 'antd';
import 'antd/dist/antd.css';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
