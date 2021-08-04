const num= Math.floor(Math.random()*6);
console.log(num);

function GetCssSheet(num) {
  
  if (num === 0) 
  {
    document.getElementById('css_sheet').setAttribute('href', `./style/${num}/${num}.css`);
  }
  if (num === 1) 
  {
    document.getElementById('css_sheet').setAttribute('href', `./style/${num}/${num}.css`);
  }
  if (num === 2) 
  {
    document.getElementById('css_sheet').setAttribute('href', `./style/${num}/${num}.css`);
  }
  if (num === 3) 
  {
    document.getElementById('css_sheet').setAttribute('href', `./style/${num}/${num}.css`);
  }
  if (num === 4) 
  {
    document.getElementById('css_sheet').setAttribute('href', `./style/${num}/${num}.css`);
  }
  if (num === 5) 
  {
    document.getElementById('css_sheet').setAttribute('href', `./style/${num}/${num}.css`);
  }
    
  
  
   
  

}
GetCssSheet(num);