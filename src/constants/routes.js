import { tokenMap } from './tokens';
import Accounts from
  '../components/screens/explorer/accounts';
import AddBookmark from '../components/screens/bookmarks/addBookmark';
import BlockDetails from '../components/screens/monitor/blockDetails';
import Blocks from '../components/screens/monitor/blocks';
import Bookmarks from '../components/screens/bookmarks';
import Dashboard from '../components/screens/dashboard';
import Delegates from '../components/screens/delegates';
import Extensions from '../components/screens/extensions';
import Help from '../components/screens/help';
import HwWalletLogin from '../components/screens/hwWalletLogin';
import Login from '../components/screens/login';
import Monitor from '../components/screens/monitor';
import Register from '../components/screens/register';
import RegisterDelegate from '../components/screens/registerDelegate';
import SecondPassphrase from '../components/screens/secondPassphrase';
import Send from '../components/screens/wallet/send/send';
import Settings from '../components/screens/settings';
import SignMessage from '../components/screens/signMessage';
import Splashscreen from '../components/screens/splashscreen';
import TermsOfUse from '../components/screens/termsOfUse';
import ToolboxDemo from '../components/toolbox/demo';
import MonitorTransactions from '../components/screens/monitor/transactions';
import TransactionDashboard from '../components/shared/transactionDashboard';
import Transactions from '../components/screens/explorer/transactions';
import VerifyMessage from '../components/screens/verify-message';
import Voting from '../components/screens/delegates/voting';

export default {
  toolboxDemo: {
    path: '/toolbox',
    pathSuffix: '/:component?',
    component: ToolboxDemo,
    isPrivate: false,
  },
  dashboard: {
    path: '/dashboard',
    component: Dashboard,
    isPrivate: false,
  },
  addBookmark: {
    path: '/bookmarks/add-bookmark',
    component: AddBookmark,
    isPrivate: false,
  },
  monitor: {
    path: '/monitor',
    component: Monitor,
    isPrivate: false,
    exact: true,
    forbiddenTokens: [tokenMap.BTC.key],
  },
  blocks: {
    path: '/monitor/blocks',
    component: Blocks,
    isPrivate: false,
    exact: true,
    forbiddenTokens: [tokenMap.BTC.key],
  },
  bookmarks: {
    path: '/bookmarks',
    component: Bookmarks,
    isPrivate: false,
  },
  send: {
    path: '/wallet/send',
    component: Send,
    isPrivate: true,
  },
  wallet: {
    path: '/wallet',
    pathSuffix: '/:token?',
    component: TransactionDashboard,
    isPrivate: true,
  },
  voting: {
    path: '/delegates/vote',
    component: Voting,
    isPrivate: true,
    forbiddenTokens: [tokenMap.BTC.key],
  },
  delegates: {
    path: '/delegates',
    component: Delegates,
    isPrivate: false,
    forbiddenTokens: [tokenMap.BTC.key],
  },
  help: {
    path: '/help',
    component: Help,
    isPrivate: false,
  },
  settings: {
    path: '/settings',
    component: Settings,
    isPrivate: false,
  },
  secondPassphrase: {
    path: '/second-passphrase',
    component: SecondPassphrase,
    isPrivate: true,
    forbiddenTokens: [tokenMap.BTC.key],
  },
  signMessage: {
    path: '/sign-message',
    component: SignMessage,
    isPrivate: true,
    forbiddenTokens: [tokenMap.BTC.key],
  },
  verifyMMessage: {
    path: '/verify-message',
    component: VerifyMessage,
    isPrivate: false,
    forbiddenTokens: [tokenMap.BTC.key],
  },
  registerDelegate: {
    path: '/register-delegate',
    component: RegisterDelegate,
    isPrivate: true,
    forbiddenTokens: [tokenMap.BTC.key],
  },
  addAccount: {
    path: '/add-account',
    component: Login,
    isPrivate: false,
  },
  extensions: {
    path: '/extensions',
    component: Extensions,
    isPrivate: false,
  },
  accounts: {
    pathPrefix: '',
    path: '/explorer/accounts',
    pathSuffix: '/:address?',
    component: Accounts,
    isPrivate: false,
  },
  transactions: {
    pathPrefix: '',
    path: '/explorer/transactions',
    pathSuffix: '/:id?',
    component: Transactions,
    isPrivate: false,
  },
  hwWallet: {
    path: '/hw-wallet-login',
    component: HwWalletLogin,
    isSigninFlow: true,
    isPrivate: false,
  },
  splashscreen: {
    path: '/',
    component: Splashscreen,
    isPrivate: false,
    isSigninFlow: true,
    exact: true,
  },
  register: {
    path: '/register',
    component: Register,
    isPrivate: false,
    isSigninFlow: true,
  },
  login: {
    path: '/login',
    component: Login,
    isPrivate: false,
    isSigninFlow: true,
  },
  termsOfUse: {
    path: '/terms-of-use',
    component: TermsOfUse,
    isPrivate: false,
    isSigninFlow: true,
  },
  monitorTransactions: {
    path: '/monitor/transactions',
    component: MonitorTransactions,
    isPrivate: false,
  },
  blockDetails: {
    path: '/monitor/blocks',
    pathSuffix: '/:id?',
    component: BlockDetails,
    isPrivate: false,
    forbiddenTokens: [tokenMap.BTC.key],
  },
};
