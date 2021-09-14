import React from 'react'

import "./css/style_dash_s2.css"
import TopBilled from './TopBilled'
import UnpaidInvoice from './UnpaidInvoice'
function Dashboard() {
    return (
        <div>
            

            
            <div className="d-flex justify-content-around">

                    <div className="p-2  bd-highlight col-example div-custom">
                        
                    <TopBilled/>
                    </div>

                    <div className="p-2  bd-highlight col-example " >

                    <UnpaidInvoice/>

                    </div>

</div>
            </div>
        
    )
}

export default Dashboard
