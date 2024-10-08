let val = 0;
let idName = 1;
let opacity = 1;
let darken = true;

//CREATING HTML ELEMENTS

const btnCreate = document.createElement("button");
btnCreate.setAttribute("id","btnCreate");
btnCreate.textContent="CHANGE SIZE OF GRID";

const btnErase = document.createElement("button");
btnErase.setAttribute("id","btnErase");
btnErase.textContent="ERASE GRID";

const blackColor = document.createElement("button");
blackColor.setAttribute("id","btnBlackColor");
blackColor.textContent ="BLACK COLOR";

const randomColor = document.createElement("button");
randomColor.setAttribute("id","btnRandomColor");
randomColor.textContent ="RANDOM COLOR";

const cont = document.getElementById("container");
const option = document.getElementById("option");
option.appendChild(btnCreate);
option.appendChild(btnErase);
option.appendChild(blackColor);
option.appendChild(randomColor);

//FUNCTION THAT CREATES THE GRID

function addDiv(numDivs){

    let divSize = `${720/ numDivs}px`;
    console.log(divSize);
    for(let i=0; i<numDivs; i++){
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        cont.appendChild(row);
        for (let j=0; j<numDivs; j++){
            const appendDiv = document.createElement("div");
            appendDiv.setAttribute("class", "newDiv");
            appendDiv.setAttribute("id", "div" + idName);
            appendDiv.style.width = divSize;
            appendDiv.style.height = divSize;
            row.appendChild(appendDiv);
            idName++;
        }

    }
}

addDiv(16);

const newDivs = document.querySelectorAll('.newDiv');

[...newDivs].forEach(newDiv => {
  newDiv.addEventListener('mouseover', () => {
        newDiv.classList.add('permahover');
        // let color = '#'+Math.floor(Math.random()*16777215).toString(16);
        // newDiv.style['background-color'] = color;
        newDiv.style['opacity'] = opacity;
        if(darken){
            opacity = opacity - .1;
            if(opacity<=0){
                darken = false;
            }
        } else {
            opacity = opacity + .1;
            if(opacity>=1){
                darken = true;
            }
        }
  });
})

btnCreate.addEventListener("click", getNumberDivs);

function getNumberDivs(){

    let userChoice;

    userChoice = prompt("Enter the number of cells per side, maximum is 100.");
    
    if (userChoice === null || userChoice === "" || userChoice === undefined || userChoice > 100){
            alert("You must enter a valid option into the prompt box!\nCannot be empty and must be maximum 100");
            return getNumberDivs();
    } else {
            cont.replaceChildren();
            idName = 1;
            addDiv(userChoice);
            const newDivs = document.querySelectorAll('.newDiv');

            [...newDivs].forEach(newDiv => {
            newDiv.addEventListener('mouseover', () => {
                    newDiv.classList.add('permahover');
                    newDiv.style['background-color'] = '#000000';
                    newDiv.style['opacity'] = opacity;
                    if(darken){
                        opacity = opacity - .1;
                        if(opacity<=0){
                            darken = false;
                        }
                    } else {
                        opacity = opacity + .1;
                        if(opacity>=1){
                            darken = true;
                        }
                    }
            });
            })
            // addDiv(userChoice);    
    }

}

btnErase.addEventListener("click", eraseGrid);

function eraseGrid(){

    const newDivs = document.querySelectorAll('.newDiv');

    [...newDivs].forEach(newDiv => {
        newDiv.style['background-color'] = '#faca70';
        newDiv.style['opacity'] = 1;
    });
}

blackColor.addEventListener("click", getBlackColor);

function getBlackColor(){

    const newDivs = document.querySelectorAll('.newDiv');

    [...newDivs].forEach(newDiv => {
        newDiv.addEventListener('mouseover', () => {
        newDiv.style['background-color'] = '#000000';
    });
    })

}

randomColor.addEventListener("click", getRandomColor);

function getRandomColor(){

    const newDivs = document.querySelectorAll('.newDiv');

    [...newDivs].forEach(newDiv => {
        newDiv.addEventListener('mouseover', () => {
        newDiv.classList.remove('permahover');
        let color = '#'+Math.floor(Math.random()*16777215).toString(16);
        newDiv.style['background-color'] = color;
    });
    })

}