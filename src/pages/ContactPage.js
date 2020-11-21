import React from 'react';

function ContactPage(props){
  return (
    <div class="containerCard" justify-content-between style={{backgroundColor: "lightblue"}}>
    <div class="row">
      <div class="col-6">
        
          <div className="border-top justify-content-between p-3">
            <p>Email:</p><a href=" mailto:stevenmogbo@yahoo.com"> Stevenmogbo@yahoo.com </a>
            <p>Github:</p> <a href="https://github.com/SBMogbo">SBMogbo </a>
          </div>
        
      </div>
    </div>
  </div>
  );
}

export default ContactPage