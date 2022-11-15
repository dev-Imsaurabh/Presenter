function TimerDesign() {
  return `<p><span><lord-icon
    src="https://cdn.lordicon.com/mrjuyheh.json"
    trigger="loop"
    style="width:25px;height:25px" id="eye">
</lord-icon></span><br>JARVIS<p>
<h3>1</h3>
<p id="name">Name</p>`;
}





function setupLinks() {
  let head = document.querySelector("head");
  let css = document.createElement("link");
  let animScript = document.createElement("script");
  animScript.setAttribute("src", "https://cdn.lordicon.com/pzdvqjsp.js");

  css.setAttribute("rel", "stylesheet");
  css.setAttribute("href", "/Presenter/presenter.css");

  head.appendChild(css);
  head.appendChild(animScript)
}

function setupDesign() {
  let timerBody = document.createElement("div");
  timerBody.setAttribute("id", "timer");
  let body = document.querySelector("body");
  timerBody.innerHTML = TimerDesign();
  body.appendChild(timerBody);
}
 


class Presenter {
  constructor(personName) {
    this.personName=personName
  }

  initialize() {

    setupDesign();
    setupLinks();
    updateTimer()
    let pname = document.querySelector("#name");
    pname.innerText=this.personName

    
  }
  scrollPage(divId,time,Pname,color){
    scrollTimer(divId,time,Pname,color)
    
  }

  alertUser(msg,time){
    showAlert(msg,time)
  }

  clickit(divId,time,Pname,color){
    clickMe(divId,time,Pname,color)


  }
  changePage(time,pageName){
    change(time,pageName)

  }
  name(name,time){
    changName(name,time)
  }
  color(color,time){
    changeColor(color,time)
  }

 



}

function scrollTimer(divId,time,Pname,color){
    let name = document.querySelector("#name");
    let runningTimer = document.querySelector("#timer>h3");
    let i=0
    let id; 
    id = setInterval(() => {
        i++
        if(i==time){
          document.querySelector(`${divId}`).scrollIntoView({"behavior":"smooth","block":"center"})
          name.innerText=Pname
          runningTimer.style=color=color
          clearInterval(id)
        }

    }, 1000);
}


function showAlert(msg,time){

    let name = document.querySelector("#name");
    let runningTimer = document.querySelector("#timer>h3");
    let i=0
    let id; 
    id = setInterval(() => {
        i++
       if(i==time){
        alert(msg)
        clearInterval(id)
       }

    }, 1000);

}


function clickMe(divId,time,Pname,color){
    let name = document.querySelector("#name");
    let runningTimer = document.querySelector("#timer>h3");
    let i=0
    let id; 
    id = setInterval(() => {
        i++
        if(i==time){
          document.querySelector(`${divId}`).click()
          name.innerText=Pname
          runningTimer.style=color=color
          clearInterval(id)
        }

    }, 1000);

}

function change(time,pageName){
    let i=0
    let id; 
    id = setInterval(() => {
        i++
       if(i==time){
       window.location.href=pageName
        clearInterval(id)
       }

    }, 1000);


}


function updateTimer(){
    let name = document.querySelector("#name");
    let runningTimer = document.querySelector("#timer>h3");
        let i=0
    let id; 
    id = setInterval(() => {
        i++
      runningTimer.innerText=i
      
    }, 1000);
   
}

function changName(name,time){
    let cname = document.querySelector("#name");
    let runningTimer = document.querySelector("#timer>h3");
    let i=0
    let id; 
    id = setInterval(() => {
        i++

        if(i==time){
            cname.innerText=name

        }
        
    }, 1000);
       


}



function changeColor(color,time){
    let runningTimer = document.querySelector("#timer>h3");
    let i=0
    let id; 
    id = setInterval(() => {
        i++

        if(i==time){
            runningTimer.style.color=color

        }
        
    }, 1000);
       


}



export default Presenter
