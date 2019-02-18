const ss = {
  app: '#app',
  transactoinsTable: '.transaction-results',
  transactionRow: '.transactions-row',
  filterAll: '.filter-all',
  filterOutgoing: '.filter-out',
  filterIncoming: '.filter-in',
  filterVoted: '.filter-voted',
  filterNotVoted: '.filter-not-voted',
  seeAllTxsBtn: '.seeAllLink',
  txDetailsBackButton: '.transaction-details-back-button',
  recipientInput: '.recipient input',
  recipientConfirmLabel: '.recipient-confirm',
  transferSendTab: '.send-tab',
  transferRequestTab: '.request-tab',
  requestSpecificAmountBtn: '.specify-request',
  confirmRequestBtn: '.confirm-request',
  qrCode: '.qr-code',
  requestQrCode: '.qrcode-section',
  confirmRequestBlock: '.confirm-request-step',
  requestLink: '.request-link',
  backButton: '.back',
  accountInfoTab: '.account-info',
  delegateStatisticsTab: '.delegate-statistics ',
  votedAddress: '.votes .voter-address',
  voterAddress: '.voters .voter-address',
  accountAddress: '.copy-title',
  selectionVotingNumber: '.selection h4',
  totalVotingNumber: '.total h4',
  searchInput: '#autosuggest-input',
  showMoreVotesBtn: '.show-votes',
  leftBlockAccountExplorer: '.explorer-account-left-block',
  amountInput: '.amount input',
  bookmarkInput: '#bookmark-input',
  bookmarkList: '.bookmarkList',
  nextTransferBtn: '.send-next-button',
  sendBtn: '.send-button',
  transactionAddress: '.transaction-address span',
  chooseDelegateName: '.choose-name',
  delegateNameInput: '.delegate-name input',
  submitDelagateNameBtn: '.submit-delegate-name',
  successText: '.success-description',
  goToDashboardAfterDelegateReg: '.registration-success',
  confirmDelegateRegBtn: '.confirm-delegate-registration',
  spinner: '.spinner',
  transactionReference: '.transaction-reference',
  transactionAmount: '.transactionAmount span',
  transactionAmountPlaceholder: '.transactionAmount',
  delegateDuplicateNameError: '.error-name-duplicate',
  headerBalance: '.balance span',
  nextBtn: '.next',
  txHeader: '.tx-header',
  txSenderAddress: '.sender-address',
  txRecipientAddress: '.receiver-address',
  txDatePlaceholder: '.tx-date',
  txDate: '.tx-date .date',
  txTime: '.tx-time .time',
  txAddedVotes: '.tx-added-votes .voter-address',
  txRemovedVotes: '.tx-removed-votes .voter-address',
  txAmount: '.tx-amount .transactionAmount',
  txFee: '.tx-fee span',
  txConfirmations: '.tx-confirmation',
  txId: '.tx-id .copy-title',
  txReference: '.tx-reference',
  delegateResults: '.delegates-result',
  transactionResults: '.transactions-result',
  recentSearches: '.addresses-result',
  idResults: '.addresses-result',
  closeSearchBtn: '.autosuggest-btn-close',
  searchNoResultMessage: '.no-result-message',
  accountBalance: '.balance span',
  transactionId: '.transaction-id .copy-title',
  logoutBtn: '.logout',
  userAvatar: '.user-avatar',
  emptyResultsMessage: '.empty-message',
  revealCheckbox: '.reveal-checkbox',
  passphraseTextarea: 'textarea.passphrase',
  itsSafeBtn: '.yes-its-safe-button',
  passphraseWordHolder: '.passphrase-holder label',
  getToDashboardBtn: '.get-to-your-dashboard-button',
  confirmCheckbox: '.confirm-checkbox',
  sidebarMenuSettingsBtn: '#settings',
  registerSecondPassphraseBtn: '.register-second-passphrase',
  secondPassphraseIsRegisteredLabel: '.second-passphrase-registered',
  currencyUSDBtn: '.currency-USD',
  currencyEURBtn: '.currency-EUR',
  autoLogoutTrigger: '.autoLog',
  switchNetworksTrigger: '.showNetwork',
  delegateFeaturesTrigger: '.advancedMode',
  messageInput: 'textarea',
  resulteBtn: '.result',
  sidebarMenuWalletBtn: '#transactions',
  referenceInput: '.reference input',
  referenceTextarea: '.reference textarea',
  referenceConfirmLabel: '.reference',
  convertorElement: '.convertor',
  convertedPrice: '.converted-price',
  secondPassphraseInput: '.second-passphrase input',
  secondPassphraseNextBtn: '.second-passphrase-next',
  resultMessage: '.result-box-message',
  okayBtn: '.okay-button',
  initializeBanner: '.initialize-banner',
  accountInitializationMsg: '.account-initialization',
  accountInitializationBtn: '.account-init-button',
  sidebarMenuDelegatesBtn: '#delegates',
  becomeDelegateLink: '.register-delegate',
  votesConfirmSidebar: '.confirm-votes',
  confirmBtn: '.confirm',
  delegateRow: '.delegate-row',
  delegateList: '.delegate-list',
  delegateRank: '.delegate-rank',
  delegateName: '.delegate-name',
  delegateId: '.delegate-id',
  delegateProductivity: '.delegate-productivity',
  searchDelegateInput: 'input.search',
  voteCheckbox: '.vote-checkbox',
  voteResultHeader: '.result-box-header',
  clearSearchBtn: '.clean-icon',
  votesPreselection: '.upvotes-message',
  unvotesPreselection: '.unvotes-message',
  alreadyVotedPreselection: '.alreadyVoted-message',
  addFollowerAccountButton: '.add-account-button',
  followedAccountItem: '.followed-account',
  titleInput: '.account-title input',
  followedAccountBalance: '.followed-account-balance span',
  sidebarMenuHelpBtn: '#help',
  startOnBoardingLink: '.help-onboarding',
  onBoardingTooltipPrimaryBtn: '.joyride-tooltip__button--primary',
  onBoardingSkipBtn: '.joyride-tooltip__button--skip',
  onBoardingHeader: '.joyride-tooltip__header',
  createLiskIdBtn: '.new-account-button',
  passphraseInput: '.passphrase input',
  loginBtn: '.login-button',
  networkDropdown: '.network',
  networkOptions: '.network .options > *',
  addressInput: '.address input',
  headerAddress: '.copy-title',
  nodeAddress: '.peer',
  networkStatus: '.network-status',
  errorPopup: '.toast',
  newsFeed: '.newsFeed-box',
  newsBlock: '.news-item',
  editNewsFeed: '.settingsButton',
  settingsNewsFeedBlock: '.settingsNewsFeed',
  getPassphraseButton: '.get-passphrase-button',
  editFollowingAccounts: '.edit-accounts',
  removeFollowingAccount: '.remove-account',
  followedAccount: '.followed-account',
  followedAccountTitle: '.account-title input',
  takeTutorial: '.help-onboarding',
  tutorialTooltip: '.joyride-tooltip__header',
  priceChart: '.chartjs-size-monitor',
  transactionRequestButton: '.tx-receive-bt',
  transactionSendButton: '.tx-send-bt',
  bookmarks: '.bookmarks',
  addToBookmarks: '.add-to-bookmarks',
  confirmAddToBookmarks: '.follow-account-button',
  delegateStatsUptime: '.productivity',
  delegateStatsRank: '.rank',
  delegateStatsApproval: '.approval',
  delegateStatsWeight: '.vote',
  delegateStatsForged: '.forged',
  delegateStatsBlocks: '.blocks',
  followAccountBtn: '.follow-account',
  bookmarkedAccountTitle: '.transactions .account-title',
  showMoreButton: '.show-more-button',
  chooseAvatar: '.choose-avatar span',
  copyPassphrase: '.option-value',
  passphraseWordConfirm: '.passphrase-holder .word-option',
  passphraseConfirmButton: '.passphrase-is-correct-button',
  exploreAsGuestBtn: '.explore-as-guest-button',
  walletOnboarding: '.wallet-onboarding',
  walletOnboardingClose: '.wallet-onboarding .banner-close',
  requestDropdown: '.request-dropdown',
};

export default ss;
