const basePath = window.location.hostname.includes('github.io') ? '/XIV-Jobs' : '';
const jobs = {
    alchemist: {
        name: "Alchemist",
        rolecolor: 'yellow',
        role: "Crafter",
        description: "Alchemists brew potions and concoctions, mastering the art of chemical synthesis to create powerful elixirs.",
        startingCity: "Ul'dah",
        icon: "XIV-Jobs/Resources/images/alchemist.png",
        illustration: "XIV-Jobs/Resources/images/glamor/alchemist.png"
    },
    arcanist: {
        name: "Arcanist",
        rolecolor: 'red',
        role: "Magic Damage",
        description: "Powerful Magic users. The base class for Summoner (Damage), and Scholar (Healer) which unlock at level 30.",
        startingCity: "Limsa Lominsa",
        icon: "./Resources/images/arcanist.png",
        illustration: "./Resources/images/glamor/arcanist.png"
    },
    archer: {
        name: "Archer",
        role: "Physical (Ranged) Damage",
        rolecolor: 'red',
        description: "Skilled Marksman that uses bows to deal damage from afar. Base job for Bard (Physical, Ranged Damage) which becomes available at level 30.",
        startingCity: "Gridania",
        icon: "./Resources/images/archer.png",
        illustration: "./Resources/images/glamor/archer.jpg"             
    },
    armorer: {
        name: "Armorer",
        role: "Crafter",
        rolecolor: 'yellow',
        description: "Armorer's use metals to forge powerful armor and shields",
        startingCity: "Limsa Lominsa",
        icon: "./Resources/images/armorer.png",
        illustration: "./Resources/images/glamor/armorer.jpg"
    },
    astrologian: {
        name: "Astrologian",
        role: "Healer",
        rolecolor: 'green',
        description: "Pure healer casting direct healing spells. A Heavensward class unlocked at level 50.",
        startingCity: "Ishgard",
        icon: "./Resources/images/astrologian.png",
        illustration: "./Resources/images/glamor/astrologian.jpg"
    },
    bard: {
        name: "Bard",
        role: "Ranged (Physical) Damage / Support",
        rolecolor: 'red',
        description: "Talented performer and marksman that deals damage from afar. Can perform songs that increase the capabilities of party members. Upgraded class from Archer at level 30.",
        startingCity: "Gridania",
        icon: "./Resources/images/bard.png",
        illustration: "./Resources/images/glamor/bard.png"
    },
    blackmage: {
        name: "Black Mage",
        role: "Ranged (Magic) Damage",
        rolecolor: 'red',
        description: "A powerful wizard that casts destructive magic spells. Upgraded class from Thaumaturge at level 30.",
        startingCity: "Ul'dah",
        icon: "./Resources/images/blackmage.png",
        illustration: "./Resources/images/glamor/blackmage.jpg"
    },
    blacksmith: {
        name: "Blacksmith",
        role: "Crafter",
        rolecolor: 'yellow',
        description: "A dedicated crafting job that produces high quality weapons",
        startingCity: "Limsa Lominsa",
        icon: "./Resources/images/blacksmith.png",
        illustration: "./Resources/images/glamor/blacksmith.png"
    },
    bluemage: {
        name: "Blue Mage",
        role: "Ranged (Magic) Damage",
        rolecolor: 'red',
        description: "A limited class that learns spells from bosses and monsters",
        startingCity: "Limsa Lominsa",
        icon: "./Resources/images/bluemage.png",
        illustration: "./Resources/images/glamor/bluemage.jpg"
    },
    botanist: {
        name: "Botanist",
        role: "Gathererg",
        rolecolor: 'orange',
        description: "A gatherer with the ability to detect and harvest lumber, and herbs.",
        startingCity: "Gridania",
        icon: "./Resources/images/botanist.png",
        illustration: "./Resources/images/glamor/botanist.png"
    },
    carpenter: {
        name: "Carpenter",
        role: "Crafter",
        rolecolor: 'yellow',
        description: "A craftsman that specialize in working with wood to make bows, spears and furniture.",
        startingCity: "Gridania",
        icon: "./Resources/images/carpenter.png",
        illustration: "./Resources/images/glamor/carpenter.png"
    },
    conjurer: {
        name: "Conjurer",
        role: "Healer",
        rolecolor: 'green',
        description: "A pure, direct heal based healer. Base class for White Mage. Unlocks at Level 30.",
        startingCity: "Gridania",
        icon: "./Resources/images/conjurer.png",
        illustration: "./Resources/images/glamor/conjurer.jpg"
    },
    culinarian: {
        name: "Culinarian",
        role: "Crafter",
        rolecolor: 'yellow',
        description: "A master of molecular gastronomy. Prepares meals and drinks that can provide powerful benefits to any that consume them.",
        startingCity: "Limsa Lominsa",
        icon: "./Resources/images/culinarian.png",
        illustration: "./Resources/images/glamor/culinarian.png"
    },
    dancer: {
        name: "Dancer",
        role: "Physical (Ranged) Damage and Support",
        rolecolor: 'red',
        description: "A deadly dancing warrior that uses their dancing skills to deadly effect, while also providing support for their party",
        startingCity: "Limsa Lominsa",
        icon: "./Resources/images/dancer.png",
        illustration: "./Resources/images/glamor/dancer.jpg"
    },
    darkknight: {
        name: "Dark Knight",
        role: "Tank",
        rolecolor: 'blue',
        description: "A deadly warrior that rushes head-on into battle and defends their partners. Available at Level 50.",
        startingCity: "Ishgard",
        icon: "./Resources/images/darkknight.png",
        illustration: "./Resources/images/glamor/darkknight.jpg"
    },
    dragoon: {
        name: "Dragoon",
        role: "Melee (physical) Damage",
        rolecolor: 'red',
        description: "A noble warrior with the spirit of a dragon that uses a lance to crush their foes. Upgraded class from the Lancer class acquired at Level 30",
        startingCity: "Gridania",
        icon: "./Resources/images/dragoon.png",
        illustration: "./Resources/images/glamor/dragoon.jpg"
    },
    fisher: {
        name: "Fisher",
        role: "Gatherer",
        rolecolor: 'orange',
        description: "A hard-working and determined gatherer of resources that travels the world and beyond to catch the tastiest fish!",
        startingCity: "Limsa Lominsa",
        icon: "./Resources/images/fisher.png",
        illustration: "./Resources/images/glamor/fisher.png"
    },
    gladiator: {
        name: "Gladiator",
        role: "Tank",
        rolecolor: 'blue',
        description: "A brave and battle hardned warrior that defends their allies in battle. Base class for the Paladin class. Unlocks at Level 30.",
        startingCity: "Ul'dah",
        icon: "./Resources/images/gladiator.png",
        illustration: "./Resources/images/glamor/gladiator.jpg"
    },
    goldsmith: {
        name: "Goldsmith",
        role: "Crafter",
        rolecolor: 'yellow',
        description: "A talented artisan that crafts jewelery and accesories of the highest quality.",
        startingCity: "Ul'dah",
        icon: "./Resources/images/goldsmith.png",
        illustration: "./Resources/images/glamor/goldsmith.png"
    },
    gunbreaker: {
        name: "Gun Breaker",
        role: "Tank",
        rolecolor: 'blue',
        description: "A warrior skilled with the gunblade that uses their unique and powerful weapons to defend their allies. Available at Level 60.",
        startingCity: "Gridania",
        icon: "./Resources/images/gunbreaker.png",
        illustration: "./Resources/images/glamor/gunbreaker.jpg"
    },
    lancer: {
        name: "Lancer",
        role: "Melee (Physical) Damage",
        rolecolor: 'red',
        description: "A warrior skilled with the lance and spear. Base job for the Dragoon which unlocks at Level 30.",
        startingCity: "Gridania",
        icon: "./Resources/images/lancer.png",
        illustration: "./Resources/images/glamor/lancer.jpg"
    },
    leatherworker: {
        name: "Leatherworker",
        role: "Crafter",
        rolecolor: 'yellow',
        description: "An artisan skilled in working with animal skins and leather to produce sturdy armor for adventurers.",
        startingCity: "Gridania",
        icon: "./Resources/images/leatherworker.png",
        illustration: "./Resources/images/glamor/leatherworker.png"
    },
    machinist: {
        name: "Machinist",
        role: "Ranged (Physical) Damage",
        rolecolor: 'red',
        description: "A gunslinger that wreaks havoc on their enemies with powerful firearms. Available at Level 50.",
        startingCity: "Ishgard",
        icon: "./Resources/images/machinist.png",
        illustration: "./Resources/images/glamor/machinist.jpg"
    },
    marauder: {
        name: "Marauder",
        role: "Tank",
        rolecolor: 'blue',
        description: "A battle-hardened warrior that uses their physicality and ferocity to defend their allies in battle. Base job for the Warrior class which unlocks at level 30.",
        startingCity: "Limsa Lominsa",
        icon: "./Resources/images/marauder.png",
        illustration: "./Resources/images/glamor/marauder.jpg"
    },
    miner: {
        name: "Miner",
        role: "Gatherer",
        rolecolor: 'orange',
        description: "An intrepid seeker of minerals and metals that travels the world and beyond to get precious resources used to create powerful items.",
        startingCity: "Ul'dah",
        icon: "./Resources/images/miner.png",
        illustration: "./Resources/images/glamor/miner.png"
    },
    monk: {
        name: "Monk",
        role: "Melee (Physical) Damage",
        rolecolor: 'red',
        description: "A master of hand-to-hand combat that uses their martial arts knowledge to inflict damage on their foes. Advanced job for the pugilist class. Unlocks at Level 30",
        startingCity: "Ul'dah",
        icon: "./Resources/images/monk.png",
        illustration: "./Resources/images/glamor/monk.jpg"
    },
    ninja: {
        name: "Ninja",
        role: "Melee (Physical) Damage",
        rolecolor: 'red',
        description: "A deadly assassin that stalks the battlefield executing enemies with surgical efficiency. Upgraded from the Rogue Job at Level 10 to 15",
        startingCity: "Limsa Lominsa",
        icon: "./Resources/images/ninja.png",
        illustration: "./Resources/images/glamor/ninja.png"
    },
    paladin: {
        name: "Paladin",
        role: "Tank",
        rolecolor: 'blue',
        description: "A devout and just holy warrior that uses their strength and faith to protect their allies. Upgraded from Gladiator at Level 30.",
        startingCity: "Ul'dah",
        icon: "./Resources/images/paladin.png",
        illustration: "./Resources/images/glamor/paladin.jpg"
    },
    pictomancer: {
        name: "Pictomancer",
        role: "Ranged (Magic) Damage",
        rolecolor: 'red',
        description: "A powerful mage using creative sorcery to damage foes from afar. Available at level 80.",
        startingCity: "Gridania",
        icon: "./Resources/images/pictomancer.png",
        illustration: "./Resources/images/glamor/pictomancer.jpg"
    },
    pugilist: {
        name: "Pugilist",
        role: "Melee (Physical) Damage",
        rolecolor: 'red',
        description: "A student of the art of fighting. Training in the ways of powerful martial arts masters. Base job for Monk. Upgrades at Level 30",
        startingCity: "Ul'dah",
        icon: "./Resources/images/pugilist.png",
        illustration: "./Resources/images/glamor/pugilist.jpg"
    },
    reaper: {
        name: "Reaper",
        role: "Melee (Physical) Damage",
        rolecolor: 'red',
        description: "An imposing warrior that uses thier intimidating war scythes to deal heavy damage. Unlocks at Level 70.",
        startingCity: "Ul'dah",
        icon: "./Resources/images/reaper.png",
        illustration: "./Resources/images/glamor/reaper.jpg"
    },
    redmage: {
        name: "Red Mage",
        role: "Hybrid Melee (Physical) and Ranged (Magic) Damage",
        rolecolor: 'red',
        description: "A formidible warrior that lays waste to their enemies using both magic and physical strength. Available at Level 50.",
        startingCity: "Ul'dah",
        icon: "./Resources/images/redmage.png",
        illustration: "./Resources/images/glamor/redmage.png"
    },
    rogue: {
        name: "Rogue",
        role: "Melee (Physical) Damage",
        rolecolor: 'red', 
        description: "A resourceful opportunist that strikes with precision to conquer their foes. Base Job for Ninja which unlocks at Level 10 to 15.",
        startingCity: "Limsa Lominsa",
        icon: "./Resources/images/rogue.png",
        illustration: "./Resources/images/glamor/rogue.png"
    },
    sage: {
        name: "Sage",
        role: "Healer (Barrier)",
        rolecolor: 'green',
        description: "A healer that uses powerful barriers to protect and heal their allies. Unlocks at Level 70.",
        startingCity: "Limsa Lominsa",
        icon: "./Resources/images/sage.png",
        illustration: "./Resources/images/glamor/sage.jpg"
    },
    samurai: {
        name: "Samurai",
        role: "Melee (Physical) Damage",
        rolecolor: 'red',
        description: "A noble warrior skilled in the art of the blade. They slash through enemies with deadly discipline. Available at Level 50.",
        startingCity: "Ul'dah",
        icon: "./Resources/images/samurai.png",
        illustration: "./Resources/images/glamor/samurai.png"

    },
    scholar: {
        name: "Scholar",
        role: "Healer (Barrier)",
        rolecolor: 'green',
        description: "A learned student of the healing arts that protects their allies with powerful barriers and enchantments. Available at Level 70",
        startingCity: "Limsa Lominsa",
        icon: "./Resources/images/scholar.png",
        illustration: "./Resources/images/glamor/scholar.png"
    },
    summoner: {
        name: "Summoner",
        role: "Ranged (Magic) Damage",
        rolecolor: 'red',
        description: "A mage skilled in the art of summoning powerful primals to come to their aid in battle. Unlocks at Level 30.",
        startingCity: "Limsa Lominsa",
        icon: "./Resources/images/summoner.png", 
        illustration: "./Resources/images/glamor/summoner.jpg"
    },
    thaumaturge: {
        name: "Thaumaturge",
        role: "Ranged (Magic) Damage",
        rolecolor: 'red',
        description: "A novice spell-weilder studying the art of black magic. Base job for Black Mage which unlocks at Level 30.",
        startingCity: "Gridania",
        icon: "./Resources/images/thaumaturge.png",
        illustration: "./Resources/images/glamor/thaumaturge.jpg"
    },
    viper: {
        name: "Viper",
        role: "Melee (Physical) Damage",
        rolecolor: 'red',
        description: "A warrior weilding exotic Dual Blades. Skilled in timing and execution. Available at Level 80.",
        startingCity: "Ul'dah",
        icon: "./Resources/images/viper.png",
        illustration: "./Resources/images/glamor/viper.jpg"
    },
    warrior: {
        name: "Warrior",
        role: "Tank",
        rolecolor: 'blue',
        description: "A fierce veteran of combat and stalwart leader that uses their battle expertise to protect their allies. Upgraded from Marauder at Level 30.",
        startingCity: "Limsa Lominsa",
        icon: "./Resources/images/warrior.png",
        illustration: "./Resources/images/glamor/warrior.jpg"
    },
    weaver: {
        name: "Weaver",
        role: "Crafter",
        rolecolor: 'yellow',
        description: "A craftsman that specialize in working with cloth to make exquisitely tailored armor.",
        startingCity: "Ul'dah",
        icon: "./Resources/images/weaver.png",
        illustration: "./Resources/images/glamor/weaver.png"
    },
    whitemage: {
        name: "White Mage",
        role: "Pure Healer",
        rolecolor: 'green',
        description: "A mage that uses the power of light to directly heal their allies.Upgraded from conjurer job at Level 30.",
        startingCity: "Gridania",
        icon: "./Resources/images/whitemage.png",
        illustration: "./Resources/images/glamor/whitemage.jpg"
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