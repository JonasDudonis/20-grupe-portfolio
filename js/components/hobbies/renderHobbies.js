import { isValidHobbies } from "./isValidHobbies";
import { findIfValidSelector } from './findIfValidSelector.js';

function renderHobbies () {

// input validation
function renderHobbies(params) {
    // input validation
    if (!isValidHobbies(params)) {
        return false;
    }
// logic

    // const selector = params.selector
    // const data = params.data
    // const liti = params.limit
    // const borderRadius = params.borderRadius;

    // Galima tas 4 eilutes parasyti sutrauktai taip
    const {selector, data, limit, borderRadius} = params;

    const DOM = findIfValidSelector(selector)

    if (!DOM) {
        return false;
    }

    let HTML = '';
    for (const item of data) {
        if (!isValidHobbieItem(item)) {
            continue;  
        }
        HTML += `<div class="item">
        <i class="fa fa-${item.icon}"></i>
        <span>${item.title}</span>
    </div>`;
    }

    // post logic validation

    // result

   // Prideti CSS stiliu per Javascript funkcija
   DOM.classList.add('hobbie-list');
   DOM.innerHTML = HTML;

return true;
}

export { renderHobbies }