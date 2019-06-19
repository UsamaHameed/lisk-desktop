import React from 'react';
import PropTypes from 'prop-types';
import Animation from '../../toolbox/animation';

class DelegateAnimation extends React.Component {
  constructor() {
    super();

    this.state = {
      loop: false,
    };

    this.onComplete = this.onComplete.bind(this);
  }

  componentDidUpdate() {
    const { status } = this.props;
    const { loop } = this.state;
    if (status !== 'pending' && loop) {
      this.setState({ loop: false });
    }
  }

  getAnimationName() {
    const { status } = this.props;
    const { loop } = this.state;
    switch (status) {
      case 'pending':
        return loop ? 'delegatePending' : 'delegateCreated';
      case 'ok':
        return 'delegateConfirmed';
      case 'fail':
        return 'delegateDeclined';
      default:
        return 'delegatePending';
    }
  }

  onComplete() {
    const { status } = this.props;
    if (status === 'pending') {
      this.setState({
        loop: true,
      });
    }
  }

  render() {
    const { className, onLoopComplete } = this.props;
    const { loop } = this.state;
    const animation = this.getAnimationName();
    return (
      <Animation
        loop={loop}
        className={className}
        name={animation}
        events={{
          complete: this.onComplete,
          loopComplete: onLoopComplete,
        }}
      />
    );
  }
}

DelegateAnimation.propTypes = {
  className: PropTypes.string,
  status: PropTypes.oneOf(['ok', 'pending', 'fail']),
  onLoopComplete: PropTypes.func,
};

DelegateAnimation.defaultProps = {
  className: '',
  status: 'pending',
  onLoopComplete: () => null,
};

export default DelegateAnimation;
