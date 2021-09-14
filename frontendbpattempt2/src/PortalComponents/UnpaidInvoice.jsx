import React from 'react'
import {Table} from 'react-bootstrap'
import "./css/style_dash_s2.css"
import "./css/style_topbilled.css"

function UnpaidInvoice() {
    return (
        <div>
            <div className="mycard">
            <div class="header">
                        <i class="arrow fas fa-chevron-left"></i>
                        <h3 class="title">Unpaid Invoices</h3>
                        <div></div>
                    </div>

                        <div>
                            
                                <Table className="mytable">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Username</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Larry </td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            
                        </div>

            </div>
        </div>
    )
}

export default UnpaidInvoice
