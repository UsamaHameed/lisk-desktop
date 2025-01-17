/* istanbul ignore file */
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getActiveTokenAccount } from '../../../utils/account';
import { getTransaction } from '../../../utils/api/transaction';
import withData from '../../../utils/withData';
import TransactionDetails from './transactionDetails';
import { parseSearchParams } from '../../../utils/searchParams';

const mapStateToProps = (state, ownProps) => ({
  address: getActiveTokenAccount(state).address,
  id: ownProps.match.params.id,
  activeToken: state.settings.token ? state.settings.token.active : 'LSK',
  netCode: state.network.networks.LSK.code,
});

const apis = {
  transaction: {
    apiUtil: (network, { token, id }) => getTransaction({ network, params: { id } }, token),
    getApiParams: (state, ownProps) => ({
      token: state.settings.token.active,
      id: parseSearchParams(ownProps.location.search).transactionId,
      network: state.network,
    }),
    transformResponse: response => response.data[0] || {},
    autoload: true,
  },
};

export default compose(
  withRouter,
  connect(mapStateToProps),
  withData(apis),
)(TransactionDetails);
