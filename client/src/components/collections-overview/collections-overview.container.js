import { connect } from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectIsCollectionFetching} from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverView from "./collections-overview.component";


//173.3 compose allows us to evaluate carried multipule functions where the function returns
//another function that expects something to be passed into it. And allows you to
//to chain them all together.
import {compose} from "redux";

//173.1
const mapStateToProps = createStructuredSelector({
     isLoading: selectIsCollectionFetching
});
//export out the new value:
const CollectionsOverViewContainer = compose(
     connect(mapStateToProps),
     WithSpinner
)(CollectionsOverView);

//173.2
//to summarize:
//WithSpinner will first wrap around CollectionOverView component, giving us
//back the CollectionsOverviewWithSpinner component (animation enabled while loading).
//After that CollectionsOverviewWithSpinner get passed to connect, which will then
// give it the "isloading" state.

export default CollectionsOverViewContainer;