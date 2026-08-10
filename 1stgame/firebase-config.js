// Cấu hình Firebase của cô giáo — dùng chung cho cả trang học sinh (game.html) và trang giáo viên (admin.html)
const firebaseConfig = {
  apiKey: "AIzaSyApHRQfZumiQFj7-CiTU1VRuTMJHeXruTA",
  authDomain: "stgameofcoyen.firebaseapp.com",
  projectId: "stgameofcoyen",
  storageBucket: "stgameofcoyen.firebasestorage.app",
  messagingSenderId: "36002056638",
  appId: "1:36002056638:web:4322394e81b1d6bd0c91ef"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Chuẩn hoá tên đội thành key hợp lệ cho Firebase (không chứa . # $ [ ] /)
function safeTeamKey(name) {
  return name.trim().replace(/[.#$\[\]\/]/g, "_");
}

function emptyBets() {
  const bets = {};
  for (let i = 1; i <= 10; i++) bets[i] = { A: 0, B: 0, C: 0 };
  return bets;
}
