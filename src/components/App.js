import { Component } from "react";

import '../assets/css/App.css';
import Map from './Map';
import Chart from "./Chart";

class App extends Component {
  state = { isMounted: true };

  render() {
    const { isMounted = true, loadingPercentage = 0 } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-chart"><Chart /></div>
          <div className="App-main">
            <div className="App-main-section"><h1>Salk project</h1></div>
            <div className="App-main-section">
              <button onClick={() => this.setState(state => ({ isMounted: !state.isMounted }))}>
                {isMounted ? "Unmount" : "Mount"}
              </button>
              {isMounted && <Map onProgress={loadingPercentage => this.setState({ loadingPercentage })} />}
              {isMounted && loadingPercentage === 100 && <div>Scroll to zoom, drag to rotate</div>}
              {isMounted && loadingPercentage !== 100 && <div>Loading Model: {loadingPercentage}%</div>}
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
