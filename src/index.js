import Tooltip from './lib-ui/tooltip';
import Dropdown from './lib-ui/dropdown.js';
import Tabs from './lib-ui/tabs.js';

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