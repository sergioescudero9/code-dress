import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../state/Home/action';
import Loading from '../../components/Loading';
import Card from '../../components/Card';

class Home extends Component {
  componentDidMount() {
    const { loadProducts } = this.props;
    loadProducts();
  }

  render() {
    const { products, loading } = this.props;
    return (
      <div>
        {loading ? <Loading /> : (
          <div>
            {
              products.map(({
                id, ...rest
              }) => (
                <Card key={id} product={{ ...rest, id }} />
              ))
            }
          </div>
        )
        }
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    loading: state.homeReducer.loading,
    products: state.homeReducer.products,
  }
);

Home.propTypes = {
  loadProducts: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    prize: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired),
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, actions)(Home);
