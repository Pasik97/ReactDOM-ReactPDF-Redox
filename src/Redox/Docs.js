import React from 'react'
import { render, Document, Text, Header, Image } from 'redocx'

class App extends React.Component {
   render() {
      return (
         <Document>
               <Image src='./src/assets/background.png' style={{width: '200', height: '200', position: 'absolute'}} />
               <Text>HelloWorld</Text>
         </Document>
      )
   }
}

render(<App />, `${__dirname}/redoxCV.docx`)