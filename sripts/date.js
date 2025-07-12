const today = document.querySelector('#lastModified');
const options = {
    day:"numeric",
    month: "short",
    year: "numeric"
};

today.innerHTML = "Last Modified: " + new Date().toLocaleDateString("en-US", options);
