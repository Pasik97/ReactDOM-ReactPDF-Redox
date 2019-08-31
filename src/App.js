import React from 'react';
import styled from 'styled-components';
import ReactDOMCV from './ReactDOM/ReactDomCV';
import ReactPdfCV from './ReactPDF/ReactPdfCV';

const AppContainer = styled.div`
   position: relative;
   margin-top: -40px;
   height: 100vh;
`;

const CVContainer = styled.div`
   display: flex;
   justify-content: center;
   background: #f5f5f5;
   height: 100%;
`;

const Button = styled.button`
   position: sticky;
   width: 120px;
   height: 40px;
   top: 50px;
   margin-left: 20px;
   background: none;
   font-family: 'Montserrat';
   color: #0fb7f2;
   border: none;

   &:hover {
      cursor: pointer;
      color: #0da8de
   }

   &:active {
      color: #0a90bf
   }

   &:focus {
      outline: none;
   }
`;

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
         <AppContainer>
            <Button onClick={this.handleChange}>Zmień Render</Button>
            <CVContainer>
               {this.state.isDomCV ? <ReactPdfCV/>:<ReactDOMCV /> }
            </CVContainer>
         </AppContainer>
      )
   }
}

export default App;
