import React from 'react'

const Box = ({ versionContent = [], step }) => {
    
    const finalVersion = versionContent.sort(function (a, b) {
        return new Date(b.effectiveDate) - new Date(a.effectiveDate);
      })[0];

      return (
        <div class="box box-xs">
          <h1 class="box-h1 box-heading">{step}</h1>
          <hr class="hoz-box" />
          <h6 class="box-h6 box-heading">{finalVersion.title}</h6>
          <p>{finalVersion.body}</p>
        </div>
      );
  }
  
  export default Box;

