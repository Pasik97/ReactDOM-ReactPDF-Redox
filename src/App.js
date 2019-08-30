import React from 'react';
import ReactDOMCV from './ReactDOM/ReactDomCV';
import ReactPdfCV from './ReactPDF/ReactPdfCV';

class App extends React.Component {
   state = {
      isDomCV: true,
   }

   handleChange = () => {
      this.setState(prevState =>
         ({
            isDomCV: !prevState.isDomCV,
         })
      )
   }

   render() {
      return (
         <>
            <button onClick={this.handleChange}>zmien</button>
            <div>
               {this.state.isDomCV ? <ReactDOMCV /> : <ReactPdfCV/>}
            </div>
         </>
      )
   }
}

export default App;
