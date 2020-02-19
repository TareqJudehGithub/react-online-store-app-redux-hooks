import {compose} from "redux";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import WithSpinner from "../with-spinner/with-spinner.component";
import Directory from "./directory.component";
import {selectDirectorySections} from "../../redux/directory/directory-selectors";

const mapStateToProps = createStructuredSelector({
sections: selectDirectorySections
});

const DirectoryContainer = compose(
     connect(mapStateToProps),
     WithSpinner
     )
     (Directory);

export default DirectoryContainer;
