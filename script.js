function loginButton(element) {
    console.log(element)
    if (element.value === "Login"){
        element.value = "Logout"
    }
    else{
        element.value = "Login"
}
} 
function counter(e) {
    var x = parseInt(e.value)
    x += 1
    if (x == 1) {
        e.value = x + " Like"
    } else {
        e.value = x + " Likes"
    }
    return e    
}
function subDef() {
    console.log("spawning textarea")
    submitButton.style.display ='block'
    addbutton.style.display ='none'
    newSubmission.style.display = 'inherit'
    newSubmission.placeholder="Submit your definition here!"
    console.log("textarea spawned")
}
function getNewDef() {
    console.log("getnewdef start")
    var x = "init"
    var y = 0
    y = x.length
    console.log(y + " <--if it reads 4 y is initiated")
    x = newSubmission.value
    y = x.length
    console.log(y)
    if(y > 0){
        console.log("creating new definition")
        left.insertAdjacentHTML('afterbegin',
    `<div class="definitionBox">
        <div class="wordstats">
            <h1>ninja</h1>
            <p><em>noun</em></p>
            <p>Plural:<em>ninjas</em></p>
            <input type="button" onclick="counter(this)" value="0 Likes" id="likebutton">
        </div>
        <p class="definition">` + x + `</p>
    </div>`)
        submitButton.style.display = 'none'
        addbutton.style.display = 'inherit'
        newSubmission.style.display = 'none'
        newSubmission.value=""
    }else{
        console.log("alerting short submission")
        alert("Please don't submit an empty form!")
        subDef(addbutton)
    }
}

//----------TODO
//-get text area to adjust size automatically
//
//----------bugs
//- randomly resets to init at first interactions, has to do with
//form action on line 45
//
//
// function subDef(e) {
//     e.type = "text"
//     e.placeholder="  add your definition here..."
//     e.value = ""
//     e.className = "subBox"
//     var x = document.getElementById("submitButton")
//     x.style.display ='block'
// }