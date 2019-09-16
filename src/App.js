import React from 'react';
import styled from 'styled-components';
import ReactDOMCV from './DesignedCV/ReactDOM/ReactDomCV';
import ReactPdfCV from './DesignedCV/ReactPDF/ReactPdfCV';
import ReactDOMSimpleCV from './SimpleCV/ReactDOM/ReactDomSimpleCV';
import ReactPDFSimpleCV from './SimpleCV/ReactPDF/ReactPdfSimpleCV';

const AppContainer = styled.div`
   position: relative;
   margin-top: -40px;
   height: 100vh;
`;

const CVContainer = styled.div`
   display: flex;
   justify-content: center;
   background: #f5f5f5;
   min-height: 100%;
`;

const ButtonsContainer = styled.div`
   position: sticky;
   width: 120px;
   height: 40px;
   top: 50px;
   margin-left: 20px;
`;

const Button = styled.button`
   width: 100%;
   height: 40px;
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
      simpleCV: false,
   }

   handleChangeRender = () => {
      this.setState(prevState =>
         ({
            isDomCV: !prevState.isDomCV,
         })
      )
   }

   handleChangeCV = () => {
      this.setState(prevState =>
         ({
            simpleCV: !prevState.simpleCV,
         })
      )
   }

   render() {
      return (
         <AppContainer>
            <ButtonsContainer>
               <Button onClick={this.handleChangeRender}>Zmień Render</Button>
               <Button onClick={this.handleChangeCV}>Zmień CV</Button>
            </ButtonsContainer>
            <CVContainer>
               {this.state.simpleCV ? (this.state.isDomCV ? <ReactDOMSimpleCV /> : <ReactPDFSimpleCV />) : (this.state.isDomCV ? <ReactDOMCV /> : <ReactPdfCV/>)}
            </CVContainer>
         </AppContainer>
      )
   }
}

export default App;
