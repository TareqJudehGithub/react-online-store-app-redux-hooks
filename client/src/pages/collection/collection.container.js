import { connect } from "react-redux";
import {compose} from "redux";
import {createStructuredSelector} from "reselect";

import {selectIsCollectionFetching} from "../../redux/shop/shop.selectors";

import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from "./collection.component";


const mapStateToProps = createStructuredSelector({
     //because this selector is inverted in shop.selectors.js
     isLoading: (state) => selectIsCollectionFetching(state)
});
const CollectionContainer = compose(
     connect(mapStateToProps),
     WithSpinner
     )
     (CollectionPage)

export default CollectionContainer;

//for Collection component in case  selectIsFetching was not working.
//import {SelectIsCollectionsLoaded} from "../../redux/shop/shop.selectors";
//