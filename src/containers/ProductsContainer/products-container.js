import { connect } from 'react-redux';
import ProductsList from 'components/ProductsList';
import { getData, addItemToCart } from 'actions/products';
import { getItemByFilter } from 'select';

const mapStateToProps = state => (
  {
    products: getItemByFilter(state),
    loading: state.products.loading,
    error: state.products.error,
  }
);

const mapDispatchToProps = dispatch => (
  {
    getData: () => dispatch(getData()),
    addItemToCart: (id, quantity) => dispatch(addItemToCart(id, quantity)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
