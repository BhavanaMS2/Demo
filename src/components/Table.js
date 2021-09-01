import React from 'react'



function Table_View() {
    var tableStyle={
        "border":"3px solid black",
        "alignSelf":"center"
    }
    return (
        <div className="container">
            <table style={tableStyle}>
               
               <tr style={tableStyle}>
                   <th>Tenant Name</th>&nbsp;&nbsp;&nbsp;&nbsp;
                   <th>Billing Amount</th>&nbsp;&nbsp;&nbsp;&nbsp;
                   <th>Billing Date</th>&nbsp;&nbsp;&nbsp;&nbsp;
              </tr>
            
             
               <tr style={tableStyle}>
                   <td>ABCD</td>
                   <td></td>
                   <td></td>
              </tr>
              <tr style={tableStyle}>
                   <td>XYZ</td>
                   <td></td>
                   <td></td>
              </tr>
              <tr style={tableStyle}>
                   <td>PQRS</td>
                   <td></td>
                   <td></td>
              </tr>
            
       </table>

            
        </div>
    )
}

export default Table_View
