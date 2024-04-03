const tmdb = require("./tmdb.js");
async function handleRandwin(message) {

const titlesWon = [
    { win: 'Heathers', type: 'movie' },
    { win: 'Pitch Perfect: Bumper in Berlin', type: 'tv' },
    { win: 'The English', type: 'tv' },
    { win: "Guillermo del Toro's Pinocchio", type: 'movie' },
    { win: "OK K.O.! Let's Be Heroes", type: 'tv' },
    { win: 'Shark Tale', type: 'movie' },
    { win: 'Thank You for Smoking', type: 'movie' },
    { win: 'He-Man and the Masters of the Universe', type: 'tv' },
    { win: 'Ultraman', type: 'tv' },
    { win: 'Shin Ultraman', type: 'movie' },
    { win: 'Resident Evil', type: 'movie' },
    { win: 'Arsenic and Old Lace', type: 'movie' },
    { win: 'Wednesday', type: 'tv' },
    { win: 'Lost', type: 'tv' },
    { win: 'Paranoid Park', type: 'movie' },
    { win: 'Punch-Drunk-Love', type: 'movie' },
    { win: 'X-Men: The Animated Series', type: 'tv' },
    { win: 'Emily the Criminal', type: 'movie' },
    { win: 'M3GAN', type: 'movie' },
    { win: 'Curious George', type: 'movie' },
    { win: 'BoJack Horseman', type: 'tv' },
    { win: 'The Red Ape Family', type: 'tv' },
    { win: 'Strange World', type: 'movie' },
    { win: 'Miraculous: Tales of Ladybug & Cat Noir', type: 'tv' },
    { win: 'Reacher', type: 'tv' },
    { win: 'Indiana Jones and the Raiders of the Lost Ark', type: 'movie' },
    { win: 'Puss in Boots: The Last Wish', type: 'movie' },
    { win: 'The Saddest Music in the World', type: 'movie' },
    { win: 'Top Gear', type: 'tv' },
    { win: 'Bluey', type: 'tv' },
    { win: 'Tugs', type: 'tv' },
    { win: 'Friends', type: 'tv' },
    { win: 'The Intouchables', type: 'movie' },
    { win: 'Pitch Black', type: 'movie' },
    { win: 'X-Men: Evolution', type: 'tv' },
    { win: 'Teen Titans', type: 'tv' },
    { win: 'Cory in the House', type: 'tv' },
    { win: 'Homiez', type: 'tv' },
    { win: 'La La Land', type: 'movie' },
    { win: 'Adventures of Sonic the Hedgehog', type: 'tv' },
    { win: 'Beast', type: 'movie' },
    { win: 'Nativity!', type: 'movie' },
    { win: 'Dont Trust the B---- in Apartment 23', type: 'tv' },
    { win: 'Money Heist', type: 'tv' },
    { win: 'RRR', type: 'movie' },
    { win: 'Key and Peele', type: 'tv' },
    { win: 'The Emperors New Groove', type: 'movie' },
    { win: 'Shrek 2', type: 'movie' },
    { win: 'Fanboy & Chum Chum', type: 'tv' },
    { win: 'Ant-Man and the Wasp: Quantumania', type: 'movie' },
    { win: 'Law & Order: Special Victims Unit', type: 'tv' },
    { win: 'The Aristocats', type: 'movie' },
    { win: 'The Owl House', type: 'tv' },
    { win: 'MythBusters', type: 'tv' },
    { win: 'The Bad Guys', type: 'movie' },
    { win: 'Dunkirk', type: 'movie' },
    { win: 'Madagascar: Escape 2 Africa', type: 'movie' },
    { win: 'Men in Black: The Animated Series', type: 'tv' },
    { win: 'Evil Dead', type: 'movie' },
    { win: 'Dungeons & Dragons', type: 'movie' },
    { win: 'TRON: Legacy', type: 'movie' },
    { win: 'Invincible', type: 'tv' },
    { win: 'Alien', type: 'movie' },
    { win: 'Total Drama Presents: The Ridonculous Race', type: 'tv' },
    { win: 'The Fast and the Furious', type: 'movie' },
    { win: 'Leave it to Beaver', type: 'tv' },
    { win: 'Sky Commanders', type: 'tv' },
    { win: 'Horrid Henry: The Movie', type: 'movie' },
    { win: 'Westworld', type: 'tv' },
    { win: 'Holes', type: 'movie' },
    { win: 'The Masked Singer', type: 'tv' },
    { win: 'Marvels Moon Girl and Devil Dinosaur', type: 'tv' },
    { win: 'Not Dead Yet', type: 'tv' },
    { win: 'Everything Everywhere All at Once', type: 'movie' },
    { win: 'Dark Dungeons', type: 'movie' },
    { win: 'Physical: 100', type: 'tv' },
    { win: 'Normal People', type: 'tv' },
    { win: 'Spirited Away', type: 'movie' },
    { win: 'The Americans', type: 'tv' },
    { win: 'The Sopranos', type: 'tv' },
    { win: 'John Wick', type: 'movie' },
    { win: 'Warrior Nun', type: 'tv' },
    { win: 'The Defiant Ones', type: 'movie' },
    { win: 'Eega', type: 'movie' },
    { win: 'Baahibali: The Beginning', type: 'movie' },
    { win: 'Zip & Zap', type: 'tv' },
    { win: 'Blue Bloods', type: 'tv' },
    { win: 'Dora and the Lost City of Gold', type: 'movie' },
    { win: 'BattleBots', type: 'tv' },
    { win: 'The Transformers: The Movie', type: 'movie' },
    { win: 'Dont Hug Me Im Scared', type: 'tv' },
    { win: 'Inside Out', type: 'movie' },
    { win: 'The Iron Giant', type: 'movie' },
    { win: 'Crazy Rich Asians', type: 'movie' },
    { win: 'Selena Gomez: My Mind & Me', type: 'movie' },
    { win: 'Never Have I Ever', type: 'movie' },
    { win: 'The Chosen', type: 'tv' },
    { win: 'Curious George Swings into Spring', type: 'movie' },
    { win: 'Adventures in Lalaloopsy Land: The Search for Pillow', type: 'movie' },
    { win: 'Professor Layton and the Eternal Diva', type: 'movie' },
    { win: 'Shrinking', type: 'tv' },
    { win: 'The Shrink Next Door', type: 'tv' },
    { win: 'Baahubali 2: The Conclusion', type: 'movie' },
    { win: 'Succession', type: 'tv' },
    { win: 'The Big Lebowski', type: 'movie' },
    { win: 'Legion', type: 'tv' },
    { win: 'Glee', type: 'tv' },
    { win: 'Xavier: Renegade Angel', type: 'tv' },
    { win: 'The Giver', type: 'movie' },
    { win: 'Fantastic Planet', type: 'movie' },
    { win: 'Blown Away', type: 'tv' },
    { win: 'The Thick of It', type: 'tv' },
    { win: 'The Super Mario Bros. Movie', type: 'movie' },
    { win: '6Teen', type: 'tv' },
    { win: 'Suzume', type: 'movie' },
    { win: 'The Jerry Springer Show', type: 'tv' },
    { win: 'Champagne & Bullets', type: 'movie' },
    { win: 'Treasure Island', type: 'movie' },
    { win: 'Go, Diego, Go!', type: 'tv' },
    { win: 'Transformers: Cybertron', type: 'tv' },
    { win: 'Love and Monsters', type: 'movie' },
    { win: 'John Wick: Chapter 3 - Parabellum', type: 'movie' },
    { win: 'Murder Drones', type: 'tv' },
    { win: 'Garfield: A Tail of Two Kitties', type: 'movie' },
    { win: 'Oswald', type: 'tv' },
    { win: 'Belly', type: 'movie' },
    { win: 'Parasite', type: 'movie' },
    { win: 'Kitchen Nightmares', type: 'tv' },
    { win: 'Spirit: Stallion of the Cimarron', type: 'movie' },
    { win: 'Velma', type: 'tv' },
    { win: 'Renfield', type: 'movie' },
    { win: 'A Small Light', type: 'tv' },
    { win: 'Ted Lasso', type: 'tv' },
    { win: 'Barry', type: 'tv' },
    { win: 'D.E.B.S.', type: 'movie' },
    { win: 'Dummy', type: 'tv' },
    { win: 'Draft Day', type: 'movie' },
    { win: 'Veep', type: 'tv' },
    { win: 'Fear the Walking Dead', type: 'tv' },
    { win: 'RRR', type: 'movie' },
    { win: 'Zoboomafoo', type: 'tv' },
    { win: 'Clone High', type: 'tv' },
    { win: 'Tower Heist', type: 'movie' },
    { win: 'Galveston', type: 'movie' },
    { win: 'Hero', type: 'movie' },
    { win: 'Scream Queens', type: 'tv' },
    { win: 'Zip & Zap and the Marble Gang', type: 'movie' },
    { win: 'SpongeBob SquarePants', type: 'tv' },
    { win: 'Peacemaker', type: 'tv' },
    { win: 'The Prince of Egypt', type: 'movie' },
    { win: 'Nobody', type: 'movie' },
    { win: 'Old Bear Stories', type: 'tv' },
    { win: 'Adventures of Sonic the Hedgehog', type: 'tv' },
    { win: 'Inside Out', type: 'movie' },
    { win: 'The Lego Movie', type: 'movie' },
    { win: 'Moral Orel', type: 'tv' },
    { win: 'Joker', type: 'movie' },
    { win: 'Smiling Friends', type: 'tv' },
    { win: 'Bee Movie', type: 'movie' },
    { win: '65', type: 'movie' },
    { win: 'Breaking Bad', type: 'tv' },
    { win: 'Archer', type: 'tv' },
    { win: 'Nobody', type: 'movie' },
    { win: 'Ghost Adventures', type: 'tv' },
    { win: 'Men in Black', type: 'movie' },
    { win: 'Snowfall', type: 'tv' },
    { win: 'Vampires Kiss', type: 'movie' },
    { win: 'Good Luck Charlie', type: 'tv' },
    { win: 'Dio: Dreamers Never Die', type: 'movie' },
    { win: 'Yo Gabba Gabba!', type: 'tv' },
    { win: 'Spider-Man: Into the Spider-Verse', type: 'movie' },
    { win: 'The Sopranos', type: 'tv' },
    { win: 'Tattooed Teenage Alien Fighters from Beverly Hills', type: 'tv' },
    { win: 'Spider-Man: Across the Spider-Verse', type: 'movie' },
    { win: 'Rick and Morty', type: 'tv' },
    { win: 'The Super Mario Bros. Movie', type: 'movie' },
    { win: 'Treasure Planet', type: 'movie' },
    { win: 'Jersey Shore Family Vacation', type: 'tv' },
    { win: 'I Think You Should Leave with Tim Robinson', type: 'tv' },
    { win: 'Cobra Kai', type: 'tv' },
    { win: 'Hot Rod', type: 'movie' },
    { win: 'The Boys', type: 'tv' },
    { win: 'Ride a Crooked Trail', type: 'movie' },
    { win: 'Thor', type: 'movie' },
    { win: 'Parks and Recreation', type: 'tv' },
    { win: 'Speedy', type: 'movie' },
    { win: 'Missing', type: 'movie' },
    { win: 'Teen Titans', type: 'tv' },
    { win: 'Tutenstein', type: 'tv' },
    { win: 'Catch-22', type: 'movie' },
    { win: 'How Its Made', type: 'movie' },
    { win: 'House', type: 'tv' },
    { win: 'Howls Moving Castle', type: 'movie' },
    { win: 'South Park', type: 'tv' },
    { win: 'The Secret of Kells', type: 'movie' },
    { win: 'Greys Anatomy', type: 'tv' },
    { win: 'La La Land', type: 'movie' },
    { win: 'Tenet', type: 'movie' },
    { win: 'Adventure Time', type: 'tv' },
    { win: 'Gormenghast', type: 'tv' },
    { win: 'Wolfwalkers', type: 'movie' },
    { win: 'The Bear', type: 'tv' },
    { win: 'Superstar: The Karen Carpenter Story', type: 'movie' },
    { win: 'Oppenheimer', type: 'movie' },
    { win: 'Pee-wees Playhouse', type: 'tv' },
    { win: 'The Price is Right', type: 'tv' },
    { win: 'Transformers: Rise of the Beasts', type: 'movie' },
    { win: 'Friday Night Lights', type: 'tv' },
    { win: 'Asteroid City', type: 'movie' },
    { win: 'Kung Fu Hustle', type: 'movie' },
    { win: 'In Search of Steve Ditko', type: 'tv' },
    { win: 'The Unbearable Weight of Massive Talent', type: 'movie' },
    { win: 'Stranger Things', type: 'tv' },
    { win: 'The Simpsons', type: 'tv' },
    { win: 'A Night to Remember', type: 'movie' },
    { win: 'The Three Musketeers: DArtagnan', type: 'movie' },
    { win: 'Regular Show', type: 'tv' },
    { win: 'Room Service', type: 'movie' },
    { win: 'Stickin Around', type: 'tv' },
    { win: 'Gen V', type: 'tv' },
    { win: 'Star Wars: Episode III - Revenge of the Sith', type: 'movie' },
    { win: 'Dave', type: 'tv' },
    { win: 'The Fall of the House of Usher', type: 'tv' },
    { win: 'Rocky', type: 'movie' },
    { win: 'Caillou', type: 'tv' },
    { win: 'Futurama', type: 'tv' },
    { win: 'Ghostbusters', type: 'movie' },
    { win: 'Valerian and the City of a Thousand Planets', type: 'movie' },
    { win: 'The Amazing Digital Circus', type: 'tv' },
    { win: 'The Princess Bride', type: 'movie' },
    { win: 'Knowing', type: 'movie' },
    { win: 'The Wire', type: 'tv' },
    { win: 'Curious George: A Halloween Boo Fest', type: 'movie' },
    { win: 'Horrid Henry', type: 'tv' },
    { win: 'Nativity', type: 'movie' },
    { win: 'Freaks and Geeks', type: 'tv' },
    { win: 'Talk to Me', type: 'movie' },
    { win: 'Scanners', type: 'movie' },
    { win: 'Suits', type: 'tv' },
    { win: 'Birdman or (The Unexpected Virtue of Ignorance)', type: 'movie' },
    { win: 'Upload', type: 'tv' },
    { win: 'Mr Inbetween', type: 'tv' },
    { win: 'Zardoz', type: 'movie' },
    { win: 'Fillmore!', type: 'tv' },
    { win: 'Power Rangers Time Force', type: 'tv' },
    { win: 'Lost in Translation', type: 'movie' },
    { win: 'Scavengers Reign', type: 'tv' },
    { win: 'National Lampoons Christmas Vacation', type: 'movie' },
    { win: 'Street Sharks', type: 'tv' },
    { win: 'Happy Gilmore', type: 'movie' },
    { win: 'Space Cop', type: 'movie' },
    { win: 'Fargo', type: 'tv' },
    { win: 'Metástasis', type: 'tv' },
    { win: 'Die Hard', type: 'movie' },
    { win: 'Open Water', type: 'movie' },
    { win: 'Santa Inc.', type: 'tv' },
    { win: 'Now and Then', type: 'movie' },
    { win: 'Outnumbered', type: 'tv' },
    { win: 'Movie 43', type: 'movie' },
    { win: 'Would You Rather', type: 'movie' },
    { win: 'Wonka', type: 'movie' },
    { win: 'The Expanse', type: 'tv' }, 
    { win: 'Duck Soup', type: 'movie' },
    { win: 'Primal', type: 'tv' },
    { win: 'Young Justice', type: 'tv' },
    { win: 'Sense8', type: 'tv' },
    { win: 'Upgrade', type: 'movie' },
    { win: 'The Fly', type: 'movie' },
    { win: 'Whats with Andy?', type: 'tv' },
    { win: 'Matilda', type: 'movie' },
    { win: 'Coco', type: 'movie' },
    { win: 'My Life as a Teenage Robot', type: 'tv' },
    { win: 'Fosters Home for Imaginary Friends', type: 'tv' },
    { win: 'Ed, Edd n Eddy', type: 'tv' },
    { win: 'Metalocalypse', type: 'tv' },
    { win: 'Abbott Elementary', type: 'tv' },
    { win: 'Totally Spies!', type: 'tv' },
    { win: 'The Twlight Saga: Breaking Dawn - Part 1', type: 'movie' },
    { win: 'The Walking Dead', type: 'tv' },
    { win: 'Centurion', type: 'movie' },
    { win: 'Black Hawk Down', type: 'movie' },
    { win: 'Top Gun: Maverick', type: 'movie' },
    { win: 'Barry', type: 'tv' },
    { win: 'King of New York', type: 'movie' },
    { win: 'Breaking Bad', type: 'tv' },
    { win: 'Scary Movie 2', type: 'movie' },
    { win: 'Sing', type: 'movie' },
    { win: 'Malcolm in the Middle', type: 'tv' },
    { win: 'Before Sunirse', type: 'movie' },
    { win: 'The Lovely Bones', type: 'movie' },
    { win: 'Video & Arcade Top 10', type: 'tv' },
    { win: 'Final Space', type: 'tv' },
    { win: 'Basic Instinct', type: 'movie' },
    { win: 'The Maxx', type: 'tv' },
    { win: 'Minions: The Rise of Gru', type: 'movie' },
    { win: 'Lion', type: 'movie' },
    { win: 'King of the Hill', type: 'tv' },
    { win: 'The Raid: Redemption', type: 'movie' },
    { win: 'Thief', type: 'movie' },
    { win: 'Community', type: 'tv' },
    { win: 'Cinema Paradiso', type: 'movie' },
    { win: 'The Da Vinci Code', type: 'movie' },
    { win: 'Hit-Monkey', type: 'tv' },
    { win: 'Danny Phantom', type: 'tv' },
    { win: 'Impractical Jokers', type: 'tv' },
    { win: 'Sesame Street Mecha Builders', type: 'tv' },
    { win: 'Encanto', type: 'movie' },
    { win: 'Clarence', type: 'tv' },
    { win: 'Turbo', type: 'movie' },
    { win: 'Star Wars: Episode II - Attack of the Clones', type: 'movie' },
    { win: 'Yellowjackets', type: 'tv' },
    { win: 'Henry: Portrait of a Serial Killer', type: 'movie' },
    { win: 'The Princess Bride', type: 'movie' },
    { win: 'New Girl', type: 'tv' },
    { win: 'Roboroach', type: 'tv' },
    { win: 'Heartstopper', type: 'tv' },
    { win: 'Tarzan', type: 'movie' },
    { win: 'Star Trek', type: 'tv' },
    { win: 'Six Days Seven Nights', type: 'movie' },
    { win: 'DC League of Super-Pets', type: 'movie' },
    { win: 'Eerie, Indiana', type: 'tv' },
    { win: 'Untalkative Bunny', type: 'tv' },
    { win: 'Blindspotting', type: 'movie' },
    { win: 'The Master of Disguise', type: 'movie' },
    { win: 'Dora the Explorer', type: 'tv' },
    { win: 'The Office', type: 'tv' },
    { win: 'Gravity Falls', type: 'tv' },
    { win: 'Hereditary', type: 'movie' },
    { win: 'The Sopranos', type: 'tv' },
    { win: 'Nope', type: 'movie' },
    { win: 'Sonic the Hedgehog 2', type: 'movie' },
    { win: 'Black Panther: Wakanda Forever', type: 'movie' },
    { win: 'Blade', type: 'movie' },
    { win: 'Bonkers', type: 'tv' },
    { win: 'Batman: The Animated Series', type: 'tv' },
    { win: 'Mighty Morphin Power Rangers', type: 'tv' },
    { win: 'Bedtime for Bonzo', type: 'movie' },
    { win: 'Ancient Apocalypse', type: 'tv' },
    { win: 'Morbius', type: 'movie' },
    { win: 'Little Miss Sunshine', type: 'movie' },
    { win: 'Pain & Gain', type: 'movie' },
    { win: 'The Lord of the Rings: The Rings of Power', type: 'tv' },
    { win: 'WandaVision', type: 'tv' },
    { win: 'Scrubs', type: 'tv' },
    { win: 'Kingsman: The Secret Service', type: 'movie' },
    { win: 'Spartacus', type: 'tv' },
    { win: 'WALL-E', type: 'movie' },
    { win: 'Scoob!', type: 'movie' },
    { win: 'It is Always Sunny in Philadelphia', type: 'tv' },
    { win: 'Final Space', type: 'tv' },
    { win: 'Bucky OHare and the Toad Wars!', type: 'tv' },
    { win: 'Shaolin Soccer', type: 'movie' },
    { win: 'Eternal Sunshine of the Spotless Mind', type: 'movie' },
    { win: 'The Peripheral', type: 'tv' },
    { win: 'The Munsters', type: 'tv' },
    { win: 'The Nightmare Before Christmas', type: 'movie' },
    { win: 'Moon Knight', type: 'tv' },
    { win: 'Christmas in Wonderland', type: 'movie' },
    { win: 'Dead End: Paranormal Park', type: 'tv' },
    { win: 'Lyle, Lyle, Crocodile', type: 'movie' },
    { win: 'Tremors', type: 'movie' },
    { win: 'Eliot Kid', type: 'tv' },
    { win: 'Curious George: A Very Monkey Christmas', type: 'movie' },
    { win: 'Moshi Monsters: The Movie', type: 'movie' },
    { win: 'Inspector Gadget', type: 'tv' },
    { win: 'Murder, She Wrote', type: 'tv' },
    { win: 'Your Name.', type: 'movie' },
    { win: 'The Last Airbender', type: 'movie' },
    { win: 'Spirited', type: 'movie' },
    { win: 'The Majestic', type: 'movie' },
    { win: 'My Life as a Teenage Robot', type: 'tv' },
    { win: 'Kid vs. Kat', type: 'tv' },
    { win: 'Fairly Oddparents', type: 'tv' },
    { win: '2012', type: 'movie' },
    { win: 'The Haunting of Hill House', type: 'tv' },
    { win: 'Nathan for You', type: 'tv' },
    { win: 'Succession', type: 'tv' },
    { win: 'The Rehearsal', type: 'tv' },
    { win: 'Five Nights at Freddys', type: 'movie' },
    { win: 'The Super Mario Bros. Movie', type: 'movie' },
    { win: 'Jimmy Neutron: Boy Genius', type: 'movie' },
    { win: 'Tough As Nails', type: 'tv' },
    { win: 'Claim to Fame', type: 'tv' },
    { win: 'The Thing', type: 'movie' },
    { win: 'Ted', type: 'tv' },
    { win: 'The Shining', type: 'movie' },
    { win: 'The Florida Project', type: 'movie' },
    { win: 'Les Miserables', type: 'tv' },
    { win: 'Punky Brewster', type: 'tv' },
    { win: 'Ghosts', type: 'tv' },
    { win: 'The Hunger Games: The Ballad of Songbirds & Snakes', type: 'movie' },
    { win: 'Jake and the Never Land Pirates', type: 'tv' },
    { win: 'The Tunnel to Summer, the Exit of Goodbyes', type: 'movie' },
    { win: 'Blue Eye Samurai', type: 'tv' },
    { win: 'Delicatessen', type: 'movie' },
    { win: 'Deliverance', type: 'movie' },
    { win: 'Penny Dreadful', type: 'tv' },
    { win: 'Patton', type: 'movie' },
    { win: 'Thelma & Louise', type: 'movie' },
    { win: 'Kramer vs. Kramer', type: 'movie' },
    { win: 'Kung Fu Sock', type: 'tv' },
    { win: 'Happy Feet', type: 'movie' },
    { win: 'A Goofy Movie', type: 'movie' },
    { win: 'Twin Peaks', type: 'tv' },
    { win: 'Silo', type: 'tv' },
    { win: 'Scenes from a Marriage', type: 'tv' },
    { win: 'Third Star', type: 'movie' },
    { win: 'Happy Gilmore', type: 'movie' },
    { win: 'Archer', type: 'tv' },
    { win: 'Roald Dahls Matilda the Musical', type: 'movie' },
    { win: 'Talk to me', type: 'movie' },
    { win: 'Percy Jackson and the Olympians', type: 'tv' },
    { win: 'Women on the Verge of a Nervous Breakdown', type: 'movie' },
    { win: 'Crashing', type: 'tv' },
    { win: 'The Durrells', type: 'tv' },
    { win: 'The Miseducation of Cameron Post', type: 'movie' },
    { win: 'The Tudors', type: 'tv' },
    { win: 'Its a Sin', type: 'tv' },
    { win: 'Ferrari', type: 'movie' },
    { win: 'Legion', type: 'tv' },
    { win: 'Metropolis', type: 'movie' },
    { win: 'Little Shop of Horrors', type: 'movie' },
    { win: 'Estate of Panic', type: 'tv' },
    { win: 'Madame Web', type: 'movie' },
    { win: 'Mr. & Mrs. Smith', type: 'tv' },
    { win: 'The Killers', type: 'movie' },
    { win: 'Alice Upside Down', type: 'movie' },
    { win: 'Charlie and the Chocolate Factory', type: 'movie' },
    { win: 'Dinosaurs', type: 'tv' },
    { win: 'Superstore', type: 'tv' },
    { win: 'Cousin Skeeter', type: 'tv' },
    { win: 'Salaar: Cease Fire - Part 1', type: 'movie' },
    { win: 'Squid Game', type: 'tv' },
    { win: 'Detention', type: 'movie' },
    { win: 'Jawbreaker', type: 'movie' },
    { win: 'Batman Beyond', type: 'tv' },
    { win: 'Avatar: The Last Airbender 2024', type: 'tv' },
    { win: 'Shogun', type: 'tv' },
    { win: 'Navalny', type: 'movie' },
    { win: 'Love, Death & Robots', type: 'tv' },
    { win: 'Jersey Shore', type: 'tv' },
    { win: 'The Green Mile', type: 'movie' },
    { win: 'Blood: The Last Vampire', type: 'movie' },
    { win: 'Hazbin Hotel', type: 'tv' },
    { win: 'Helluva Boss', type: 'tv' },
    { win: 'The Adventures of Baron Muchausen', type: 'movie' },
    { win: 'Dragon Ball Z', type: 'tv' },
    { win: 'Before Sunrise', type: 'movie' },
    { win: 'From', type: 'tv' },
    { win: 'Away from Her', type: 'movie' },
    { win: 'A Better Tomorrow', type: 'movie' },
    { win: 'Peaky Blinders', type: 'tv' },
    { win: 'Strata of the Image', type: 'movie' },
    { win: 'Fleabag', type: 'tv' },
    { win: 'Rudy', type: 'movie' },
    { win: 'Flushed Away', type: 'movie' },
    { win: 'Johnny Sokko and his Flying Robot', type: 'tv' },
    { win: 'Prisoners', type: 'movie' },
    { win: 'My Perfect Landing', type: 'tv' },
    { win: 'Inception', type: 'movie' },
    { win: 'Ghostbusters: Frozen Empire', type: 'movie' },
    { win: 'Whats My Line', type: 'tv' },
    { win: 'The Gentlemen', type: 'tv' },
    { win: 'Everything Everywhere All at Once', type: 'movie' },
    { win: 'The Golden Girls', type: 'tv' },
    { win: 'Ninotchka', type: 'movie' },
    { win: 'Norma Rae', type: 'movie' },
    { win: 'Hannibal', type: 'tv' },
    { win: 'The Princess Bride', type: 'movie' },
    { win: 'Your Name', type: 'movie' },
    { win: 'Indiana Jones and the Raiders of the Lost Ark', type: 'movie' },
    { win: 'Indiana Jones and Temple of Doom', type: 'movie' },
    { win: 'Harley Quinn', type: 'tv' },
    { win: 'Cobra Kai', type: 'tv' },
    { win: 'Who Killed Captain Alex?', type: 'movie' },
    { win: 'Mulholland Drive', type: 'movie' },
    { win: 'South Park', type: 'tv' },
    { win: 'Detectorists', type: 'tv' },
    { win: 'Meet the Robinsons', type: 'movie' },
    { win: 'Wishbone', type: 'tv' },
    { win: 'Tinker Bell and the Legend of the NeverBeast', type: 'movie' },
    { win: 'What If...', type: 'tv' },
    { win: 'The Karate Kid', type: 'movie' },
    { win: 'Spider-Man: No Way Home', type: 'movie' },
    { win: 'How I Met Your Mother', type: 'tv' },
    { win: 'Blue Mountain State', type: 'tv' },
    { win: 'Peacemaker', type: 'tv' },
    { win: 'The Suicide Squad', type: 'movie' },
    { win: 'Boiling Point', type: 'movie' },
    { win: 'Gotham', type: 'tv' },
    { win: 'Something I Wont Miss Not Getting a Banner on in 40ish Minutes', type: 'movie' },
    { win: 'Inside Job', type: 'tv' },
    { win: 'Thomas and Friends', type: 'tv' },
    { win: 'Arcane', type: 'tv' },
    { win: 'King of the Hill', type: 'tv' },
    { win: 'Bee Movie', type: 'movie' },
    { win: 'Loki', type: 'tv' },
    { win: 'Thank You for Smoking', type: 'movie' },
    { win: 'People Just Do Nothing', type: 'tv' },
    { win: 'Friends', type: 'tv' },
    { win: 'The Place Beyond the Pines', type: 'movie' },
    { win: 'Law & Order: Special Victims Unit', type: 'tv' },
    { win: 'Flee', type: 'movie' },
    { win: 'Westworld', type: 'tv' },
    { win: 'Bob Burgers', type: 'tv' },
    { win: 'The Holy Mountain', type: 'movie' },
    { win: 'Scott Pilgrim vs. the World', type: 'movie' },
    { win: 'Wallace & Gromits Cracking Contraptions', type: 'tv' },
    { win: 'Behind the Curve', type: 'movie' },
    { win: 'The Avengers', type: 'movie' },
    { win: 'Nightmare Alley', type: 'movie' },
    { win: 'Its Always Sunny In Philadelphia', type: 'tv' },
    { win: 'Family Guy', type: 'tv' },
    { win: 'Cars 2', type: 'movie' },
    { win: 'The House Bunny', type: 'movie' },
    { win: 'Amphibia', type: 'tv' },
    { win: 'Stir of Echoes', type: 'movie' },
    { win: 'Into the Badlands', type: 'tv' },
    { win: 'Criminal Minds', type: 'tv' },
    { win: 'Daredevil', type: 'tv' },
    { win: 'Avengers: Infinity War', type: 'movie' },
    { win: 'Dora and the Lost City of Gold', type: 'movie' },
    { win: 'Robot Chicken', type: 'tv' },
    { win: 'The Lion King', type: 'movie' },
    { win: 'The Powerpuff Girls', type: 'tv' },
    { win: 'Rick and Morty', type: 'tv' },
    { win: 'Superhero Movie', type: 'movie' },
    { win: 'The Master', type: 'movie' },
    { win: 'The Boys', type: 'tv' },
    { win: 'The Kings Speech', type: 'movie' },
    { win: 'Sling Blade', type: 'movie' },
    { win: 'Body Heat', type: 'movie' },
    { win: 'Gambit', type: 'movie' },
    { win: 'Supernatural', type: 'tv' },
    { win: 'We Bare Bears', type: 'tv' },
    { win: 'Jaws', type: 'movie' },
    { win: 'Kiss of the Spider Woman', type: 'movie' },
    { win: 'Legion', type: 'tv' },
    { win: 'Luke Cage', type: 'tv' },
    { win: 'Rome', type: 'tv' },
    { win: 'Spartacus', type: 'tv' },
    { win: 'Spider-Man: Into the Spider-Verse', type: 'movie' },
    { win: 'Firefly', type: 'tv' },
    { win: 'Invincible', type: 'tv' },
    { win: 'Turning Red', type: 'movie' },
    { win: 'Avatar: The Last Airbender 2005', type: 'tv' },
    { win: 'The Legend of Korra', type: 'tv' },
    { win: 'Avatar', type: 'movie' },
    { win: 'The Karate Kid Part III', type: 'movie' },
    { win: 'Shaolin Vs Wu Tang', type: 'movie' },
    { win: 'The Gnome-Mobile', type: 'movie' },
    { win: 'Star Wars: The Clone Wars', type: 'tv' },
    { win: 'Titane', type: 'movie' },
    { win: 'Bojack Horseman', type: 'tv' },
    { win: 'Morbius', type: 'movie' },
    { win: 'Gilbert', type: 'movie' },
    { win: 'Recess', type: 'tv' },
    { win: 'Strange Frame: Love & Sax', type: 'movie' },
    { win: 'Magnum PI', type: 'tv' },
    { win: 'Pokémon Detective Pikachu', type: 'movie' },
    { win: 'Mission Hill', type: 'tv' },
    { win: 'Knives Out', type: 'movie' },
    { win: 'Blood of Zeus', type: 'tv' },
    { win: 'Lost', type: 'tv' },
    { win: 'The Raid: Redemption', type: 'movie' },
    { win: 'The Hebrew Hammer', type: 'movie' },
    { win: 'The Handmaids Tale', type: 'tv' },
    { win: 'Aladdin', type: 'movie' },
    { win: 'Fringe', type: 'tv' },
    { win: 'Moon Knight', type: 'tv' },
    { win: 'Taxi Driver', type: 'movie' },
    { win: 'Smiling Friends', type: 'tv' },
    { win: 'Indiana Jones and the Last Crusade', type: 'movie' },
    { win: 'Courage the Cowardly Dog', type: 'tv' },
    { win: 'Wacky Races', type: 'tv' },
    { win: 'Empire Records', type: 'movie' },
    { win: 'The Bad Guys', type: 'movie' },
    { win: 'Krull', type: 'movie' },
    { win: '30 Rock', type: 'tv' },
    { win: 'O Brother Where Art Thou?', type: 'movie' },
    { win: 'All of Us Are Dead', type: 'tv' },
    { win: 'Love Simon', type: 'movie' },
    { win: 'Lilo & Stitch', type: 'movie' },
    { win: 'tick tick...BOOM!', type: 'movie' },
    { win: 'Drop Dead Diva', type: 'tv' },
    { win: 'Whip It', type: 'movie' },
    { win: 'Codename: Kids Next Door', type: 'tv' },
    { win: 'Teletubbies', type: 'tv' },
    { win: 'Peppa Pig', type: 'tv' },
    { win: 'Jackie Chan Adventures', type: 'tv' },
    { win: 'Mad Jack the Pirate', type: 'tv' },
    { win: 'Cars', type: 'movie' },
    { win: 'My Cousin Vinny', type: 'movie' },
    { win: 'Pacific Rim', type: 'movie' },
    { win: 'The Great', type: 'tv' },
    { win: 'Reacher', type: 'tv' },
    { win: 'Pokémon: The Rise of Darkrai', type: 'movie' },
    { win: 'Killer Ratings', type: 'tv' },
    { win: 'Onward', type: 'movie' },
    { win: 'Adventure Time', type: 'tv' },
    { win: 'The Harder They Fall', type: 'movie' },
    { win: 'Blade Runner', type: 'movie' },
    { win: 'Goodfellas', type: 'movie' },
    { win: 'Doctor Strange in the Multiverse of Madness', type: 'movie' },
    { win: 'Fresh', type: 'movie' },
    { win: 'Love Death & Robots', type: 'tv' },
    { win: 'Duck Soup', type: 'movie' },
    { win: 'Primal', type: 'tv' },
    { win: 'Young Justice', type: 'tv' },
    { win: 'Sense8', type: 'tv' },
    { win: 'Upgrade', type: 'movie' },
    { win: 'The Fly', type: 'movie' },
    { win: 'Whats with Andy?', type: 'tv' },
    { win: 'Matilda', type: 'movie' },
    { win: 'Coco', type: 'movie' },
    { win: 'My Life as a Teenage Robot', type: 'tv' },
    { win: 'Fosters Home for Imaginary Friends', type: 'tv' },
    { win: 'Ed Edd n Eddy', type: 'tv' },
    { win: 'Metalocalypse', type: 'tv' },
    { win: 'Hoodwinked', type: 'movie' },
    { win: 'Abbott Elementary', type: 'tv' },
    { win: 'Totally Spies!', type: 'tv' },
    { win: 'The Twlight Saga Breaking Dawn - Part 1', type: 'movie' },
    { win: 'The Walking Dead', type: 'tv' },
    { win: 'Centurion', type: 'movie' },
    { win: 'Black Hawk Down', type: 'movie' },
    { win: 'Top Gun Maverick', type: 'movie' },
    { win: 'Kung Fu Hustle', type: 'movie' },
    { win: 'Barry', type: 'tv' },
    { win: 'King of New York', type: 'movie' },
    { win: 'Breaking Bad', type: 'tv' },
    { win: 'Scary Movie 2', type: 'movie' },
    { win: 'Sing', type: 'movie' },
    { win: 'Malcolm in the Middle', type: 'tv' },
    { win: 'Before Sunirse', type: 'movie' },
    { win: 'The Lovely Bones', type: 'movie' },
    { win: 'Video & Arcade Top 10', type: 'tv' },
    { win: 'Final Space', type: 'tv' },
    { win: 'Basic Instinct', type: 'movie' },
    { win: 'Hot Fuzz', type: 'movie' },
    { win: 'The Maxx', type: 'tv' },
    { win: 'Minions The Rise of Gru', type: 'movie' },
    { win: 'Lion', type: 'movie' },
    { win: 'Thief', type: 'movie' },
    { win: 'Community', type: 'tv' },
    { win: 'Cinema Paradiso', type: 'movie' },
    { win: 'The Da Vinci Code', type: 'movie' },
    { win: 'Hit-Monkey', type: 'tv' },
    { win: 'Danny Phantom', type: 'tv' },
    { win: 'Impractical Jokers', type: 'tv' },
    { win: 'Sesame Street Mecha Builders', type: 'tv' },
    { win: 'Encanto', type: 'movie' },
    { win: 'Clarence', type: 'tv' },
    { win: 'Turbo', type: 'movie' },
    { win: 'Star Wars Episode II - Attack of the Clones', type: 'movie' },
    { win: 'Yellowjackets', type: 'tv' },
    { win: 'Henry Portrait of a Serial Killer', type: 'movie' },
    { win: 'Pokémon', type: 'tv' },
    { win: 'New Girl', type: 'tv' },
    { win: 'Sky Captain and the World of Tomorrow', type: 'movie' },
    { win: 'Roboroach', type: 'tv' },
    { win: 'Tarzan', type: 'movie' },
    { win: 'Star Trek', type: 'tv' },
    { win: 'Six Days Seven Nights', type: 'movie' },
    { win: 'DC League of Super-Pets', type: 'movie' },
    { win: 'Eerie Indiana', type: 'tv' },
    { win: 'Untalkative Bunny', type: 'tv' },
    { win: 'Blindspotting', type: 'movie' },
    { win: 'The Master of Disguise', type: 'movie' },
    { win: 'Dora the Explorer', type: 'tv' },
    { win: 'The Office', type: 'tv' },
    { win: 'Gravity Falls', type: 'tv' },
    { win: 'Hereditary', type: 'movie' },
    { win: 'The Sopranos', type: 'tv' },
    { win: 'Love Death & Robots', type: 'tv' },
    { win: 'Nope', type: 'movie' },
    { win: 'Sonic the Hedgehog 2', type: 'movie' },
    { win: 'Utopia', type: 'tv' },
    { win: 'Blade Runner 2049', type: 'movie' },
    { win: 'Soap', type: 'tv' },
    { win: 'Animal Crackers', type: 'movie' },
    { win: 'Only Murders in the Building', type: 'tv' },
    { win: 'Palm Springs', type: 'movie' },
    { win: 'Possession', type: 'movie' },
    { win: 'Blue Velvet', type: 'movie' },
    { win: 'Minions', type: 'movie' },
    { win: 'Despicable Me', type: 'movie' },
    { win: 'Max & Ruby', type: 'tv' },
    { win: 'For All Mankind', type: 'tv' },
    { win: 'Clueless', type: 'movie' },
    { win: 'Two and a Half Men', type: 'tv' },
    { win: 'First Kill', type: 'tv' },
    { win: 'See', type: 'tv' },
    { win: 'Secret Mountain Fort Awesome', type: 'tv' },
    { win: 'Kin-dza-dza!', type: 'movie' },
    { win: 'Donnie Brasco', type: 'movie' },
    { win: 'Young Royals', type: 'tv' },
    { win: 'Everything Everywhere All at Once', type: 'movie' },
    { win: 'Toon in with Me', type: 'tv' },
    { win: 'Meta Runner', type: 'tv' },
    { win: 'Animal Crossing The Movie', type: 'movie' },
    { win: 'The Amanda Show', type: 'tv' },
    { win: 'Shutter Island', type: 'movie' },
    { win: 'Grease', type: 'movie' },
    { win: 'Biker Mouse from Mars', type: 'tv' },
    { win: 'Concrete Cowboy', type: 'movie' },
    { win: 'Happiest Season', type: 'movie' },
    { win: 'Dickinson', type: 'tv' },
    { win: 'Kenan & Kel', type: 'tv' },
    { win: 'RIPD', type: 'movie' },
    { win: 'Regular Show', type: 'tv' },
    { win: 'Poltergeist', type: 'movie' },
    { win: 'RWBY', type: 'tv' },
    { win: 'Lucifer', type: 'tv' },
    { win: 'Do Revenge', type: 'movie' },
    { win: 'Narcos', type: 'tv' },
    { win: "Tattooed Teenage Alien Fighters from Beverly Hills", type: "tv" },
    { win: "The Incredibles", type: "movie" },
    { win: "The Smurfs", type: "tv" },
    { win: "Mean Girls", type: "movie" },
    { win: "Bros", type: "movie" },
    { win: "Beetlejuice", type: "movie" },
    { win: "The Boys", type: "tv" },
    { win: "Kitchen Nightmares", type: "tv" },
    { win: "Sucker Punch", type: "movie" },
    { win: "Dodgeball: A True Underdog Story", type: "movie" },
    { win: "Casper the Friendly Ghost", type: "tv" },
    { win: "Chinatown", type: "movie" },
    { win: "Network", type: "movie" },
    { win: "Wunschpunsch", type: "tv" },
    { win: "Rick and Morty", type: "tv" },
    { win: "Killer Bean Forever", type: "movie" },
    { win: "Adventure Time", type: "tv" },
    { win: "Sky High", type: "movie" },
    { win: "Murder, She Wrote", type: "tv" },
    { win: "Dragnet", type: "tv" },
    { win: "Mighty Magiswords", type: "tv" },
    { win: "Encanto", type: "movie" },
    { win: "The Woman King", type: "movie" },
    { win: "Girl From Nowhere", type: "tv" },
    { win: "Enchanted", type: "movie" },
    { win: "Splash", type: "movie" },
    { win: "Alex Rider", type: "tv" },
    { win: "Killer Klowns from Outer Space", type: "movie" },
    { win: "The Owl House", type: "tv" },
    { win: "Avatar: The Last Airbender", type: "tv" },
    { win: "Rango", type: "movie" },
    { win: "The Wicker Man", type: "movie" },
    { win: "Pingu", type: "tv" },
    { win: "The Legend of Korra", type: "tv" },
    { win: "Chowder", type: "tv" },
    { win: "The Looney Tunes Show", type: "tv" },
    { win: "Tinkerbell", type: "movie" },
    { win: "Star Trek: Prodigy", type: "tv" },
    { win: "Turbo: A Power Rangers Movie", type: "movie" },
    { win: "Nathan for You", type: "tv" },
    { win: "Community", type: "tv" },
    { win: "Berberian Sound Studio", type: "movie" },
    { win: "The Patient", type: "tv" },
    { win: "Spider-Man 3", type: "movie" },
    { win: "Shrek 2", type: "movie" },
    { win: "Never Gonna Snow Again", type: "movie" },
    { win: "Doctor Who", type: "tv" },
    { win: "Black Panther: Wakanda Forever", type: "movie" },
    { win: "Blade", type: "movie" },
    { win: "Bonkers", type: "tv" },
    { win: "Batman: The Animated Series", type: "tv" },
    { win: "Mighty Morphin' Power Rangers", type: "tv" },
    { win: "Bedtime for Bonzo", type: "movie" },
    { win: "Trailer Park Boys", type: "tv" },
    { win: "Ancient Apocalypse", type: "tv" },
    { win: "Morbius", type: "movie" },
    { win: "Little Miss Sunshine", type: "movie" },
    { win: "Sonic the Hedgehog 2", type: "movie" },
    { win: "Pain & Gain", type: "movie" },
    { win: "The Lord of the Rings: The Rings of Power", type: "tv" },
    { win: "WandaVision", type: "tv" },
    { win: "Nope", type: "movie" },
    { win: "The Powerpuff Girls", type: "tv" },
    { win: "Belle", type: "movie" },
    { win: "Scrubs", type: "tv" },
    { win: "Kingsman: The Secret Service", type: "movie" },
    { win: "Spartacus", type: "tv" },
    { win: "WALL-E", type: "movie" },
    { win: "Scoob!", type: "movie" },
    { win: "It's Always Sunny in Philadelphia", type: "tv" },
    { win: "Final Space", type: "tv" },
    { win: "Bucky O'Hare and the Toad Wars!", type: "tv" },
    { win: "Shaolin Soccer", type: "movie" },
    { win: "Eternal Sunshine of the Spotless Mind", type: "movie" },
    { win: "The Peripheral", type: "tv" },
    { win: "The Munsters", type: "tv" },
    { win: "The Nightmare Before Christmas", type: "movie" },
    { win: "Moon Knight", type: "tv" },
    { win: "Christmas in Wonderland", type: "movie" },
    { win: "Dead End: Paranormal Park", type: "tv" },
    { win: "Lyle, Lyle, Crocodile", type: "movie" },
    { win: "Tremors", type: "movie" },
    { win: "Eliot Kid", type: "tv" },
    { win: "Curious George: A Very Monkey Christmas", type: "movie" },
    { win: "Moshi Monsters: The Movie", type: "movie" },
    { win: "Inspector Gadget", type: "tv" },
    { win: "The Walking Dead", type: "tv" },
    { win: "Criminal Minds", type: "tv" },
    { win: "Your Name.", type: "movie" },
    { win: "The Last Airbender", type: "movie" },
    { win: "Spirited", type: "movie" },
    { win: "The Majestic", type: "movie" },
    { win: "My Life as a Teenage Robot", type: "tv" },
    { win: "Kid vs. Kat", type: "tv" },
    { win: "Fairly Oddparents", type: "tv" },
    { win: "The Marvels", type: "movie"},
    { win: "Gen V", type: "tv"}
];


const uniqueTitlesWon = titlesWon.filter((title, index, self) =>
    index === self.findIndex((t) => (
        t.win === title.win && t.type === title.type
    ))
);

const win = Math.floor(Math.random() * uniqueTitlesWon.length);
const title = uniqueTitlesWon[win].win;
const type = uniqueTitlesWon[win].type;
const arg = type + ' ' + title;
tmdb(message, arg);

}

handleRandwin.requiresArgs = false;
module.exports = handleRandwin;