import { mountWithRouter } from '../../../../utils/testHelpers';
import TransactionRow from './transactionRow';
import accounts from '../../../../../test/constants/accounts';
import transactionTypes from '../../../../constants/transactionTypes';

describe('Single Transaction Component', () => {
  const unlockTx = {
    data: {
      senderId: accounts.genesis.address,
      recipientId: '',
      amount: '50',
      asset: {
        data: 'Transaction message',
        recipientId: '',
      },
      confirmation: 1,
      type: 14,
      id: 123,
      fee: 1e7,
      timestamp: Date.now(),
      title: 'unlockToken',
    },
  };

  it('Should render unlock LSK details', () => {
    const wrapper = mountWithRouter(
      TransactionRow,
      {
        t: v => v,
        host: accounts.genesis.address,
        data: unlockTx.data,
      },
    );
    expect(wrapper).toContainMatchingElement('.transaction-image');
    expect(wrapper.find('.transaction-address').text()).toEqual(transactionTypes().unlockToken.title);
    expect(wrapper).toContainMatchingElement('.transaction-amount');
  });
});
