function activate(a) {
  document.getElementById('in').innerHTML+=a
}

function calc() {
  var res = eval(document.getElementById('in').innerHTML)
  if(!res){
    document.getElementById('res').innerHTML="Operation has incorrect format."
  }
  if(res%1==0){
      document.getElementById('res').innerHTML=res
  }
  else{
      document.getElementById('res').innerHTML=res.toFixed(3)
  }
}

const clr=document.getElementById('C')
clr.addEventListener("click",function(){
    document.getElementById('in').innerHTML= ""
    document.getElementById('res').innerHTML= ""
})
