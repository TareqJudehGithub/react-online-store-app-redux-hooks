import {compose} from "redux";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import WithSpinner from "../../components/with-spinner/with-spinner.component";
import Directory from "../../components/directory/directory.container";
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
