const jobs = {
    alchemist: {
        name: "Alchemist",
        rolecolor: 'yellow',
        role: "Crafter",
        description: "Alchemists brew potions and concoctions, mastering the art of chemical synthesis to create powerful elixirs.",
        startingCity: "Ul'dah",
        icon: "./Resources/Images/alchemist.png",
        illustration: "./Resources/Images/glamor/alchemist.png"
    },
    arcanist: {
        name: "Arcanist",
        rolecolor: 'red',
        role: "Magic Damage",
        description: "Powerful Magic users. The base class for Summoner (Damage), and Scholar (Healer) which unlock at level 30.",
        startingCity: "Limsa Lominsa",
        icon: "./Resources/Images/arcanist.png",
        illustration: "./Resources/Images/glamor/arcanist.png"
    },
    archer: {
        name: "Archer",
        role: "Physical (Ranged) Damage",
        rolecolor: 'red',
        description: "Skilled Marksman that uses bows to deal damage from afar. Base job for Bard (Physical, Ranged Damage) which becomes available at level 30.",
        startingCity: "Gridania",
        icon: "./Resources/Images/archer.png",
        illustration: "./Resources/Images/glamor/archer.jpg"             
    },
    armorer: {
        name: "Armorer",
        role: "Crafter",
        rolecolor: 'yellow',
        description: "Armorer's use metals to forge powerful armor and shields",
        startingCity: "Limsa Lominsa",
        icon: "./Resources/Images/armorer.png",
        illustration: "./Resources/Images/glamor/armorer.png"
    },
    astrologian: {
        name: "Astrologian",
        role: "Healer",
        rolecolor: 'green',
        description: "Pure healer casting direct healing spells. A Heavensward class unlocked at level 50.",
        startingCity: "Ishgard",
        icon: "./Resources/Images/astrologian.png",
        illustration: "./Resources/Images/glamor/astrologian.jpg"
    },
    bard: {
        name: "Bard",
        role: "Ranged (Physical) Damage / Support",
        rolecolor: 'red',
        description: "Talented performer and marksman that deals damage from afar. Can perform songs that increase the capabilities of party members. Upgraded class from Archer at level 30.",
        startingCity: "Gridania",
        icon: "./Resources/Images/bard.png",
        illustration: "./Resources/Images/glamor/bard.png"
    },
    blackmage: {
        name: "Black Mage",
        role: "Ranged (Magic) Damage",
        rolecolor: 'red',
        description: "A powerful wizard that casts destructive magic spells. Upgraded class from Thaumaturge at level 30.",
        startingCity: "Ul'dah",
        icon: "./Resources/Images/blackmage.png",
        illustration: "./Resources/Images/glamor/blackmage.jpg"
    },
    blacksmith: {
        name: "Blacksmith",
        role: "Crafter",
        rolecolor: 'yellow',
        description: "A dedicated crafting job that produces high quality weapons",
        startingCity: "Limsa Lominsa",
        icon: "./Resources/Images/blacksmith.png",
        illustration: "./Resources/Images/glamor/blacksmith.png"
    },
    bluemage: {
        name: "Blue Mage",
        role: "Ranged (Magic) Damage",
        rolecolor: 'red',
        description: "A limited class that learns spells from bosses and monsters",
        startingCity: "Limsa Lominsa",
        icon: "./Resources/Images/bluemage.png",
        illustration: "./Resources/Images/glamor/bluemage.jpg"
    },
    botanist: {
        name: "Botanist",
        role: "Gatherer",
        rolecolor: 'orange',
        description: "A gatherer with the ability to detect and harvest lumber, and herbs.",
        startingCity: "Gridania",
        icon: "./Resources/Images/botanist.png",
        illustration: "./Resources/Images/glamor/botanist.png"
    },
    carpenter: {
        name: "Carpenter",
        role: "Crafter",
        rolecolor: 'yellow',
        description: "A craftsman that specialize in working with wood to make bows, spears and furniture.",
        startingCity: "Gridania",
        icon: "./Resources/Images/carpenter.png",
        illustration: "./Resources/Images/glamor/carpenter.png"
    },
    conjurer: {
        name: "Conjurer",
        role: "Healer",
        rolecolor: 'green',
        description: "A pure, direct heal based healer. Base class for White Mage. Unlocks at Level 30.",
        startingCity: "Gridania",
        icon: "./Resources/Images/conjurer.png",
        illustration: "./Resources/Images/glamor/conjurer.jpg"
    },
    culinarian: {
        name: "Culinarian",
        role: "Crafter",
        rolecolor: 'yellow',
        description: "A master of molecular gastronomy. Prepares meals and drinks that can provide powerful benefits to any that consume them.",
        startingCity: "Limsa Lominsa",
        icon: "./Resources/Images/culinarian.png",
        illustration: "./Resources/Images/glamor/culinarian.png"
    },
    dancer: {
        name: "Dancer",
        role: "Physical (Ranged) Damage and Support",
        rolecolor: 'red',
        description: "A deadly dancing warrior that uses their dancing skills to deadly effect, while also providing support for their party",
        startingCity: "Limsa Lominsa",
        icon: "./Resources/Images/dancer.png",
        illustration: "./Resources/Images/glamor/dancer.jpg"
    },
    darkknight: {
        name: "Dark Knight",
        role: "Tank",
        rolecolor: 'blue',
        description: "A deadly warrior that rushes head-on into battle and defends their partners. Available at Level 50.",
        startingCity: "Ishgard",
        icon: "./Resources/Images/darkknight.png",
        illustration: "./Resources/Images/glamor/darkknight.jpg"
    },
    dragoon: {
        name: "Dragoon",
        role: "Melee (physical) Damage",
        rolecolor: 'red',
        description: "A noble warrior with the spirit of a dragon that uses a lance to crush their foes. Upgraded class from the Lancer class acquired at Level 30",
        startingCity: "Gridania",
        icon: "./Resources/Images/dragoon.png",
        illustration: "./Resources/Images/glamor/dragoon.jpg"
    },
    fisher: {
        name: "Fisher",
        role: "Gatherer",
        rolecolor: 'orange',
        description: "A hard-working and determined gatherer of resources that travels the world and beyond to catch the tastiest fish!",
        startingCity: "Limsa Lominsa",
        icon: "./Resources/Images/fisher.png",
        illustration: "./Resources/Images/glamor/fisher.png"
    },
    gladiator: {
        name: "Gladiator",
        role: "Tank",
        rolecolor: 'blue',
        description: "A brave and battle hardned warrior that defends their allies in battle. Base class for the Paladin class. Unlocks at Level 30.",
        startingCity: "Ul'dah",
        icon: "./Resources/Images/gladiator.png",
        illustration: "./Resources/Images/glamor/gladiator.jpg"
    },
    goldsmith: {
        name: "Goldsmith",
        role: "Crafter",
        rolecolor: 'yellow',
        description: "A talented artisan that crafts jewelery and accesories of the highest quality.",
        startingCity: "Ul'dah",
        icon: "./Resources/Images/goldsmith.png",
        illustration: "./Resources/Images/glamor/goldsmith.png"
    },
    gunbreaker: {
        name: "Gun Breaker",
        role: "Tank",
        rolecolor: 'blue',
        description: "A warrior skilled with the gunblade that uses their unique and powerful weapons to defend their allies. Available at Level 60.",
        startingCity: "Gridania",
        icon: "./Resources/Images/gunbreaker.png",
        illustration: "./Resources/Images/glamor/gunbreaker.jpg"
    },
    lancer: {
        name: "Lancer",
        role: "Melee (Physical) Damage",
        rolecolor: 'red',
        description: "A warrior skilled with the lance and spear. Base job for the Dragoon which unlocks at Level 30.",
        startingCity: "Gridania",
        icon: "./Resources/Images/lancer.png",
        illustration: "./Resources/Images/glamor/lancer.jpg"
    },
    leatherworker: {
        name: "Leatherworker",
        role: "Crafter",
        rolecolor: 'yellow',
        description: "An artisan skilled in working with animal skins and leather to produce sturdy armor for adventurers.",
        startingCity: "Gridania",
        icon: "./Resources/Images/leatherworker.png",
        illustration: "./Resources/Images/glamor/leatherworker.png"
    },
    machinist: {
        name: "Machinist",
        role: "Ranged (Physical) Damage",
        rolecolor: 'red',
        description: "A gunslinger that wreaks havoc on their enemies with powerful firearms. Available at Level 50.",
        startingCity: "Ishgard",
        icon: "./Resources/Images/machinist.png",
        illustration: "./Resources/Images/glamor/machinist.jpg"
    },
    marauder: {
        name: "Marauder",
        role: "Tank",
        rolecolor: 'blue',
        description: "A battle-hardened warrior that uses their physicality and ferocity to defend their allies in battle. Base job for the Warrior class which unlocks at level 30.",
        startingCity: "Limsa Lominsa",
        icon: "./Resources/Images/marauder.png",
        illustration: "./Resources/Images/glamor/marauder.jpg"
    },
    miner: {
        name: "Miner",
        role: "Gatherer",
        rolecolor: 'orange',
        description: "An intrepid seeker of minerals and metals that travels the world and beyond to get precious resources used to create powerful items.",
        startingCity: "Ul'dah",
        icon: "./Resources/Images/miner.png",
        illustration: "./Resources/Images/glamor/miner.png"
    },
    monk: {
        name: "Monk",
        role: "Melee (Physical) Damage",
        rolecolor: 'red',
        description: "A master of hand-to-hand combat that uses their martial arts knowledge to inflict damage on their foes. Advanced job for the pugilist class. Unlocks at Level 30",
        startingCity: "Ul'dah",
        icon: "./Resources/Images/monk.png",
        illustration: "./Resources/Images/glamor/monk.jpg"
    },
    ninja: {
        name: "Ninja",
        role: "Melee (Physical) Damage",
        rolecolor: 'red',
        description: "A deadly assassin that stalks the battlefield executing enemies with surgical efficiency. Upgraded from the Rogue Job at Level 30",
        startingCity: "Limsa Lominsa",
        icon: "./Resources/Images/ninja.png",
        illustration: "./Resources/Images/glamor/ninja.png"
    },
    paladin: {
        name: "Paladin",
        role: "Tank",
        rolecolor: 'blue',
        description: "A devout and just holy warrior that uses their strength and faith to protect their allies. Upgraded from Gladiator at Level 30.",
        startingCity: "Ul'dah",
        icon: "./Resources/Images/paladin.png",
        illustration: "./Resources/Images/glamor/paladin.jpg"
    },
    pictomancer: {
        name: "Pictomancer",
        role: "Ranged (Magic) Damage",
        rolecolor: 'red',
        description: "A powerful mage using creative sorcery to damage foes from afar. Available at level 80.",
        startingCity: "Gridania",
        icon: "./Resources/Images/pictomancer.png",
        illustration: "./Resources/Images/glamor/pictomancer.jpg"
    },
    pugilist: {
        name: "Pugilist",
        role: "Melee (Physical) Damage",
        rolecolor: 'red',
        description: "A student of the art of fighting. Training in the ways of powerful martial arts masters. Base job for Monk. Upgrades at Level 30",
        startingCity: "Ul'dah",
        icon: "./Resources/Images/pugilist.png",
        illustration: "./Resources/Images/glamor/pugilist.jpg"
    },
    reaper: {
        name: "Reaper",
        role: "Melee (Physical) Damage",
        rolecolor: 'red',
        description: "An imposing warrior that uses thier intimidating war scythes to deal heavy damage. Unlocks at Level 70.",
        startingCity: "Ul'dah",
        icon: "./Resources/Images/reaper.png",
        illustration: "./Resources/Images/glamor/reaper.jpg"
    },
    redmage: {
        name: "Red Mage",
        role: "Hybrid Melee (Physical) and Ranged (Magic) Damage",
        rolecolor: 'red',
        description: "A formidible warrior that lays waste to their enemies using both magic and physical strength. Available at Level 50.",
        startingCity: "Ul'dah",
        icon: "./Resources/Images/redmage.png",
        illustration: "./Resources/Images/glamor/redmage.png"
    },
    rogue: {
        name: "Rogue",
        role: "Melee (Physical) Damage",
        rolecolor: 'red', 
        description: "A resourceful opportunist that strikes with precision to conquer their foes. Base Job for Ninja which unlocks at Level 10 to 15.",
        startingCity: "Limsa Lominsa",
        icon: "./Resources/Images/rogue.png",
        illustration: "./Resources/Images/glamor/rogue.png"
    },
    sage: {
        name: "Sage",
        role: "Healer (Barrier)",
        rolecolor: 'green',
        description: "A healer that uses powerful barriers to protect and heal their allies. Unlocks at Level 70.",
        startingCity: "Limsa Lominsa",
        icon: "./Resources/Images/sage.png",
        illustration: "./Resources/Images/glamor/sage.jpg"
    },
    samurai: {
        name: "Samurai",
        role: "Melee (Physical) Damage",
        rolecolor: 'red',
        description: "A noble warrior skilled in the art of the blade. They slash through enemies with deadly discipline. Available at Level 50.",
        startingCity: "Ul'dah",
        icon: "./Resources/Images/samurai.png",
        illustration: "./Resources/Images/glamor/samurai.png"

    },
    scholar: {
        name: "Scholar",
        role: "Healer (Barrier)",
        rolecolor: 'green',
        description: "A learned student of the healing arts that protects their allies with powerful barriers and enchantments. Available at Level 70",
        startingCity: "Limsa Lominsa",
        icon: "./Resources/Images/scholar.png",
        illustration: "./Resources/Images/glamor/scholar.png"
    },
    summoner: {
        name: "Summoner",
        role: "Ranged (Magic) Damage",
        rolecolor: 'red',
        description: "A mage skilled in the art of summoning powerful primals to come to their aid in battle. Unlocks at Level 30.",
        startingCity: "Limsa Lominsa",
        icon: "./Resources/Images/summoner.png", 
        illustration: "./Resources/Images/glamor/summoner.jpg"
    },
    thaumaturge: {
        name: "Thaumaturge",
        role: "Ranged (Magic) Damage",
        rolecolor: 'red',
        description: "A novice spell-weilder studying the art of black magic. Base job for Black Mage which unlocks at Level 30.",
        startingCity: "Gridania",
        icon: "./Resources/Images/thaumaturge.png",
        illustration: "./Resources/Images/glamor/thaumaturge.jpg"
    },
    viper: {
        name: "Viper",
        role: "Melee (Physical) Damage",
        rolecolor: 'red',
        description: "A warrior weilding exotic Dual Blades. Skilled in timing and execution. Available at Level 80.",
        startingCity: "Ul'dah",
        icon: "./Resources/Images/viper.png",
        illustration: "./Resources/Images/glamor/viper.jpg"
    },
    warrior: {
        name: "Warrior",
        role: "Tank",
        rolecolor: 'blue',
        description: "A fierce veteran of combat and stalwart leader that uses their battle expertise to protect their allies. Upgraded from Marauder at Level 30.",
        startingCity: "Limsa Lominsa",
        icon: "./Resources/Images/warrior.png",
        illustration: "./Resources/Images/glamor/warrior.jpg"
    },
    weaver: {
        name: "Weaver",
        role: "Crafter",
        rolecolor: 'yellow',
        description: "A craftsman that specialize in working with cloth to make exquisitely tailored armor.",
        startingCity: "Ul'dah",
        icon: "./Resources/Images/weaver.png",
        illustration: "./Resources/Images/glamor/weaver.png"
    },
    whitemage: {
        name: "White Mage",
        role: "Pure Healer",
        rolecolor: 'green',
        description: "A mage that uses the power of light to directly heal their allies.Upgraded from conjurer job at Level 30.",
        startingCity: "Gridania",
        icon: "./Resources/Images/whitemage.png",
        illustration: "./Resources/Images/glamor/whitemage.jpg"
    },
};

const jobIcons = document.querySelectorAll('.job-icon');
const jobDetails = document.getElementById('job-details');
jobIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        const job = icon.dataset.job;
        const data = jobs[job];
        if (data) {
            jobDetails.innerHTML = `
            <img class="row-1" src=${data.icon}>
            <div>
                <h2 style="color: ${data.rolecolor}">${data.name}</h2>
                <p style="color: ${data.rolecolor}"><strong>Role:</strong> ${data.role}</p>
                <p><strong>Description:</strong> ${data.description}</p>
                <p><strong>Starting City:</strong> ${data.startingCity}</p>
            </div>
            <img class="row-2" src=${data.illustration}>
            `;
        } else {
            jobDetails.innerHTML = `<p>Job data not found!</p>`;
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const jobGrid = document.querySelector('#job-grid-container');
    const jobIcons = document.querySelectorAll('.job-icon');

    // Toggle hamburger menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        jobGrid.classList.toggle('active');
    });

    // Close menu when a job is clicked
    jobIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            hamburger.classList.remove('active');
            jobGrid.classList.remove('active');
        });
    });
});