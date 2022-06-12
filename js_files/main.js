// swap function util for sorting algorithms takes input of 2 DOM elements with .style.height feature
function swap(el1, el2) {
    console.log('In swap()');
    
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
    let temp1=el1.style.marginTop;
    el1.style.marginTop=el2.style.marginTop;
    el2.style.marginTop=temp1;
    
}



// Used in async function so that we can so animations of sorting, takes input time in ms (1000 = 1s)
function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

// Selecting size slider from DOM
let arraySize = document.querySelector('#a_size');

// Event listener to update the bars on the UI
arraySize.addEventListener('change', function(){
    console.log(arraySize.value, typeof(arraySize.value));
    createNewArray(arraySize.value);
});

// Default input for waitforme function (260ms)
let delay = 260;

// Selecting speed slider from DOM
let delayElement = document.querySelector('#a_speed');

// Event listener to update delay time 
delayElement.addEventListener('input', function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 320 - parseInt(delayElement.value);
});

// Creating array to store randomly generated numbers
let array = [];

// Call to display bars right when you visit the site
createNewArray();

// To create new array input size of array
function createNewArray(noOfBars = 60) {
    // calling helper function to delete old bars from dom
    deleteChild();

    // creating an array of random numbers 
    array = [];
    for (let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 150) + 1);
    }
    console.log(array);

    // select the div #bars element
    const bars = document.querySelector("#bars");

    // create multiple element div using loop and adding class 'bar col'
    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;
        bar.style.marginTop=`${350-array[i]*2-1}px`
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

// Helper function to delete all the previous bars so that new can be added
function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

var start_st=document.querySelector('#start')
function disableSize(){
    document.querySelector("#a_size").disabled = true;
}

// Enables size slider used in conjunction with disable
function enableSize(){
    document.querySelector("#a_size").disabled = false;
}
function disableReset(){
    document.querySelector("#reset").disabled = true;
}

// Enables size slider used in conjunction with disable
function enableReset(){
    document.querySelector("#reset").disabled = false;
}

function disableStart(){
    document.querySelector("#start").disabled = true;
}

// Enables size slider used in conjunction with disable
function enableStart(){
    document.querySelector("#start").disabled = false;
}
start_st.addEventListener('click',async function(){
    let st_name=document.getElementById('algos');
    let alog=st_name.value;
    st_name.disabled=true;
    disableSize();
    disableReset();
    disableStart();
    await runalgo(alog);
    st_name.disabled=false;
    enableSize();
    enableReset()
    enableStart()
    
    
   
})
async function runalgo(alog)
{
    

    
    
    switch(alog)
    {
        case "Bubble":await bubble();
        console.log('reach');
       
                   
                    break;
        case "Selection":await selection();
                        break;
        case "Insertion":await insertion();
                        break;
        case "Merge":
            let ele = document.querySelectorAll('.bar');
            let l = 0;
            let r = ele.length - 1;
            await mergeSort(ele,l,r);
            break;
        case "Quick":
            let ele1 = document.querySelectorAll('.bar');
            let l1 = 0;
            let r1 = ele1.length - 1;
            await  quickSort(ele1,l1,r1);
            break;
    }
    
}


let restart_bt=document.querySelector('#reset');

restart_bt.addEventListener('click', function(){
    console.log(arraySize.value, typeof(arraySize.value));
    createNewArray(arraySize.value);
});
