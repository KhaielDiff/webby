const topBar = document.querySelector(".top-bar");
const bottomBar = document.getElementById("bottomBar");
const circles = document.querySelectorAll(".bottom-bar .circle");
const searchInput = document.getElementById("searchBar");
const resultsContainer = document.getElementById("resultContainer");
const mainCircle = document.getElementById("mainCircle");
const searchContainer = document.getElementById("searchContainer");
const homeBtn = document.getElementById("homeBtn");
const commentBtn = document.getElementById("commentBtn");
const commentBar = document.getElementById("commentBar");
const menuBtn = document.getElementById("menuBtn");
const aboutBtn = document.getElementById("aboutBtn");
const aboutPage = document.getElementById("aboutPage");
const frontText = document.getElementById("frontText");
const paragraphs = aboutPage ?  aboutPage.querySelectorAll("p") : [];
const mainContainer = document.getElementById("mainContainer");
const params = new URLSearchParams(window.location.search);
const title = params.get("title");
const desc = params.get("desc");
const gameTitle = document.getElementById("gameTitle");
const gameDesc = document.getElementById("gameDesc");
const officialLink = document.getElementById("officialLink");
const tipsLink = document.getElementById("tipsLink");
const walkthroughLink = document.getElementById("walkthroughLink");
const forumLink = document.getElementById("forumLink");

const data = [
  { title: "Genshin-Impact", description: "Open-World RPG", link: "https://genshin.hoyoverse.com/", linkText: "Official Site", background: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Genshin_Impact_cover.png/220px-Genshin_Impact_cover.png" },
  { title: "Minecraft", description: "Sandbox Adventure", link: "https://www.minecraft.net/", linkText: "Official Site", background: "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Minecraft_cover.png/220px-Minecraft_cover.png" },
  { title: "Wuthering-Waves", description: "Open-World RPG", link: "https://wutheringwaves.kurogames.com/en/", linkText: "More Info", background: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Wuthering_Waves_logo.png" },
  { title: "Duet Night Abyss", description: "Open-World RPG", link: "https://duetnightabyss.dna-panstudio.com/#/home", linkText: "More Info", background: "https://via.placeholder.com/500x300?text=Open-World+RPG" },
  { title: "Mobile Legends", description: "MOBA game", link: "https://mobilelegends.com/", linkText: "Official Site", background: "https://via.placeholder.com/500x300?text=MOBA+game" },
  { title: "League Of Legends", description: "MOBA game", link: "https://www.leagueoflegends.com/", linkText: "Official Site", background: "https://via.placeholder.com/500x300?text=MOBA+game" },
  { title: "Call Of Duty Mobile", description: "Fps/Battle Royale Game", link: "https://www.callofduty.com/mobile", linkText: "Official Site", background: "https://via.placeholder.com/500x300?text=Fps/Battle+Royale+Game" },
  { title: "Pubg Mobile", description: "Fps/Battle Royale Game", link: "https://www.pubgmobile.com/", linkText: "Official Site", background: "https://via.placeholder.com/500x300?text=Fps/Battle+Royale+Game" },
  { title: "Honkai Star Rail", description: "Turn-Based RPG Game", link: "https://hsr.hoyoverse.com/", linkText: "Official Site", background: "https://via.placeholder.com/500x300?text=Turn-Based+RPG+Game" },
  { title: "God of War Ragnarok", description: "Action Adventure Game", link: "https://godofwar.playstation.com/", linkText: "Official Site", background: "https://upload.wikimedia.org/wikipedia/en/thumb/7/73/God_of_War_Ragnarok_cover.jpg/220px-God_of_War_Ragnarok_cover.jpg" },
  { title: "The Last of Us Part I", description: "Story-Driven Action Game", link: "https://en.wikipedia.org/wiki/The_Last_of_Us_Part_I", linkText: "More Info", background: "https://upload.wikimedia.org/wikipedia/en/thumb/2/25/The_Last_of_Us_Part_I_cover_art.jpg/220px-The_Last_of_Us_Part_I_cover_art.jpg" },
  { title: "The Last of Us Part II", description: "Story-Driven Action Game", link: "https://en.wikipedia.org/wiki/The_Last_of_Us_Part_II", linkText: "More Info", background: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/The_Last_of_Us_Part_II_artwork.jpg/220px-The_Last_of_Us_Part_II_artwork.jpg" },
  { title: "Spider-Man 2", description: "Superhero Action Game", link: "https://en.wikipedia.org/wiki/Marvel's_Spider-Man_2", linkText: "More Info", background: "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Spider-Man_2_cover_art.jpg/220px-Spider-Man_2_cover_art.jpg" },
  { title: "Ghost of Tsushima", description: "Open-World Samurai Game", link: "https://en.wikipedia.org/wiki/Ghost_of_Tsushima", linkText: "More Info", background: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Ghost_of_Tsushima.jpg/220px-Ghost_of_Tsushima.jpg" },
  { title: "Monster Hunter World", description: "Action RPG", link: "https://www.monsterhunter.com/world/", linkText: "Official Site", background: "https://via.placeholder.com/500x300?text=Action+RPG" },
  { title: "Monster Hunter Rise", description: "Action RPG", link: "https://www.monsterhunter.com/rise/", linkText: "Official Site", background: "https://via.placeholder.com/500x300?text=Action+RPG" },
  { title: "Baldur's Gate 3", description: "Turn-Based RPG", link: "https://baldursgate3.game/", linkText: "Official Site", background: "https://via.placeholder.com/500x300?text=Turn-Based+RPG" },
  { title: "Diablo IV", description: "Action RPG", link: "https://diablo4.blizzard.com/", linkText: "Official Site", background: "https://via.placeholder.com/500x300?text=Action+RPG" },
  { title: "Final Fantasy XV", description: "Fantasy RPG", link: "https://en.wikipedia.org/wiki/Final_Fantasy_XV", linkText: "More Info", background: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Final_Fantasy_XV_cover_art.png/220px-Final_Fantasy_XV_cover_art.png" },
  { title: "Final Fantasy VII Remake", description: "Action RPG", link: "https://en.wikipedia.org/wiki/Final_Fantasy_VII_Remake", linkText: "More Info", background: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Final_Fantasy_VII_Remake.jpg/220px-Final_Fantasy_VII_Remake.jpg" },
  { title: "Persona 5 Royal", description: "Turn-Based JRPG", link: "https://en.wikipedia.org/wiki/Persona_5_Royal", linkText: "More Info", background: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Persona_5_Royal_artwork.png/220px-Persona_5_Royal_artwork.png" },
  { title: "Dragon Ball FighterZ", description: "Anime Fighting Game", link: "https://en.wikipedia.org/wiki/Dragon_Ball_FighterZ", linkText: "More Info", background: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Dragon_Ball_FighterZ_cover.jpg/220px-Dragon_Ball_FighterZ_cover.jpg" },
  { title: "Tekken 8", description: "Fighting Game", link: "https://en.wikipedia.org/wiki/Tekken_8", linkText: "More Info", background: "https://via.placeholder.com/500x300?text=Fighting+Game" },
  { title: "Street Fighter 6", description: "Fighting Game", link: "https://en.wikipedia.org/wiki/Street_Fighter_6", linkText: "More Info", background: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Street_Fighter_6_box_art.jpg/220px-Street_Fighter_6_box_art.jpg" },
  { title: "Mortal Kombat 1", description: "Fighting Game", link: "https://en.wikipedia.org/wiki/Mortal_Kombat_1", linkText: "More Info", background: "https://via.placeholder.com/500x300?text=Fighting+Game" },
  { title: "Rainbow Six Siege", description: "Tactical FPS", link: "https://www.ubisoft.com/en-us/game/rainbow-six/siege", linkText: "Official Site", background: "https://via.placeholder.com/500x300?text=Tactical+FPS" },
  { title: "Battlefield 2042", description: "Military FPS", link: "https://www.ea.com/games/battlefield/battlefield-2042", linkText: "Official Site", background: "https://via.placeholder.com/500x300?text=Military+FPS" },
  { title: "Warzone", description: "Battle Royale FPS", link: "https://www.callofduty.com/warzone", linkText: "Official Site", background: "https://via.placeholder.com/500x300?text=Battle+Royale+FPS" },
  { title: "Destiny 2", description: "Sci-Fi FPS RPG", link: "https://www.bungie.net/7/en/Destiny2", linkText: "Official Site", background: "https://via.placeholder.com/500x300?text=Sci-Fi+FPS+RPG" },
  { title: "Halo Infinite", description: "Sci-Fi FPS", link: "https://www.halowaypoint.com/en-us/games/halo-infinite", linkText: "Official Site", background: "https://via.placeholder.com/500x300?text=Sci-Fi+FPS" },
  { title: "Genshin Impact", description: "Open-World RPG", link: "https://genshin.hoyoverse.com/", linkText: "CLICK ME", background: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Genshin_Impact_cover.png/220px-Genshin_Impact_cover.png" },
  { title: "Minecraft", description: "Sandbox Adventure", link: "https://www.minecraft.net/", linkText: "CLICK ME", background: "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Minecraft_cover.png/220px-Minecraft_cover.png" },
  { title: "Wuthering Waves", description: "Open-World RPG", link: "https://wutheringwaves.kurogames.com/en/", linkText: "CLICK ME", background: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Wuthering_Waves_logo.png" },
  { title: "Duet Night Abyss", description: "Open-World RPG", link: "https://duetnightabyss.dna-panstudio.com/#/home", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=Open-World+RPG" },
  { title: "Mobile Legends", description: "MOBA game", link: "https://mobilelegends.com/", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=MOBA+game" },
  { title: "League Of Legends", description: "MOBA game", link: "https://www.leagueoflegends.com/", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=MOBA+game" },
  { title: "Call Of Duty Mobile", description: "Fps/Battle Royale Game", link: "https://www.callofduty.com/mobile", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=Fps/Battle+Royale+Game" },
  { title: "Pubg Mobile", description: "Fps/Battle Royale Game", link: "https://www.pubgmobile.com/", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=Fps/Battle+Royale+Game" },
  { title: "Honkai Star Rail", description: "Turn-Based RPG Game", link: "https://hsr.hoyoverse.com/", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=Turn-Based+RPG+Game" },
  { title: "God of War Ragnarok", description: "Action Adventure Game", link: "https://godofwar.playstation.com/", linkText: "CLICK ME", background: "https://upload.wikimedia.org/wikipedia/en/thumb/7/73/God_of_War_Ragnarok_cover.jpg/220px-God_of_War_Ragnarok_cover.jpg" },
  { title: "The Last of Us Part I", description: "Story-Driven Action Game", link: "https://en.wikipedia.org/wiki/The_Last_of_Us_Part_I", linkText: "CLICK ME", background: "https://upload.wikimedia.org/wikipedia/en/thumb/2/25/The_Last_of_Us_Part_I_cover_art.jpg/220px-The_Last_of_Us_Part_I_cover_art.jpg" },
  { title: "The Last of Us Part II", description: "Story-Driven Action Game", link: "https://en.wikipedia.org/wiki/The_Last_of_Us_Part_II", linkText: "CLICK ME", background: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/The_Last_of_Us_Part_II_artwork.jpg/220px-The_Last_of_Us_Part_II_artwork.jpg" },
  { title: "Spider-Man 2", description: "Superhero Action Game", link: "https://en.wikipedia.org/wiki/Marvel's_Spider-Man_2", linkText: "CLICK ME", background: "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Spider-Man_2_cover_art.jpg/220px-Spider-Man_2_cover_art.jpg" },
  { title: "Ghost of Tsushima", description: "Open-World Samurai Game", link: "https://en.wikipedia.org/wiki/Ghost_of_Tsushima", linkText: "CLICK ME", background: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Ghost_of_Tsushima.jpg/220px-Ghost_of_Tsushima.jpg" },
  { title: "Monster Hunter World", description: "Action RPG", link: "https://www.monsterhunter.com/world/", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=Action+RPG" },
  { title: "Monster Hunter Rise", description: "Action RPG", link: "https://www.monsterhunter.com/rise/", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=Action+RPG" },
  { title: "Baldur's Gate 3", description: "Turn-Based RPG", link: "https://baldursgate3.game/", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=Turn-Based+RPG" },
  { title: "Diablo IV", description: "Action RPG", link: "https://diablo4.blizzard.com/", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=Action+RPG" },
  { title: "Final Fantasy XV", description: "Fantasy RPG", link: "https://en.wikipedia.org/wiki/Final_Fantasy_XV", linkText: "CLICK ME", background: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Final_Fantasy_XV_cover_art.png/220px-Final_Fantasy_XV_cover_art.png" },
  { title: "Final Fantasy VII Remake", description: "Action RPG", link: "https://en.wikipedia.org/wiki/Final_Fantasy_VII_Remake", linkText: "CLICK ME", background: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Final_Fantasy_VII_Remake.jpg/220px-Final_Fantasy_VII_Remake.jpg" },
  { title: "Persona 5 Royal", description: "Turn-Based JRPG", link: "https://en.wikipedia.org/wiki/Persona_5_Royal", linkText: "CLICK ME", background: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Persona_5_Royal_artwork.png/220px-Persona_5_Royal_artwork.png" },
  { title: "Dragon Ball FighterZ", description: "Anime Fighting Game", link: "https://en.wikipedia.org/wiki/Dragon_Ball_FighterZ", linkText: "CLICK ME", background: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Dragon_Ball_FighterZ_cover.jpg/220px-Dragon_Ball_FighterZ_cover.jpg" },
  { title: "Tekken 8", description: "Fighting Game", link: "https://en.wikipedia.org/wiki/Tekken_8", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=Fighting+Game" },
  { title: "Street Fighter 6", description: "Fighting Game", link: "https://en.wikipedia.org/wiki/Street_Fighter_6", linkText: "CLICK ME", background: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Street_Fighter_6_box_art.jpg/220px-Street_Fighter_6_box_art.jpg" },
  { title: "Mortal Kombat 1", description: "Fighting Game", link: "https://en.wikipedia.org/wiki/Mortal_Kombat_1", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=Fighting+Game" },
  { title: "Rainbow Six Siege", description: "Tactical FPS", link: "https://www.ubisoft.com/en-us/game/rainbow-six/siege", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=Tactical+FPS" },
  { title: "Battlefield 2042", description: "Military FPS", link: "https://www.ea.com/games/battlefield/battlefield-2042", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=Military+FPS" },
  { title: "Warzone", description: "Battle Royale FPS", link: "https://www.callofduty.com/warzone", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=Battle+Royale+FPS" },
  { title: "Destiny 2", description: "Sci-Fi FPS RPG", link: "https://www.bungie.net/7/en/Destiny2", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=Sci-Fi+FPS+RPG" },
  { title: "Halo Infinite", description: "Sci-Fi FPS", link: "https://www.halowaypoint.com/en-us/games/halo-infinite", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=Sci-Fi+FPS" },
  { title: "Hades", description: "Rogue-Like Action Game", link: "https://www.supergiantgames.com/games/hades/", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=Rogue-Like+Action+Game" },
  { title: "Dead Cells", description: "Rogue-Like Platformer", link: "https://dead-cells.com/", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=Rogue-Like+Platformer" },
  { title: "Cuphead", description: "Run and Gun Game", link: "https://www.cupheadgame.com/", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=Run+and+Gun+Game" },
  { title: "Undertale", description: "Indie RPG", link: "https://undertale.com/", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=Indie+RPG" },
  { title: "Celeste", description: "Platformer Game", link: "https://en.wikipedia.org/wiki/Celeste_(video_game)", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=Platformer+Game" },
  { title: "Hollow Knight", description: "Metroidvania Game", link: "https://www.hollowknight.com/", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=Metroidvania+Game" },
  { title: "Inside", description: "Puzzle Platformer", link: "https://en.wikipedia.org/wiki/Inside_(video_game)", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=Puzzle+Platformer" },
  { title: "Little Nightmares", description: "Puzzle Horror Game", link: "https://en.wikipedia.org/wiki/Little_Nightmares", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=Puzzle+Horror+Game" },
  { title: "Valorant", description: "Tactical FPS Game", link: "https://playvalorant.com/", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=Tactical+FPS+Game" },
  { title: "Apex Legends", description: "Battle Royale FPS", link: "https://www.ea.com/games/apex-legends", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=Battle+Royale+FPS" },
  { title: "Fortnite", description: "Battle Royale Game", link: "https://www.epicgames.com/fortnite/", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=Battle+Royale+Game" },
  { title: "Roblox", description: "Online Sandbox Platform", link: "https://www.roblox.com/", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=Online+Sandbox+Platform" },
  { title: "Free Fire", description: "Battle Royale Mobile Game", link: "https://www.freefiremobile.com/", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=Battle+Royale+Mobile+Game" },
  { title: "Clash Of Clans", description: "Strategy Mobile Game", link: "https://supercell.com/en/games/clashofclans/", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=Strategy+Mobile+Game" },
  { title: "Clash Royale", description: "Strategy Card Battle Game", link: "https://supercell.com/en/games/clashroyale/", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=Strategy+Card+Battle+Game" },
  { title: "Among Us", description: "Multiplayer Party Game", link: "https://www.innersloth.com/gameAmongUs.php", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=Multiplayer+Party+Game" },
  { title: "Elden Ring", description: "Action RPG", link: "https://www.eldenring.com/", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=Action+RPG" },
  { title: "Grand Theft Auto V", description: "Open-World Action Game", link: "https://en.wikipedia.org/wiki/Grand_Theft_Auto_V", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=Open-World+Action+Game" },
  { title: "Red Dead Redemption 2", description: "Open-World Adventure", link: "https://en.wikipedia.org/wiki/Red_Dead_Redemption_2", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=Open-World+Adventure" },
  { title: "The Witcher 3", description: "Story-Driven RPG", link: "https://en.wikipedia.org/wiki/The_Witcher_3:_Wild_Hunt", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=Story-Driven+RPG" },
  { title: "Cyberpunk 2077", description: "Open-World Sci-Fi RPG", link: "https://www.cyberpunk.net/", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=Open-World+Sci-Fi+RPG" },
  { title: "Resident Evil 4", description: "Survival Horror Game", link: "https://en.wikipedia.org/wiki/Resident_Evil_4", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=Survival+Horror+Game" },
  { title: "Dark Souls III", description: "Action RPG", link: "https://en.wikipedia.org/wiki/Dark_Souls_III", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=Action+RPG" },
  { title: "Terraria", description: "2D Sandbox Adventure", link: "https://terraria.org/", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=2D+Sandbox+Adventure" },
  { title: "Overwatch 2", description: "Hero Shooter Game", link: "https://playoverwatch.com/", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=Hero+Shooter+Game" },
  { title: "Dota 2", description: "MOBA Game", link: "https://www.dota2.com/", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=MOBA+Game" },
  { title: "FIFA 24", description: "Football Simulation Game", link: "https://en.wikipedia.org/wiki/FIFA_24", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=Football+Simulation+Game" },
  { title: "NBA 2K24", description: "Basketball Simulation Game", link: "https://en.wikipedia.org/wiki/NBA_2K24", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=Basketball+Simulation+Game" },
  { title: "Summertime-saga", description: "Adventure Game", link: "https://en.wikipedia.org/wiki/NBA_2K24", linkText: "CLICK ME", background: "https://via.placeholder.com/500x300?text=Basketball+Simulation+Game" }

];

if (gameTitle) gameTitle.textContent = title || "Game Not Found";
if (gameDesc) gameDesc.textContent = desc || "Description not available";


if (title) {
  const item = data.find(d => d.title === title);
  

  if (mainContainer && item) {
  }

  if (item) {
    const encodedTitle = encodeURIComponent(item.title);

    if (officialLink) {
      if (item.link && item.link !== "#") {
        officialLink.href = item.link;
        officialLink.target = "_blank";
      } else {
        officialLink.style.display = "none";
      }
    }

    if (tipsLink) {
      tipsLink.href = `https://game8.co/games/${encodedTitle}/`;
      tipsLink.target = "_blank";
    }

    if (walkthroughLink) {
      walkthroughLink.href = `https://www.youtube.com/results?search_query=${encodedTitle}+walkthrough`;
      walkthroughLink.target = "_blank";
    }

    if (forumLink) {
      forumLink.href = `https://www.reddit.com/search/?q=${encodedTitle}`;
      forumLink.target = "_blank";
    }
  } else {
    if (mainContainer) {
      mainContainer.style.backgroundImage = `url(https://via.placeholder.com/500x300?text=No+Image+Available)`;
    }
  }
}


function renderResults(items) {
  resultsContainer.innerHTML = "";
  if (items.length === 0) {
    resultsContainer.innerHTML = "<p style='padding:10px'>No results found</p>";
    return;
  }
  items.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("result-item");
    if (item.link && item.link !== "#") {
    div.innerHTML = `
  <a href="games.html?title=${encodeURIComponent(item.title)}&desc=${encodeURIComponent(item.description)}">
    <h3>${item.title}</h3>
    <p>${item.description}</p>
  </a>`;  
  } else {
      div.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      `;
    }


    resultsContainer.appendChild(div);
  });
  const rect = searchInput.getBoundingClientRect();
  resultsContainer.style.top = `${rect.bottom + window.scrollY}px`;
  resultsContainer.style.left = `${rect.left + window.scrollX}px`;
  resultsContainer.style.width = `${rect.width}px`;
  resultsContainer.style.display = "block";
}

function performSearch() {
  const query = searchInput.value.toLowerCase().trim();
  if (!query) {
    resultsContainer.style.display = "none";
    return;
  }
  const filtered = data.filter(item => item.title.toLowerCase().includes(query));
  renderResults(filtered);
}

function resetActive() {
  circles.forEach((c) => {
    c.classList.remove("large", "active-circle");
    c.classList.add("small");
  });
}

circles.forEach((circle) => {
  circle.addEventListener("click", () => {
    bottomBar.classList.remove("hidden");
    resetActive();
    circle.classList.remove("small");
    circle.classList.add("large", "active-circle");
  });
});

mainCircle.addEventListener("click", () => {
  topBar.classList.remove("no-radius");
  bottomBar.classList.remove("move-top");
  commentBar.classList.remove("active");
  searchContainer.style.display = "flex";
  aboutPage.classList.remove("active");
  searchContainer.classList.add("active");
  frontText.style.display = "block";
  searchInput.focus();
  performSearch();
  renderResults(data);
});

homeBtn.addEventListener("click", () => {
  bottomBar.classList.remove("move-top");
  commentBar.classList.remove("active");
  searchContainer.style.display = "flex";
  searchContainer.classList.remove("active");
  aboutPage.classList.remove("active");
  topBar.classList.remove("no-radius");
  resultsContainer.style.display = "none";
  frontText.style.display = "block";
});

commentBtn.addEventListener("click", () => {
  searchContainer.style.display = "none";
  bottomBar.classList.add("move-top");
  commentBar.classList.add("active");
  aboutPage.classList.remove("active");
  resultsContainer.style.display = "none";
  frontText.style.display = "none";
  topBar.classList.add("no-radius");
});

aboutBtn.addEventListener("click", () => {
  bottomBar.classList.remove("move-top");
  searchContainer.style.display = "none";
  commentBar.classList.remove("active");
  aboutPage.classList.add("active");
  resultsContainer.style.display = "none";
  topBar.classList.remove("no-radius");
  frontText.style.display = "none";

  const paragraphs = aboutPage.querySelectorAll("p");

  paragraphs.forEach((p) => {
    p.classList.remove("slide-left", "slide-right");
  });

  void paragraphs[0].offsetWidth;

  if (paragraphs[0])
    setTimeout(() => paragraphs[0].classList.add("slide-left"), 100);
  if (paragraphs[1])
    setTimeout(() => paragraphs[1].classList.add("slide-right"), 300);
  if (paragraphs[2])
    setTimeout(() => paragraphs[2].classList.add("slide-left"), 500);
});

menuBtn.addEventListener("click", () => {
  bottomBar.classList.toggle("hidden");
  resetActive();
  homeBtn.classList.remove("small");
  homeBtn.classList.add("large", "active-circle");
  commentBar.classList.remove("active");
  searchContainer.classList.remove("active");
  bottomBar.classList.remove("move-top");
  aboutPage.classList.remove("active");
  resultsContainer.style.display = "none";
  topBar.classList.remove("no-radius");
  frontText.style.display = "block";
});

searchInput.addEventListener("input", performSearch);



