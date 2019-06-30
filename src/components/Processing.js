import React, { Component,Fragment } from 'react';
import { StyledProcessing } from './StyledProcessing';
import DownloadHandler from './DownloadHandler';
import ResetButton from './ResetButton';
import CSVParser from '../parsers/CSVParser';
import JSONParser from '../parsers/JSONParser';

class Processing extends Component {
  state = { download: null };

  updateDownload = file => this.setState({ download: file });

  componentDidMount() {
    switch (this.props.type) {
      case 'csv':
          const csvParser = new CSVParser(this.props.file, this.updateDownload);
          csvParser.parse();
          break;
      case 'json':
          const jsonParser = new JSONParser(this.props.file, this.updateDownload);
          jsonParser.parse();
          break;
      default:
        return;
    }
  }

  renderContent() {
    if (!this.state.download) {
     return <StyledProcessing><span aria-label="Gear Icon" role="img">⚙️</span>Processing {this.props.type.toUpperCase()}...</StyledProcessing>
    } 
    else if (this.state.download) {
      return (
        <Fragment>
          <p>Successfully Converted Data <span aria-label="Confetti Icon" role="img">🎊</span></p>
          <DownloadHandler file={this.state.download} type={this.props.type} fileName={this.props.name} />
          <ResetButton reset={this.props.reset} />
        </Fragment>
      )
    }
  }

  render() {
    return (
      <Fragment>
        {this.renderContent()}
      </Fragment>
    );
  }
}

export default Processing;