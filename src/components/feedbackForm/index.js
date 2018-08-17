import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import actionTypes from '../../constants/actions';
import { feedbackDialogDisplayed, dialogHidden } from '../../actions/dialog';
import FeedbackFrom from './feedbackForm';

export const mapStateToProps = state => ({
  toasts: state.toaster || [],
});

export const mapDispatchToProps = dispatch => ({
  hideDialog: () => dispatch(dialogHidden()),
  showDialog: data => dispatch(feedbackDialogDisplayed(data)),
  sendFeedback: data => dispatch({ data, type: actionTypes.sendFeedback }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(translate()(FeedbackFrom));
