import './styles/main.scss';
import Tooltip from './scripts/tooltip';
import Dropdown from './scripts/dropdown';
import Tabs from './scripts/tabs';
import Snackbar from './scripts/snackbar';

//create a tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

//create dropdown
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.init();
});

//create tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

//create snack bar
const snackbar = new Snackbar();
snackbar.init();

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  snackbar.show('OUCH!');
});
