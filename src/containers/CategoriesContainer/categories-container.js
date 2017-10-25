import { connect } from 'react-redux';
import { selectCategories } from 'select';
import Category from 'components/Category';
import { filterByCategory } from 'actions/products';

const mapStateToProps = state => (
  {
    categories: selectCategories(state),
  }
);

const mapDispatchToProps = dispatch => (
  {
    filterByCategory: categories => dispatch(filterByCategory(categories)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Category);
