import styled from 'styled-components';

import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = option =>
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, val) => acc + val);

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    const haveAnyFeedback = this.countTotalFeedback();

    return (
      <AppStyled>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClick}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {!haveAnyFeedback ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </AppStyled>
    );
  }
}

const AppStyled = styled.div`
  height: 100vh;
  display: block;
  text-align: center;
  font-size: 30px;
  color: #010101;
`;

// AppStyled.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       type: PropTypes.string.isRequired,
//       amount: PropTypes.string.isRequired,
//       currency: PropTypes.string.isRequired,
//     })
//   ),
// };
