import React from 'react';
import "./FullPage.css";
const FullPage = () => {
  return (
    <div className='app__fullpage'>
     <div className="app__fullpage-para1">
        <div className="app__fullpage-para1-head">
          <h3>
          About the Remote Classes
          </h3>
        </div>
          <p>
          You will be able to participate in live class meetings via Zoom videoconference. To attend classes, you'll need a phone, tablet or computer and access to the internet. You can participate in the class from wherever you'd like, whether on your living room couch or in your office. Before your class meets, you'll receive an email from The Proprietary with more information about Zoom and your remote class. If you have any questions about remote learning, please don't hesitate to reach out to us at      <span >hello@wisdmlabs.com. </span>
          </p>
          <div className="app__fullpage-para1-links">
            <span>Learn About Our Classes {'>'}</span>
            <span>Questions? See FAQ {'>'}</span>
          </div>
     </div>
     <hr />
     <div className="app__fullpage-para2">
        <div className="app__fullpage-para1-head">
          <h3>
          Cancelation Policy
          </h3>
        </div>
        <p>
        In the event of an emergency, we may consider a refund or credit, whether partial or full. We review these requests on a case-by-case basis, and we ask that you notify us as near as possible to the start date for the class. Please read our policy details before requesting a refund.
        </p>
        <div className="app__fullpage-para2-contents">
          <div className="app__fullpage-para2-contents1">
          <h2>10 days or more </h2>
           <p> before the start date for a class, the registrant will receive a credit minus a 10% fee OR a refund minus a 20% fee.</p> 
          </div>
          <div className="app__fullpage-para2-contents2">
          <h2> 3-9 days  </h2>
           <p> before the start date for a class, the registrant will receive a credit minus a 20% fee OR a refund minus a 30% fee.</p> 
          </div>
          <div className="app__fullpage-para2-contents3">
          
          <h2>2 days or less  </h2>
           <p> before the start date for a class, the registrant will not receive a credit or a refund..</p> 
          </div>
          <div className="app__fullpage-para2-contents4">
        
          <h2>  On the day or after </h2>
           <p> The Proprietary <b>cannot offer refunds, credits, or makeup sessions</b>  for classes a student might miss.</p> 
          </div>
        </div>
     </div>
    </div>
  )
}

export default FullPage
