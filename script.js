const listOptions = ["JS", "HTML", "CSS"];
let nameCount = 1;

const inputs = document.querySelectorAll(".characteristics__input");

const li = document.querySelectorAll(".characteristics__list-item");
li.forEach(item => item.addEventListener("change", () => {
    const neighbor = item.nextSibling.nextSibling;
    
    $(neighbor).show();

    createItem(neighbor);

}));


function createItem(neighbor) {

    nameCount++;

    neighbor.querySelectorAll(".characteristics__input").forEach(input => input.remove());
    neighbor.querySelectorAll(".characteristics__item-variant").forEach(input => input.remove());

    for (let i = 0; i < listOptions.length; i++) {
        const input = document.createElement("input");
        const label = document.createElement("label");

        input.setAttribute("type", "radio");
        input.classList.add("characteristics__input");
        label.classList.add("characteristics__item-variant");

        input.value = listOptions[i];
        input.name = nameCount;
        label.textContent = listOptions[i];
    

        neighbor.append(input);
        neighbor.append(label);
    }

}