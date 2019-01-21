import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import AccountVisual from '../accountVisual';
import CopyToClipboard from '../copyToClipboard';
import LiskAmount from '../liskAmount';
import DropdownV2 from '../toolbox/dropdownV2/dropdownV2';
import { dropdownLinks } from './constants';
=======
import AccountVisual from '../accountVisual';
import CopyToClipboard from '../copyToClipboard';
import LiskAmount from '../liskAmount';
>>>>>>> :nail_care: Update css file for menuItems, searchBar and userAccount
import styles from './userAccount.css';

const UserAccount = props => (
  <div className={`${styles.wrapper} user-account`}>
    <div className={styles.information}>
      <CopyToClipboard
        value={props.account.address}
        className={`${styles.copyAddress} account-information-address`}
        copyClassName={styles.copy}
      />
      <div className={`${styles.balance} balance`}>
        <LiskAmount val={props.account.balance}/>
        <span>{props.t(' LSK')}</span>
      </div>
    </div>
<<<<<<< HEAD
    <div
      className={styles.avatar}
      onClick={() => props.onDropdownToggle()}
    >
      <span
        className={styles.onAvatar}
        ref={node => props.setDropdownRef(node)}
      >
        <AccountVisual
          address={props.account.address || ''}
          size={40}
        />
      </span>

      <DropdownV2 showDropdown={props.isDropdownEnable}>
        <Link
          id={dropdownLinks.settings.id}
          to={dropdownLinks.settings.path}
          className={styles.dropdownOption}
        >
          <img src={dropdownLinks.settings.icon} className={styles.defaultIcon} />
          <img src={dropdownLinks.settings.icon_active} className={styles.activeIcon} />
          <span>{props.t(dropdownLinks.settings.label)}</span>
        </Link>

        <span
          className={`${styles.dropdownOption}`}
          onClick={() => props.onLogout()}
          >
          <img src={dropdownLinks.logout.icon} className={styles.defaultIcon}/>
          <img src={dropdownLinks.logout.icon_active} className={styles.activeIcon}/>
          <span>{props.t(dropdownLinks.logout.label)}</span>
        </span>
      </DropdownV2>
    </div>
  </div>
);


=======
    <AccountVisual
      address={'123L'}
      size={69} sizeS={40}
    />
  </div>
);

>>>>>>> :nail_care: Update css file for menuItems, searchBar and userAccount
export default UserAccount;
