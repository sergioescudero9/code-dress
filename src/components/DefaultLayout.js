import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

const ContentStyle = styled.div`
  padding: 20px;
`;

const DefaultLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <div>
        <Header />
        <ContentStyle>
          <Component {...props} />
        </ContentStyle>
        <div className="Footer">Footer</div>
      </div>
    )}
  />
);

export default DefaultLayout;
