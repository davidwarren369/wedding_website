const track = document.querySelector('.carousel__track');   // querySelector looks at the document and searches for 'carousel_track' & assigns it to the 'track' variable
const slides = Array.from(track.children);                  // variable to keep track of the individual slides, 
                                                            // store all slides (i.e. the children of the parent) in a single variable via an array. Instead of individual variables 

const nextButton = document.querySelector('.carousel__button--right');     // right button
const prevButton = document.querySelector('.carousel__button--left');      // left button 

const navDots = document.querySelector('.carousel__nav');       // access the dots for the back & forth action
const dots = Array.from(navDots.children);                      // access the dots when clicking on individually

const slideWidth = slides[0].getBoundingClientRect().width;     // getBoundingClientRect() returning info (width, height etc.) about the size of the object, i.e the 1st slide
                                                                // .width - specifing the width of the object i.e. first slide 



// arrange the slides next to each other                                               
const setSlidePosition = (slide, index) => {           // declaring a function called 'setSlidePosition with arguments 'slide' and 'index'
    slide.style.left = slideWidth * index + 'px';      // set the slide position, for each slide to arrange them next to each other specified width
}                                                      

slides.forEach(setSlidePosition)                   // 'forEach' array method executes the setSlidePosition fuction for array element arranging the slides next to each other 




// function for moving the slide on each button press
const moveToSlide = (track, currentSlide, targetSlide) => {                 // all 3 below need to be arguments, these will change inside each function ()
    track.style.transform = 'translateX(-' + targetSlide.style.left +')';   // move target slide (new slide) left along the x-axis
    currentSlide.classList.remove('current-slide');                         // when we move slide that slide will loose it's 'current-slide' class
    targetSlide.classList.add('current-slide');                             // new slide (target slide) will gain the 'current-slide' class
}


// function to update the nav dots to match to the image
const updateDots = (currentDot, targetDot) => {                 // taking the currentDot, targetDot arguments  
                                                                // and passing them into the code below
    currentDot.classList.remove('current-slide');               // move slide, that slide will loose it's 'current-slide' class
    targetDot.classList.add('current-slide');                   // new slide (target slide) will gain the 'current-slide' class
}


// function for hiding & showing the arrows
const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {

    if (targetIndex === 0) {                        // if true, we are on the 1st slide
        prevButton.classList.add('is-hidden');      // 
        nextButton.classList.remove('is-hidden');   // 
    
    } else if (targetIndex === slides.length -1) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');

    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }                                             

}



// click left, move slides to the left
prevButton.addEventListener('click', e => {                            // each click, evaluate the current slide and plug it into currentSlide in function call below
                                                                       // each click, evaluate the current slide and plug it into currentSlide in function call below
    const currentSlide = track.querySelector('.current-slide');        // need to figure out what is the current slide, querying 'track' is faster than querying entire document
    const prevSlide = currentSlide.previousElementSibling;             // prevSlide is the previous slide before the current slide
    const currentDot = navDots.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);  // jump into slides, 'findIndex' for each slide it will look for the slide
                                                                       // that is equal to the next slide. It will get the index num nad assign to variable 'nextSlide'

    moveToSlide(track, currentSlide, prevSlide);                       // the parameters in here are being passed as argument into 'moveToSlide' funtion above
    updateDots(currentDot, prevDot);                                   // when a button is clicked it finds current dot and the previous dot
                                                                       // come back up to the 'updateDots' function, pass the parameters as arguments 
    hideShowArrows(slides, prevButton, nextButton, prevIndex); 
});                                                                



// click right, move slides to the right
nextButton.addEventListener('click', e => {                            // each click, evaluate the current slide and plug it into currentSlide in function call below
                                                                       // each click, evaluate the nex slide and and plug it into currentSlide in function call below 
    const currentSlide = track.querySelector('.current-slide');        // querying 'track' is faster than querying entire document
    const nextSlide = currentSlide.nextElementSibling;                 // nextSlide is the next slide after the current slide
    const currentDot = navDots.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);  // jump into slides, 'findIndex' for each slide it will look for the slide
                                                                       // that is equal to the next slide. It will get the index num nad assign to variable 'nextSlide'

    moveToSlide(track, currentSlide, nextSlide);                       // the parameters in here are being passed as argument into 'moveToSlide' funtion above
    updateDots(currentDot, nextDot);                                   // when a button is clicked it finds current dot and the next dot
                                                                       // come back up to the 'updateDots' function, pass the parameters as arguments
    hideShowArrows(slides, prevButton, nextButton, nextIndex);    
});                                                               



// click the nav indicators , move to that slide 
navDots.addEventListener('click', e => {
   
    // what indicator was clicked on 
    const targetDot = e.target.closest('button');                      // setting only the buttons to the variable and not the na area inside the carousel_nav container

    if (!targetDot) return;                                            // if the 'click' is not a button, end the function. 

    const currentSlide = track.querySelector('.current-slide');        // need to know the current slide
    const currentDot = navDots.querySelector('.current-slide');        // need to the know the current dot
    const targetIndex = dots.findIndex(dot => dot === targetDot);      // 'findIndex' loops through every item in the array & return the first true expression
    const targetSlide = slides[targetIndex];                           //

    moveToSlide(track, currentSlide, targetSlide);              // when a button is clicked it finds the track, the current slide and the target slide
                                                                // come back up to the 'moveToSlide' function, pass the parameters as arguments
    updateDots(currentDot, targetDot);             // when a button is clicked it finds current dot and the target dot
                                                   // come back up to the 'updateDots' function, pass the parameters as arguments   
                                                   
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
})                                          
