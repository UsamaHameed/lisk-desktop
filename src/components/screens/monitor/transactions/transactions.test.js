import TransactionsPure from './transactions';
import transactions from '../../../../../test/constants/transactions';
import { mountWithRouter } from '../../../../utils/testHelpers';

describe('Transactions monitor page', () => {
  const props = {
    t: key => key,
    transactions: {
      data: [],
      meta: null,
      isLoading: true,
      loadData: jest.fn(),
      clearData: jest.fn(),
    },
  };
  const amountFrom = '1.3';
  const sort = 'timestamp:desc';
  const height = '1234';
  const transactionsWithData = {
    ...props.transactions,
    isLoading: false,
    data: transactions,
    meta: {
      count: transactions.length,
      offset: 0,
      total: transactions.length * 3,
    },
  };

  it('should render transactions list', () => {
    let wrapper = mountWithRouter(TransactionsPure, props);
    expect(wrapper.find('TransactionRow')).toHaveLength(0);

    wrapper = mountWithRouter(TransactionsPure, { ...props, transactions: transactionsWithData });
    wrapper.update();
    expect(wrapper.find('TransactionRow')).toHaveLength(transactions.length);
  });

  it('allows to load more transactions', () => {
    const wrapper = mountWithRouter(
      TransactionsPure,
      { ...props, transactions: transactionsWithData },
    );
    wrapper.find('button.load-more').simulate('click');
    expect(props.transactions.loadData).toHaveBeenCalledWith(
      { offset: transactionsWithData.data.length, sort },
    );
  });

  it('shows error if API failed', () => {
    const error = 'Loading failed';
    const wrapper = mountWithRouter(TransactionsPure, {
      ...props,
      transactions: {
        ...props.transactions,
        isLoading: false,
        error,
      },
    });
    expect(wrapper).toIncludeText(error);
  });

  it('allows to load more transactions when filtered', () => {
    const wrapper = mountWithRouter(
      TransactionsPure,
      { ...props, transactions: transactionsWithData },
    );

    wrapper.find('button.filter').simulate('click');
    wrapper.find('input.amountFromInput').simulate('change', { target: { value: amountFrom, name: 'amountFrom' } });
    wrapper.find('form.filter-container').simulate('submit');
    wrapper.find('button.load-more').simulate('click');

    expect(props.transactions.loadData).toHaveBeenCalledWith({
      offset: transactions.length, amountFrom, sort,
    });
  });

  it('allows to filter transactions by more filters', () => {
    const wrapper = mountWithRouter(
      TransactionsPure,
      { ...props, transactions: transactionsWithData },
    );

    wrapper.find('button.filter').simulate('click');
    wrapper.find('.more-less-switch').simulate('click');
    wrapper.find('input.height').simulate('change', { target: { value: height } });
    wrapper.find('form.filter-container').simulate('submit');
    wrapper.find('button.load-more').simulate('click');

    expect(props.transactions.loadData).toHaveBeenCalledWith({
      offset: transactions.length, height, sort,
    });
  });

  it('allows to reverse sort by clicking "Date" header', () => {
    const wrapper = mountWithRouter(
      TransactionsPure,
      { ...props, transactions: transactionsWithData },
    );
    wrapper.find('.sort-by.timestamp').simulate('click');
    expect(props.transactions.loadData).toHaveBeenCalledWith({ sort: 'timestamp:asc' });
    wrapper.find('.sort-by.timestamp').simulate('click');
    expect(props.transactions.loadData).toHaveBeenCalledWith({ sort: 'timestamp:desc' });
  });

  it('allows to clear the filter after filtering by height', () => {
    const wrapper = mountWithRouter(TransactionsPure, props);
    wrapper.find('button.filter').simulate('click');
    wrapper.find('.more-less-switch').simulate('click');
    wrapper.find('input.height').simulate('change', { target: { value: height } });
    wrapper.find('form.filter-container').simulate('submit');
    wrapper.find('span.clear-filter').simulate('click');
    expect(props.transactions.loadData).toHaveBeenCalled();
  });
});
