let savedName = localStorage.getItem("userName");

const params = new URLSearchParams(window.location.search);
let name = params.get("name");

// fallback
if(!name && savedName){
    name = savedName;
}

// strong lock (URL tampering block)
if(savedName && name !== savedName){
    window.location.href = "greeting.html?name=" + encodeURIComponent(savedName);
}

// normalize
name = name?.toLowerCase();

const greet = document.getElementById("greet");

// special replies (ALL LOWERCASE KEYS)
const specialReplies = {
  "tuly": "🌙 Eid Mubarak Tuly!...",
  "chong": "🌙 Eid Mubarak, Chong!...",
  "chong chong": "🌙 Eid Mubarak, Chong Chong!...",
  "tuba": "🌙 Eid Mubarak,Tuba[batu(lol)]...",
  "batu": "🌙 Eid Mubarak,Tuba[batu(lol)]...",
  "tasfia": "🌙 Eid Mubarak, Tasfia(Hambaaaaaaaaaaa)!...",
  "mehzabin": "🌙 Eid Mubarak, Mehzabin!...",
  "sourav": "🌙 Eid Mubarak, Sourav mama!...",
  "rifat": "🌙 Eid Mubarak, Rifat(batal)!...",
  "kanon": "🌙 Eid Mubarak, Kanon!...",
  "jannat": "🌙 Eid Mubarak, Jannat!...",
  "nuzhat": "🌙 Eid Mubarak, Nuzhat!...",
  "oishi": "🌙 Eid Mubarak, Nuzhat!..."
};

// generic
const genericWishes = "Wishing you joy, peace, and blessings ✨";

// original name (for display)
let displayName = params.get("name") || savedName || "";

// decide message
let message;

if (specialReplies[name]) {
  message = specialReplies[name];
} else if (displayName) {
  message = `🌙 Eid Mubarak ${displayName}! ${genericWishes}`;
} else {
  message = `🌙 Eid Mubarak! ${genericWishes}`;
}

// safer render
greet.textContent = message;

// title update
document.title = `Eid Mubarak ${displayName || ""}`;
