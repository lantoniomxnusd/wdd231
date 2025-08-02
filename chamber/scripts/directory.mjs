import { getMembers, renderMembers} from './members.mjs';

const cards = document.querySelector('#cards');
const gridbutton = document.querySelector('#grid');
const listbutton = document.querySelector('#list');

const members = await getMembers();
renderMembers(members,cards);

gridbutton.addEventListener("click", () => {
	cards.classList.add("grid");
	cards.classList.remove("list");
	console.log("Switched to Grid view. Class is now:", cards.className);
});

listbutton.addEventListener("click", () => {
	cards.classList.add("list");
	cards.classList.remove("grid");
	console.log("Switched to List view. Class is now:", cards.className);
});