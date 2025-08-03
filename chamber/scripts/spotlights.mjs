import {getMembers, renderMembers} from './members.mjs';

const spotlightsContainer = document.querySelector('#spotlights');
const count = 3;

function getSpotlightItems(array, count) {
  const shuffled = [...array].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

async function renderSpotlights() {
  const members = await getMembers();
  const goldSilver = members.filter(member =>
    member.membershipLevel === 'Gold' || member.membershipLevel === 'Silver'
  );
  const selected = getSpotlightItems(goldSilver, count);
  renderMembers(selected, spotlightsContainer);
}

renderSpotlights();