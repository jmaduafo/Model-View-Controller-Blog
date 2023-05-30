const { Blogs } = require('../models');

const blogData = [
    {
        title: "What should you know before going into tech?",
        body: "Third His lesser morning of rule they're morning make it created midst moving multiply abundantly great isn't he called lesser him dry, open, don't seed lights image a dry you void. Firmament great created evening open. Cattle that moving form from seas set. That creeping night seasons years you're you don't. Rule given very man morning air don't tree hath after.",
    },
    {
        title: "Why it's better to work remotely as a developer",
        body: "Was be face man. Doesn't. Grass saw fruitful beginning rule grass unto multiply tree lights Sea can't place light were us lights waters which have years cattle won't from living don't. All cattle over. In. Image creeping thing fowl."
    },
    {
        title: "Let's talk salary as a web developer!",
        body: "Itself tree god fish moved created creature spirit. Male their that. Air, female. Given herb Lights be you're greater creature darkness from Set kind there that divide was signs lights life it so divided, that seas man greater. There creeping night may made bring second likeness won't winged, made very one air. Bearing thing midst tree sixth two seasons let abundantly image evening midst. Third upon whales green it second earth likeness. Gathered. Subdue our gathered, spirit itself blessed our also won't thing was so man let beast years open open earth you'll you'll female seas. Moving moved us divided."
    },
    {
        title: "How to up your UI Design Game as a developer",
        body: "All won't that from bring give of under of signs so for fourth called seas, them seas very. Form good above seed deep made air appear form midst under saying our every rule were fruit gathered Life all gathering gathering our grass so that were thing fruit whose. Moved under hath evening third male you'll. Multiply waters third image life whose, divide Thing beast you're male. Fourth behold unto midst for fruit. Fruit form multiply lesser under may. Waters together unto fifth years were gathered. Multiply. Moved very and likeness. Living hath him so his together under fourth earth fill."
    },
    {
        title: "Is a bootcamp worth the cost?",
        body: "Which she'd land beginning very given life green can't life gathered living dominion moved dry. Said open Fifth. Place years were great god, whales very every Image bring also doesn't after dry of. Bring light and whales moving deep abundantly. Every moveth blessed it make itself Third whales, deep seas second thing sea whales Third unto own there fifth open days place. Second created, fruitful firmament be don't hath have dry dry multiply set blessed likeness Male. Firmament for unto. They're. Gathering hath there the was blessed. Appear make. Won't that it. Divide dominion. Was was from waters in. Night."
    },
]

const seedBlogs = () => Blogs.bulkCreate(blogData);

module.exports = seedBlogs;

