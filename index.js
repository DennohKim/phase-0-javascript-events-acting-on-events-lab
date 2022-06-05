// Your code here

function moveDodgerLeft() {

    document.addEventListener('keydown', function(event){
        console.log(event)
        if(event.key === 'ArrowLeft'){     
            var left = dodger.style.left.replace("px", "");
            var newPosition = parseInt(left, 10);

            if (newPosition > 0) {
                dodger.style.left = `${newPosition - 10}px`}

                console.log(newPosition)
    
        } 
        
    })

}

moveDodgerLeft();


function moveDodgerRight() {

    document.addEventListener('keydown', function(event){
        console.log(event)
        if(event.key === 'ArrowRight'){     
            var left = dodger.style.left.replace("px", "");
            var newPosition = parseInt(left, 10);

            if (newPosition < 360) {
                dodger.style.left = `${newPosition + 10}px`}

                console.log(newPosition)
    
        } 
        
    })

}

moveDodgerRight();

// Your code here

// function moveDodgerLeft() {

//     document.addEventListener('keydown', function(event){
//         console.log(event)
//         if(event.key === 'ArrowLeft'){     
//             var left = dodger.style.left.replace("px", "");
//             left = parseInt(left, 10);

//             moveDodgerLeft();

//             var newPosition = dodger.style.left
//             newPosition = parseInt(newPosition)

//             if (newPosition > 0) {
//                 dodger.style.left = `${newPosition - 10}px`}

//                 console.log(newPosition)
    
//         } 
        
//     })

// }

// moveDodgerLeft();


// function moveDodgerRight() {

//     document.addEventListener('keydown', function(event){
//         console.log(event)
//         if(event.key === 'ArrowRight'){     
//             var left = dodger.style.left.replace("px", "");
//             left = parseInt(left, 10);

//             moveDodgerRight();

//             var newPosition = dodger.style.left
//             newPosition = parseInt(newPosition)

//             if (newPosition < 360) {
//                 dodger.style.left = `${newPosition + 10}px`}

//                 console.log(newPosition)
    
//         } 
        
//     })

// }

// moveDodgerRight();