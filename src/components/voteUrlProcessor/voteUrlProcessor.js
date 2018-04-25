/* eslint-disable */
import React from 'react';
import { PrimaryButton } from './../toolbox/buttons/button';
import Box from '../box';
import { parseSearchParams } from '../../utils/searchParams';
import { FontIcon } from '../fontIcon';
import styles from './voteUrlProcessor.css';

export default class VoteUrlProcessor extends React.Component {
  componentDidMount() {
    this.props.clearVoteLookupStatus();
    const params = parseSearchParams(this.props.history.location.search);
    if (params.votes || params.unvotes) {
      const upvotes = params.votes ? params.votes.split(',') : [];
      const unvotes = params.unvotes ? params.unvotes.split(',') : [];
      this.props.settingsUpdated({ advancedMode: true })
      this.props.urlVotesFound({
        activePeer: this.props.activePeer,
        upvotes,
        unvotes,
        address: this.props.account.address,
      });
    }
  }

  getProcessedCount() {
    return this.props.urlVoteCount - this.props.pending.length;
  }

  render() {
    const errorMessages = {
      notFound: this.props.t('Check spelling – name does not exist on mainnet'),
      alreadyVoted: this.props.t('Nothing to change – already voted/unvoted'),
    };

    const successMessages = {
      upvotes: `${this.props.upvotes.length} delegate(s) selected to vote`,
      unvotes: `${this.props.unvotes.length} delegate(s) selected to unvote`,
    };

    // const successMessages = {
    //   upvotes: this.props.t('{{count}} delegates selected to vote',
    //     { count: this.props.upvotes.length }),
    //   unvotes: this.props.t('{{count}} delegates selected to unvote',
    //     { count: this.props.unvotes.length }),
    // };

    return this.props.show ?
      <Box>
        <section className={styles.wrapper}>
        <header>
            <h2>Your Pre-Selection</h2>
        </header>
        <div>
          <span>{Object.keys(errorMessages).map((list, key) => (
            this.props[list].length ? (
              <div key={key} className={`${styles.block} ${list}-message`}>
                <div className={`${styles.title}`}>{errorMessages[list]}</div>
                {this.props[list].join(', ')}
              </div>
            ) : null
          ))}
          {Object.keys(successMessages).map((list, key) => {
            return this.props[list].length ? (
              <div key={key} className={styles.block}>
                <div className={`${styles.title}`}>{successMessages[list]}</div>
                <div className={`${list}-message`}>{this.props[list].join(', ')}</div>
              </div>
            ) : null }
          )}</span>
        </div>
        <footer>
          <PrimaryButton className={styles.button} label={this.props.t('Ok')} onClick={this.props.closeInfo}/>
          <div className={`${styles.close}`} onClick={() => {
            this.props.clearVoteLookupStatus();
            this.props.clearVotes();
            this.props.closeInfo();
          }}>
              Close <FontIcon value='close' />
          </div>
        </footer>
        </section>
      </Box> : null;
  }
}
