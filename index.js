//HEADER
const headerString = 'why do chameleons change colors??';
let headerStringList = [];

for (let i = 0; i < headerString.length-1; i++) {
    headerStringList.push(headerString[i]);
}

const searchBar = document.querySelector('.searchbar');
let searchBarString = '';
let searchStringPosition = 0;

let endInterval = setInterval(() => {
    
    if (searchStringPosition === headerStringList.length-1) {
    clearInterval(endInterval);
}
    
    searchBarString += headerStringList[searchStringPosition];

    searchBar.innerHTML = searchBarString;

    searchStringPosition++;
}, 100);



//DICTIONARY 

//Render HTML for dictionary buttons
import { dictionary } from '../vocab.js';
let dictionaryButtons = document.querySelector('.dictionary-buttons-js');
let dictionaryHTML = '';

dictionary.forEach((entry) => {
    if (entry.type === 'pigment') {
        dictionaryHTML += 
            `<button class="dictionary-button chromatophore-button-js pigment-type-js" data-entryWord="${entry.entryWord}" data-definition="${entry.definition}">
                ${entry.entryWord}
            </button>`;
    } else if (entry.type === 'crystals') {
        dictionaryHTML += 
            `<button class="dictionary-button chromatophore-button-js crystal-type-js" data-entryWord="${entry.entryWord}" data-definition="${entry.definition}">
                ${entry.entryWord}
            </button>`;
    }
});

dictionaryButtons.innerHTML = dictionaryHTML;

//Background change on click for dictionary buttons
const dictionaryBackground = document.querySelector('.dictionary-background');
const pigmentType = document.querySelectorAll('.pigment-type-js');
const crystalType = document.querySelectorAll('.crystal-type-js');
const dictionaryBackgroundType = dictionaryBackground.classList;

pigmentType.forEach((button) => {
    button.addEventListener('click', function() {
    if (!dictionaryBackgroundType.contains('pigment-type-js')) {
        dictionaryBackgroundType.add('pigment-type-js');
        dictionaryBackgroundType.remove('crystal-type-js');
        
        dictionaryBackground.innerHTML = 
            `<video mute autoplay loop>
                <source src="videos/chromatophore-pigments.mp4">
            </video>`;
    }
});
});

crystalType.forEach((button) => {
    button.addEventListener('click', function() {
        if (!dictionaryBackgroundType.contains('crystal-type-js')) {
            dictionaryBackgroundType.add('crystal-type-js');
            dictionaryBackgroundType.remove('pigment-type-js');
            
            dictionaryBackground.innerHTML = 
                `<video mute autoplay loop>
                    <source src="videos/iridophore-crystals.mp4">
                </video>`;
        }
    });
});

//Word+definition change on click for dictionary buttons
const chromatophoreButton = document.querySelectorAll('.chromatophore-button-js');
const entryWord = document.querySelector('.entry-word-container');
const definition = document.querySelector('.definition-js');

chromatophoreButton.forEach((button) => {
    button.addEventListener('click', function() {
        entryWord.innerHTML = 
            `<img class="entry-word"
              src="images/${button.getAttribute('data-entryWord')}-etymology.png"
            >`;
        definition.innerHTML = 
            `${button.getAttribute('data-definition')}`;
    })
});


//COLLAGE

//Import data from colors.js and other variables for rendering HTML
import { colors } from '/colors.js';
let rowOneHTML = '';
let rowTwoHTML = '';
let rowThreeHTML = '';
let colorsIndex = 0;

const rowOne = document.querySelector('.row1');
const rowTwo = document.querySelector('.row2');
const rowThree = document.querySelector('.row3');


//Rendering the HTML
colors.forEach((color) => {
    if (colorsIndex < 3) {
        rowOneHTML += 
            `<div class="cham-image-container cham-image-container-js" data-emotion="${color.emotion}" data-color="${color.color}" data-imgKey="${color.imgKey}">
                <img class="cham-image"
                    src="images/${color.imgKey}-cham.png"
                >
            </div>`;
    } else if (colorsIndex ===  4) {
        rowTwoHTML += 
            `<div class="cham-image-container cham-image-container-js" data-emotion="${color.emotion}" data-color="${color.color}" data-imgKey="${color.imgKey}">
                <img class="cham-image"
                    src="images/${color.imgKey}-cham.png"
                >
            </div>
            <div class="conclusion-text">
                    <h1>Color and Communication</h1>
                    <p>
                        Changes in muscle tension that alter the state of a chameleon's chromatophores occur in response to a wide range of stimuli that affect the chameleon's mood. A chameleons may appear bright red or yellow when they are angered or threatened, helping them communicate a readiness to fight or intimidate predators. Hormonal changes can also cause mood swings during a chameleon’s adolescence, affecting their colors.
                    </p>
                    <br>
                    <p>
                        Chameleons also alter their muscle tension actively, usually to help with thermoregulation. As cold-blooded creatures, chameleons are unable to generate heat on their own and depend on external sources of heat to maintain their temperature. When a chameleon is cooler than its optimal temperature, it can actively disperse pigment in the melanophores to turn black, allowing it to absorb heat. 
                    </p>
                </div>`;
    } else if (colorsIndex === 6) {
        rowTwoHTML += 
            `<div class="cham-image-container cham-image-container-js" data-emotion="${color.emotion}" data-color="${color.color}" data-imgKey="${color.imgKey}">
                <img class="cham-image"
                    src="images/${color.imgKey}-cham.png"
                >
            </div>`;
    } else {
        rowThreeHTML += 
            `<div class="cham-image-container cham-image-container-js" data-emotion="${color.emotion}" data-color="${color.color}" data-imgKey="${color.imgKey}">
                <img class="cham-image"
                    src="images/${color.imgKey}-cham.png"
                >
            </div>`;
    }

    colorsIndex++; 
});

rowOne.innerHTML = rowOneHTML;
rowTwo.innerHTML = rowTwoHTML;
rowThree.innerHTML = rowThreeHTML;


//Making it interactive
const chamImages = document.querySelectorAll('.cham-image-container');

chamImages.forEach((image) => {
    image.addEventListener('mouseenter', function() {
        image.innerHTML = `
        <div class="cham-image-hover">
            <div>
                <p class="cham-emotion-title">${image.getAttribute('data-emotion')}</p>
                <p class="cham-emotion-description">${image.getAttribute('data-color')}</p>
            </div>
        </div>`;
    });
});

chamImages.forEach((image) => {
    image.addEventListener('mouseleave', function() {
        image.innerHTML = `
        <img class="cham-image"
            src="images/${image.getAttribute('data-imgKey')}-cham.png"
        >`;
    });
});