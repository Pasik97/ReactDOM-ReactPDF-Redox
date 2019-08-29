import React from 'react'
import { render, Document, Text } from 'redocx'

class App extends React.Component {
   render() {
      return (
         <Document>
            <Text>Hello World</Text>
         </Document>
      )
   }
}

render(<App />, `${__dirname}/redoxCV.docx`)