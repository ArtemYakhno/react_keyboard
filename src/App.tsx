import React from 'react';

type State = {
  key: string;
};

export class App extends React.Component {
  state: Readonly<State> = {
    key: '',
  };

  changeKeyUp = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.changeKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.changeKeyUp);
  }

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {key ? `The last pressed key is [${key}]` : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
