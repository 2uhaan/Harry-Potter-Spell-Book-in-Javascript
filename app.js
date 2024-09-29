const spells = [
    { name: "Expelliarmus", type: "Charm", description: "Disarms your opponent." },
    { name: "Lumos", type: "Charm", description: "Illuminates the tip of your wand." },
    { name: "Expecto Patronum", type: "Charm", description: "Summons a Patronus to ward off Dementors." },
    { name: "Wingardium Leviosa", type: "Charm", description: "Levitates objects." },
    { name: "Avada Kedavra", type: "Curse", description: "The killing curse." },
    { name: "Alohomora", type: "Charm", description: "Unlocks doors and other objects." },
    { name: "Protego", type: "Charm", description: "Shields the caster from spells." },
    { name: "Accio", type: "Charm", description: "Summons objects towards the caster." },
    { name: "Stupefy", type: "Charm", description: "Renders a target unconscious." },
    { name: "Obliviate", type: "Charm", description: "Erases specific memories." },
    { name: "Riddikulus", type: "Charm", description: "Transforms a Boggart into something amusing." },
    { name: "Crucio", type: "Curse", description: "Inflicts unbearable pain on the target." },
    { name: "Imperio", type: "Curse", description: "Allows the caster to control the victim's actions." },
    { name: "Finite Incantatem", type: "Charm", description: "Stops the effects of ongoing spells." },
    { name: "Reparo", type: "Charm", description: "Repairs broken objects." },
    { name: "Nox", type: "Charm", description: "Extinguishes the light from the Lumos spell." },
    { name: "Petrificus Totalus", type: "Charm", description: "Temporarily paralyzes the target." },
    { name: "Expulso", type: "Curse", description: "Causes an object to explode." },
    { name: "Sectumsempra", type: "Curse", description: "Inflicts deep gashes on the target, as though slashed by a sword." },
    { name: "Confundo", type: "Charm", description: "Confuses and disorients the target." },
    { name: "Diffindo", type: "Charm", description: "Cuts or tears objects." },
    { name: "Episkey", type: "Charm", description: "Heals minor injuries." },
    { name: "Silencio", type: "Charm", description: "Silences the target, preventing them from speaking." },
    { name: "Rennervate", type: "Charm", description: "Revives someone who has been stunned." },
    { name: "Tarantallegra", type: "Charm", description: "Forces the target to dance uncontrollably." },


    // Add more spells here
];

const searchInput = document.getElementById("search");
const spellList = document.getElementById("spell-list");

function displaySpells(spellArray) {
    spellList.innerHTML = "";
    spellArray.forEach(spell => {
        const spellDiv = document.createElement("div");
        spellDiv.classList.add("spell");

        const spellName = document.createElement("div");
        spellName.classList.add("spell-name");
        spellName.textContent = spell.name;

        const spellType = document.createElement("div");
        spellType.classList.add("spell-type");
        spellType.textContent = `Type: ${spell.type}`;

        const spellDesc = document.createElement("div");
        spellDesc.classList.add("spell-desc");
        spellDesc.textContent = spell.description;

        // Add click event to toggle visibility of type and description
        spellDiv.addEventListener("click", () => {
            const isVisible = spellType.style.display === "block";
            spellType.style.display = isVisible ? "none" : "block";
            spellDesc.style.display = isVisible ? "none" : "block";
        });

        spellDiv.appendChild(spellName);
        spellDiv.appendChild(spellType);
        spellDiv.appendChild(spellDesc);

        spellList.appendChild(spellDiv);
    });
}

searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredSpells = spells.filter(spell =>
        spell.name.toLowerCase().includes(searchTerm)
    );
    displaySpells(filteredSpells);
});

// Display all spells on initial load
displaySpells(spells);
