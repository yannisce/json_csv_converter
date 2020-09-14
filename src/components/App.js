import React, { Component,Fragment } from 'react';
import { GlobalStyle } from './GlobalStyle';
import FileInput from './FileInput';
import { ContentWrapper } from './StyledContentWrapper';
import Processing from './Processing';

class App extends Component {
  state = { conversion: null, file: null, name: '' };

  startConversion = state => {
    return state.file ? this.setState({ conversion: state.type, file: state.file, name: state.name }) : '';
  }

  reset = () => {
    return this.setState({ conversion: null, file: null, name: '' });
  }

  renderContent() {
    switch(this.state.conversion) {
      case 'vnd.ms-excel':
      case 'csv':

          return <Processing reset={this.reset} file={this.state.file} type='csv' name={this.state.name} />;

      case 'json':

          return <Processing reset={this.reset} file={this.state.file} type='json' name={this.state.name} />;
          
      default:
          return <FileInput startConversion={this.startConversion} />;
    }
  }

  render() {
      return (
        <Fragment>
          <GlobalStyle />
          <ContentWrapper>
            {this.renderContent()}
          </ContentWrapper>
        </Fragment>
      );
  }
}

export default App;