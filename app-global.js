var SUPABASE_URL = 'https://zyqqywdobpkyhmzcrlws.supabase.co';
var SUPABASE_KEY = 'sb_publishable_phKP0N4tOOkrVKr4lyQZHw_T9cqh9Bk';

var reqHeaders = {
    'apikey': SUPABASE_KEY,
    'Authorization': 'Bearer ' + SUPABASE_KEY,
    'Content-Type': 'application/json'
};

var kontenBahasa = {
    'ID': {
        title: 'Selamat Datang di SUSHNHUSH',
        subTitle1: 'Apa itu SUSHNHUSH?',
        desc1: 'Sebuah platform online chat berbasis web yang dirancang khusus untuk menjaga kerahasiaan total kamu. Di sini, kamu bebas membuat grup rahasia atau bertukar pesan pribadi dengan temanmu tanpa batas.',
        subTitle2: 'Apa bedanya dengan aplikasi pesan lain? (WhatsApp, Line, WeChat, dll)',
        desc2: 'Di sini kamu bisa bebas bersuara tanpa takut ketahuan. Pernahkah kamu berpikir untuk membuat grup obrolan tanpa diketahui oleh rekan kerja atau bos kamu karena takut bocor? Nah, di sinilah ruang teraman untukmu.',
        subTitle3: 'Fitur Utama:',
        features: [
            '<strong>Platform 100% Text-Based:</strong> Murni pertukaran kata dan cerita tanpa foto, video, atau media berat. Super ringan di kuota dan aman dari pelacakan visual.',
            '<strong>Grup Rahasia (Sistem Hak Akses):</strong> Di dalam grup ini, kamu dan rekanmu bertindak sebagai admin bersama. Orang baru hanya bisa bergabung jika disetujui lewat voting oleh lebih dari 50% anggota grup.',
            '<strong>Tendang via Voting (Exile):</strong> Untuk mendepak penyusup atau akun mencurigakan, komunitas bisa memicu voting. Jika suara mencapai lebih dari 50%, orang tersebut otomatis dikeluarkan.',
            '<strong>Pesan Hangus 24 Jam:</strong> Semua riwayat pesan di dalam grup maupun personal chat hanya bertahan selama 24 jam. Setelah itu, pesan akan terhapus permanen dari sistem tanpa sisa.'
        ],
        rulesTitle: 'Aturan Mutlak:',
        rules: [ 'Dilarang keras melakukan segala bentuk tindakan kejahatan, aktivitas ilegal, dan perilaku kriminal di dalam website SUSHNHUSH.' ],
        btnText: 'Lanjut ke Registrasi / Masuk',
        btnBack: '← Kembali',
        passShow: 'LIHAT',
        passHide: 'TUTUP',
        tabL: 'Masuk', tabR: 'Daftar Akun',
        loginUserPlaceholder: 'Username / Email...', loginPassPlaceholder: 'Password...', loginSubmit: 'Masuk Gerbang', loginForgot: 'Lupa Password? (Gunakan 3 Blok)',
        regUserPlaceholder: 'Username...', regEmailPlaceholder: 'Email Aktif...', regPassPlaceholder: 'Password...', passHelper: '*Password terdiri dari minimal 6 karakter gabungan antara angka dan huruf.',
        reg3BlockTitle: 'Keamanan 3 Blok (Anti-Lupa)', regQPlaceholder: '1. Buat Pertanyaan Rahasia (Cth: Kucing pertama?)...', regCluePlaceholder: '2. Clue Jawaban (Cth: Warna Oren)...', regAnsPlaceholder: '3. Jawaban Rahasia (Akan di-hash)...', regSubmit: 'Daftar & Acak Nama Samaran',
        navProfile: 'PROFIL', navNavList: 'DAFTAR', navNavBtnLogout: 'KELUAR',
        hubHistoryTitle: 'Riwayat Obrolan (24-Hour Clean Slate)', hubEmptyChat: 'Beranda bersih. Belum ada obrolan aktif. Buat grup baru atau cari Secret ID temanmu!',
        mCreateTitle: 'Buat Grup Rahasia', mCreateDesc: 'Kamu akan menjadi Admin Pertama. Sistem akan membuatkan Invite Link khusus.', mCreateCancel: 'Batal', mCreateConfirm: 'Buat & Masuk',
        mJoinTitle: 'Kunci Ditemukan', mJoinDesc: 'Sirkel ditemukan. Masukkan password untuk memicu sistem Vote 50+1. Walau password benar, kamu butuh persetujuan mayoritas anggota dalam.', mJoinCancel: 'Mundur', mJoinConfirm: 'Ketuk Pintu',
        sysWelcome: 'Kamu berhasil membuat grup. Enkripsi aktif. Obrolan ini otomatis hangus dalam 24 jam.',
        btnCopyLink: 'Salin Link Undang Teman',
        msgNew: 'Baru', msgAging: 'Lama', msgFading: 'Memudar',
        groupMembers: 'Anggota',
        lblUser: 'Username:', lblAlias: 'Nama Samaran:', lblEmail: 'Email:',
        userTaken: 'Username sudah digunakan!',
        lblExileVote: 'ingin mengeluarkan',
        lblExileFrom: 'dari grup'     
    },
    'EN': {
        title: 'Welcome to SUSHNHUSH',
        subTitle1: 'What is SUSHNHUSH?',
        desc1: 'A web-based online chat platform specifically engineered to guard your absolute privacy. Here, you are completely free to create secret groups or exchange direct messages with your friends securely.',
        subTitle2: 'How is it different from other messaging apps? (WhatsApp, Line, WeChat, etc.)',
        desc2: 'Here, you can speak your truth without fear of exposure. Have you ever wanted to create a group chat without your coworkers or boss finding out, but were too afraid of leaks? This is the ultimate safe space for you.',
        subTitle3: 'Key Features:',
        features: [
            '<strong>100% Text-Based Platform:</strong> Pure exchange of words and stories without photos, videos, or heavy media. Super light on data and safe from visual tracking.',
            '<strong>Secret Groups (Access Control):</strong> You and your group members act as co-admins. Newcomers can only join if approved via a community vote of more than 50%.',
            '<strong>Exile via Voting:</strong> To remove suspicious users or intruders, the community can trigger a vote. If the vote exceeds 50%, they are instantly kicked out.',
            '<strong>24-Hour Self-Destruct:</strong> All chat histories in groups and private DMs only last for 24 hours. After that, they disappear forever from the system.'
        ],
        rulesTitle: 'Absolute Rules:',
        rules: [ 'Strictly prohibited from committing any form of criminal acts, illegal activities, or wrongdoing inside the SUSHNHUSH website.' ],
        btnText: 'Proceed to Sign-In / Register',
        btnBack: '← Back',
        passShow: 'SHOW',
        passHide: 'HIDE',
        tabL: 'Sign In', tabR: 'Register',
        loginUserPlaceholder: 'Username / Email...', loginPassPlaceholder: 'Password...', loginSubmit: 'Enter the Gate', loginForgot: 'Forgot Password? (Use 3 Blocks)',
        regUserPlaceholder: 'Username...', regEmailPlaceholder: 'Active Email...', regPassPlaceholder: 'Password...', passHelper: '*Password must be at least 6 characters containing both letters and numbers.',
        reg3BlockTitle: '3-Block Security (Anti-Forget)', regQPlaceholder: '1. Secret Question (Ex: First pet?)...', regCluePlaceholder: '2. Answer Clue (Ex: Orange color)...', regAnsPlaceholder: '3. Secret Answer (Will be hashed)...', regSubmit: 'Register & Randomize Alias',
        navProfile: 'PROFILE', navNavList: 'LIST', navNavBtnLogout: 'LOGOUT',
        hubHistoryTitle: 'Chat History (24-Hour Clean Slate)', hubEmptyChat: 'Clean board. No active chats yet. Create a group or search for a Secret ID!',
        mCreateTitle: 'Create Secret Group', mCreateDesc: 'You will be the First Admin. The system will generate a special Invite Link.', mCreateCancel: 'Cancel', mCreateConfirm: 'Create & Enter',
        mJoinTitle: 'Lock Found', mJoinDesc: 'Circle found. Enter password to trigger the 50+1 Vote system. Even with the correct password, majority approval is needed.', mJoinCancel: 'Retreat', mJoinConfirm: 'Knock Door',
        sysWelcome: 'Group successfully created. Encryption active. This chat will self-destruct in 24 hours.',
        btnCopyLink: 'Copy Invite Link',
        msgNew: 'New', msgAging: 'Aging', msgFading: 'Fading',
        groupMembers: 'Members',
        lblUser: 'Username:', lblAlias: 'Alias:', lblEmail: 'Email:',
        userTaken: 'Username is already taken!',
        lblExileVote: 'wants to remove',
        lblExileFrom: 'from group'   
    }
};

var notifIntervalId = null;
var chatIntervalId = null;
var activeGroupId = null;
var currentActiveMenu = null;

var anonNouns = [
    "Panda", "Fox", "Wolf", "Raven", "Viper", "Owl", "Shark", "Falcon", "Panther", "Cobra",
    "Jaguar", "Lynx", "Leopard", "Cheetah", "Badger", "Coyote", "Condor", "Python", "Mamba", "Raptor",
    "Scorpion", "Spider", "Wombat", "Ferret", "Otter", "Weasel", "Ocelot", "Orca", "Mantis", "Grizzly", "Zeus", "Poseidon", "Hades", "Apollo", "Ares", "Hermes", "Hephaestus", "Dionysus", "Odin", "Thor", "Loki", "Anubis", "Osiris", "Ra", "Horus", "Artemis", "Athena", "Aphrodite", "Hera", "Achilles", "Hercules", "Perseus", "Spartacus", "Caesar", "Augustus", "Nero", "Caligula", "Romulus", "Remus", "Alexander", "Hannibal", "Joker", "King", "Queen", "Jack", "Ace", "Spade", "Heart", "Diamond", "Club", "Medusa", "Griffin", "Phoenix", "Gargoyle", "Hydra", "Siren", "Gorgon", "Kraken", "Pegasus", "Centaur", "Cyclops", "Titan", "Valkyrie", "Sphinx", "Minotaur", "Yeti", "Bigfoot", "Chimera", "Banshee", "Wendigo"
];

function generateSecretPin() {
    var chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    var result = "";
    for (var i = 0; i < 6; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

function navigasiKeHalaman(targetUrl, jenisTransisi) {
    document.body.classList.add(jenisTransisi);
    setTimeout(() => {
        window.location.href = targetUrl;
    }, 250);
}

function kendaliDetakJantungAplikasi() {
    if (!localStorage.getItem('sush_curEmail')) return;

    const isLayarSembunyi = document.hidden;
    const isKehilanganFokus = !document.hasFocus();

    if (isLayarSembunyi || isKehilanganFokus) {
        if (notifIntervalId) {
            clearInterval(notifIntervalId);
            notifIntervalId = null;
        }
        if (chatIntervalId) {
            clearInterval(chatIntervalId);
            chatIntervalId = null;
        }
    } else {
        if (typeof activeGroupId !== "undefined" && activeGroupId) {
            if (!chatIntervalId) {
                if (typeof urusRefreshChatManual === "function") {
                    urusRefreshChatManual();
                }
                chatIntervalId = setInterval(typeof urusRefreshChatManual === "function" ? urusRefreshChatManual : () => {}, 3000);
            }
        } else {
            if (!notifIntervalId && typeof cekSemuaNotifikasi === "function") {
                cekSemuaNotifikasi();
                if (typeof renderHubList === "function") {
                    renderHubList();
                }
                notifIntervalId = setInterval(cekSemuaNotifikasi, 30000);
            }
        }
    }
}

window.addEventListener('load', function() {
    const urlParams = new URLSearchParams(window.location.search);
    
    const encodedGroup = urlParams.get('g');
    if (encodedGroup) {
        try {
            const decodedStr = decodeURIComponent(escape(atob(encodedGroup)));
            const parts = decodedStr.split('|');
            if (parts.length === 2) {
                localStorage.setItem('sush_pendingJoin', JSON.stringify({ name: parts[0], id: parts[1] }));
                window.history.replaceState({}, document.title, window.location.pathname);
            }
        } catch (e) {
            console.error('Invalid group link');
        }
    }

    const joinGrup = urlParams.get('join');
    const joinId = urlParams.get('id');
    if (joinGrup && joinId) {
        localStorage.setItem('sush_pendingJoin', JSON.stringify({ name: joinGrup, id: joinId }));
    }

    document.addEventListener("visibilitychange", kendaliDetakJantungAplikasi);
    window.addEventListener("focus", kendaliDetakJantungAplikasi);
    window.addEventListener("blur", kendaliDetakJantungAplikasi);
});
    
