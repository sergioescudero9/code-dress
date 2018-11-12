import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Image = styled.img`
  max-width: 300px;
  @media (min-width: ${({ theme: { sizes: { breaks: { mobile } } } }) => mobile}) {
    max-width: 500px;
  }
`;

const Container = styled.section`
  background: ${({ theme: { colors: { neutral } } }) => neutral};
  margin-bottom: ${({ theme: { sizes: { spaces: { main } } } }) => main};
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,.09);
  border-color: rgba(0,0,0,.09);
`;

class Card extends Component {
  render() {
    const {
      product: {
        id, description, img, prize, title
      },
    } = this.props;
    return (
      <Container>
        <Image src={img} alt={id} />
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{prize}</p>
      </Container>
    );
  }
}

Card.propTypes = {
  product: PropTypes.exact({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    prize: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  })
};

export default Card;
