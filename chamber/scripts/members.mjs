export async function getMembers() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    return data.members;
}

export function renderMembers(members, cardContainer) {
    members.forEach((member)=> {
        let card = document.createElement ('section');
        card.classList.add('card');

        let name = document.createElement('h2');
        let image = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let membershipLevel = document.createElement('p'); 
        let additionalInfo = document.createElement('p');

        name.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = `Phone: ${member.phone}`;
        website.textContent = member.website;
        website.setAttribute('href', member.website);
        membershipLevel.textContent = `${member.membershipLevel} Member`;

        image.setAttribute('src', member.image);
        image.setAttribute('alt', `Logo for ${member.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '340');
        image.setAttribute('height', '240');

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membershipLevel);
        card.appendChild(additionalInfo);

        cardContainer.appendChild(card);
    });
}

