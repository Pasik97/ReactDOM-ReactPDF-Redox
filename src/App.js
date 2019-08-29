import React from 'react';
import ReactPdfCV from './ReactPDF/App';

class App extends React.Component {
   state = {
      to: true,
   }

   handleChange = () => {
      this.setState(prevState =>
         ({
            to: !prevState.to,
         })
      )
   }

   render() {
      return (
         <>
            <button onClick={this.handleChange}>zmien</button>
            <div>
               {this.state.to ? <div>CV w ReactDOM</div> : <ReactPdfCV />}
            </div>
         </>
      )
   }
}

export default App;
