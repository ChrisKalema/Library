import Tooltip from './lib-ui/tooltip';
import Dropdown from './lib-ui/dropdown.js';
import Tabs from './lib-ui/tabs.js';
import Snackbar from './lib-ui/snackbar.js';

//create tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

//create dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown =>{
    const instance = new Dropdown(dropdown);
    instance.init();
})
//create tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

//create snackbar
const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('button');

button.addEventListener('click', ()=>{
    snackbar.show('Did you just click on me MF?')  
});
