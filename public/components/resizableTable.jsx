import React, {Component} from 'react';

require('./resizableTable.css');

export default class ResizableTable extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(<table className='bsbs-resizable-table'>
                <thead>
                    <td>header1 <span className='bsbs-sperator'> </span></td>
                    <td>header2 <span className='bsbs-sperator'> </span></td>
                    <td>header3 <span className='bsbs-sperator'> </span></td>
                </thead>
                <tbody>
                    <tr> 
                        <td>data1 </td>
                        <td>data2 </td>
                        <td>data3 </td>
                    </tr>
                    <tr>
                        <td>data11 </td>
                        <td>data22 </td>
                        <td>data33 </td>
                     </tr>
                    <tr>
                       <td>data111 </td>
                       <td>data222 </td>
                       <td>data333 </td> 
                     </tr>
                </tbody>
               </table>)
    }

}