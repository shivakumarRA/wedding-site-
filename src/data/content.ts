/**
 * ─────────────────────────────────────────────────────────────
 *  INVITATION CONTENT — English & Telugu
 *  Supports both Groom's side and Bride's (Girl's) side.
 * ─────────────────────────────────────────────────────────────
 */

export type Lang = "en" | "te";
export type Side = "groom" | "bride";

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

/** Language-independent facts. */
export const facts = {
  /** Sumuhurtham — drives the countdown and calendar file. */
  muhurthamISO: "2026-11-22T11:22:00+05:30",
  /** Phone numbers for the venue (digits only, India). */
  venuePhones: ["9550605192", "8501804306"],
  /** WhatsApp number, with country code. */
  venueWhatsapp: "919550605192",
  /** Exactly what Google Maps searches for — built only from the supplied address. */
  venueMapsQuery: "P.V. Function Hall, Beside Flyover, Kodad Road, Nayakangudem",
  /** Exact venue location (17°11'37.6"N 79°53'35.2"E) — used for directions and the embedded map. */
  venueCoords: "17.193767,79.893109",
  /** Optional: path to an mp3 in /public (e.g. "/music/wedding.mp3"). */
  musicSrc: "/music/wedding.mp3",
};

/** Indian wedding imagery (stock, decorative — replace with your own photos in /public/photos). */
export const images = {
  /** The couple’s own photo (public/photos/couple.jpg, 1066×1600). */
  couple: { src: "/photos/couple.jpg", width: 1066, height: 1600 },
  hero: img("1654156577076-e0350ba86cc1", 2400), // hands joined over the sacred fire
  kalash: img("1606293926075-69a00dbfde81", 1000), // kalasam with coconut & mango leaves
  venue: img("1587271407850-8d438ca9fdf2", 1800), // decorated mandapam
  lunch: img("1589302168068-964664d93dc0", 1200), // chicken biryani (non-veg)
  traditions: [
    { src: img("1601121141461-9d6647bca1ed", 900), alt: "Traditional gold temple jewellery" },
    { src: img("1597157639073-69284dc0fdaf", 900), alt: "Hands adorned with gold bangles during the rituals" },
    { src: img("1592997572594-34be01bc36c7", 900), alt: "Golden paddy — akshintalu for blessings" },
    { src: img("1505932794465-147d1f1b2c97", 900), alt: "Hands decorated with gorintaku (henna)" },
  ],
};

const commonEn = {
  nav: {
    home: "Invitation",
    couple: "The Couple",
    muhurtham: "Muhurtham",
    countdown: "Countdown",
    venue: "Venue",
    family: "Family",
    groomSide: "Groom's Side",
    brideSide: "Bride's Side",
  },
  blessing: "Srirasthu! Subhamasthu!! Avighnamasthu!!!",
  muhurtham: {
    eyebrow: "The Auspicious Moment",
    title: "Sumuhurtham",
    month: "November",
    year: "2026",
    dayNum: "22",
    day: "Sunday",
    dateLabel: "Date",
    date: "Sunday, 22 November 2026",
    timeLabel: "Time",
    time: "11:22 AM",
    nakshatramLabel: "Nakshatram",
    nakshatram: "Aswini Nakshatram",
    lagnamLabel: "Lagnam",
    lagnam: "Dhanassu Lagnam",
    lunchLabel: "Lunch",
    lunchTime: "12:00 PM",
  },
  countdown: {
    eyebrow: "Counting down to the Sumuhurtham",
    title: "22 November 2026 · 11:22 AM",
    units: { days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds" },
    done: "The auspicious moment has arrived",
    calendar: "Add to Calendar",
  },
  venue: {
    eyebrow: "Wedding Venue",
    title: "The Venue",
    name: "P.V. Function Hall",
    address: ["Beside Flyover,", "Kodad Road,", "Nayakangudem."],
    directions: "Get Directions",
    call: "Call Venue",
    whatsapp: "WhatsApp",
    photoAlt: "Decorated wedding mandapam",
  },
  actions: {
    playMusic: "Play music",
    pauseMusic: "Pause music",
    share: "Share",
    whatsapp: "Share on WhatsApp",
    pdf: "Download invitation (PDF)",
    copy: "Copy link",
    switchSide: "Switch Family Side",
  },
};

const commonTe = {
  nav: {
    home: "ఆహ్వానం",
    couple: "వధూవరులు",
    muhurtham: "ముహూర్తం",
    countdown: "కౌంట్‌డౌన్",
    venue: "వేదిక",
    family: "ఆహ్వానించువారు",
    groomSide: "వరుడి వైపు",
    brideSide: "వధువు వైపు",
  },
  blessing: "శ్రీరస్తు! శుభమస్తు!! అవిఘ్నమస్తు!!!",
  muhurtham: {
    eyebrow: "శుభ ఘడియ",
    title: "సుముహూర్తం",
    month: "నవంబర్",
    year: "2026",
    dayNum: "22",
    day: "ఆదివారం",
    dateLabel: "తేదీ",
    date: "ఆదివారం, 22 నవంబర్ 2026",
    timeLabel: "సమయం",
    time: "ఉదయం 11:22 గంటలకు",
    nakshatramLabel: "నక్షత్రం",
    nakshatram: "అశ్విని నక్షత్రం",
    lagnamLabel: "లగ్నం",
    lagnam: "ధనస్సు లగ్నం",
    lunchLabel: "విందు భోజనం",
    lunchTime: "మధ్యాహ్నం 12:00 గంటలకు",
  },
  countdown: {
    eyebrow: "సుముహూర్తానికి మిగిలిన సమయం",
    title: "22 నవంబర్ 2026 · ఉదయం 11:22",
    units: { days: "రోజులు", hours: "గంటలు", minutes: "నిమిషాలు", seconds: "సెకన్లు" },
    done: "శుభ ముహూర్తం ఆసన్నమైంది",
    calendar: "క్యాలెండర్‌కు జోడించండి",
  },
  venue: {
    eyebrow: "వివాహ వేదిక",
    title: "వేదిక",
    name: "పి.వి. ఫంక్షన్ హాల్",
    address: ["ఫ్లైఓవర్ ప్రక్కన,", "కోదాడ రోడ్డు,", "నాయకన్‌గూడెం."],
    directions: "దారి చూపించు",
    call: "వేదికకు కాల్ చేయండి",
    whatsapp: "వాట్సాప్",
    photoAlt: "అలంకరించిన వివాహ మండపం",
  },
  actions: {
    playMusic: "సంగీతం ప్రారంభించండి",
    pauseMusic: "సంగీతం ఆపండి",
    share: "పంచుకోండి",
    whatsapp: "వాట్సాప్‌లో పంచుకోండి",
    pdf: "శుభలేఖ డౌన్‌లోడ్ (PDF)",
    copy: "లింక్ కాపీ చేయండి",
    switchSide: "కుటుంబ పక్షం మార్చుకోండి",
  },
};

/* ─── GROOM'S SIDE (English) ─── */
const groomEn = {
  ...commonEn,
  side: "groom" as Side,
  meta: {
    title: "Venkateswarlu & Sneha — Wedding Invitation · 22 November 2026",
    description:
      "Wedding of Chi. Venkateswarlu with Chi. La. Sow. Sneha — Sunday, 22 November 2026 at 11:22 AM, P.V. Function Hall, Kodad Road, Nayakangudem.",
  },
  opening: {
    invited: "You are cordially invited",
    open: "Open Invitation",
    noMusic: "Enter without music",
    names: "Venkateswarlu & Sneha",
    date: "22 . 11 . 2026",
    sideBadge: "Groom's Family Invitation",
    monogram: "V & S",
  },
  hero: {
    title: "Wedding Invitation",
    blessings: "With the blessings of our elders and families.",
    solicit:
      "We solicit your gracious presence with family and friends on the auspicious occasion of the marriage of our only son.",
    primaryPrefix: "Chi.",
    primaryName: "Venkateswarlu",
    with: "with",
    secondaryPrefix: "Chi. La. Sow.",
    secondaryName: "Sneha",
    groomPrefix: "Chi.",
    groom: "Venkateswarlu",
    bridePrefix: "Chi. La. Sow.",
    bride: "Sneha",
    date: "22 November 2026",
    day: "Sunday",
    time: "11:22 AM",
    scroll: "Scroll",
  },
  couple: {
    eyebrow: "A Blessed Union",
    title: "The Couple",
    script: "two families, one celebration",
    groomLabel: "The Groom",
    brideLabel: "The Bride",
    with: "with",
    otherFamily: "Second Daughter of Sri Marapangu Nagarjuna and Chilakamma",
    otherResidence: ["Kudali Village,", "Mothey Mandal,", "Suryapet District."],
    brideFamily: "Second Daughter of Sri Marapangu Nagarjuna and Chilakamma",
    residence: ["Kudali Village,", "Mothey Mandal,", "Suryapet District."],
    photoAlt: "Venkateswarlu and Sneha",
    residenceLabel: "Residence",
  },
  family: {
    eyebrow: "Invitation By",
    names: "Nukapangu Thirapaiah – Thirapamma",
    address: ["Vallapuram Village,", "Nadigudem Mandal,", "Suryapet District."],
    compliments: "With Best Compliments from:",
    nearDear: "Near & Dear...",
  },
  closing: {
    message: "Your gracious presence with family and friends will make our celebration even more memorable.",
    love: "With Love & Best Wishes,",
    names: "Venkateswarlu & Sneha",
    date: "Sunday, 22 November 2026",
  },
  share:
    "Wedding Invitation 💐\nChi. Venkateswarlu with Chi. La. Sow. Sneha\nSunday, 22 November 2026 · 11:22 AM\nP.V. Function Hall, Beside Flyover, Kodad Road, Nayakangudem.\n",
};

/* ─── GROOM'S SIDE (Telugu) ─── */
const groomTe: typeof groomEn = {
  ...commonTe,
  side: "groom" as Side,
  meta: {
    title: "వెంకటేశ్వర్లు & స్నేహ — వివాహ శుభలేఖ · 22 నవంబర్ 2026",
    description:
      "చి॥ వెంకటేశ్వర్లు మరియు చి॥ ల॥ సౌ॥ స్నేహ ల వివాహం — ఆదివారం, 22 నవంబర్ 2026, ఉదయం 11:22 గంటలకు, పి.వి. ఫంక్షన్ హాల్, కోదాడ రోడ్డు, నాయకన్‌గూడెం.",
  },
  opening: {
    invited: "మీకు సాదర ఆహ్వానం",
    open: "శుభలేఖను తెరవండి",
    noMusic: "సంగీతం లేకుండా ప్రవేశించండి",
    names: "వెంకటేశ్వర్లు & స్నేహ",
    date: "22 . 11 . 2026",
    sideBadge: "వరుడి కుటుంబ ఆహ్వానం",
    monogram: "వెం ♥ స్నే",
  },
  hero: {
    title: "వివాహ శుభలేఖ",
    blessings: "మా పెద్దలు మరియు కుటుంబ సభ్యుల ఆశీస్సులతో.",
    solicit:
      "మా ఏకైక కుమారుని వివాహ శుభ సందర్భమున, మీరు సకుటుంబ సపరివార సమేతంగా విచ్చేసి మీ అమూల్యమైన సన్నిధిని ప్రసాదించవలసినదిగా సవినయంగా కోరుచున్నాము.",
    primaryPrefix: "చి॥",
    primaryName: "వెంకటేశ్వర్లు",
    with: "మరియు",
    secondaryPrefix: "చి॥ ల॥ సౌ॥",
    secondaryName: "స్నేహ",
    groomPrefix: "చి॥",
    groom: "వెంకటేశ్వర్లు",
    bridePrefix: "చి॥ ల॥ సౌ॥",
    bride: "స్నేహ",
    date: "22 నవంబర్ 2026",
    day: "ఆదివారం",
    time: "ఉదయం 11:22 గంటలకు",
    scroll: "క్రిందకు",
  },
  couple: {
    eyebrow: "శుభ బంధం",
    title: "వధూవరులు",
    script: "రెండు కుటుంబాలు, ఒకే వేడుక",
    groomLabel: "వరుడు",
    brideLabel: "వధువు",
    with: "మరియు",
    otherFamily: "శ్రీ మారపంగు నాగార్జున మరియు చిలకమ్మ గార్ల ద్వితీయ పుత్రిక",
    otherResidence: ["కూడలి గ్రామం,", "మోతే మండలం,", "సూర్యాపేట జిల్లా."],
    brideFamily: "శ్రీ మారపంగు నాగార్జున మరియు చిలకమ్మ గార్ల ద్వితీయ పుత్రిక",
    residence: ["కూడలి గ్రామం,", "మోతే మండలం,", "సూర్యాపేట జిల్లా."],
    photoAlt: "వెంకటేశ్వర్లు మరియు స్నేహ",
    residenceLabel: "నివాసం",
  },
  family: {
    eyebrow: "ఆహ్వానించువారు",
    names: "నూకపంగు తిరపయ్య – తిరపమ్మ",
    address: ["వల్లాపురం గ్రామం,", "నడిగూడెం మండలం,", "సూర్యాపేట జిల్లా."],
    compliments: "శుభాకాంక్షలతో:",
    nearDear: "బంధుమిత్రులు...",
  },
  closing: {
    message: "మీరు సకుటుంబ సపరివార సమేతంగా విచ్చేసి, మా వేడుకను మరింత మధురమైన జ్ఞాపకంగా మలచగలరని ఆశిస్తున్నాము.",
    love: "ప్రేమ మరియు శుభాకాంక్షలతో,",
    names: "వెంకటేశ్వర్లు & స్నేహ",
    date: "ఆదివారం, 22 నవంబర్ 2026",
  },
  share:
    "వివాహ శుభలేఖ 💐\nచి॥ వెంకటేశ్వర్లు మరియు చి॥ ల॥ సౌ॥ స్నేహ\nఆదివారం, 22 నవంబర్ 2026 · ఉదయం 11:22 గంటలకు\nపి.వి. ఫంక్షన్ హాల్, ఫ్లైఓవర్ ప్రక్కన, కోదాడ రోడ్డు, నాయకన్‌గూడెం.\n",
};

/* ─── BRIDE'S (GIRL'S) SIDE (English) ─── */
const brideEn: typeof groomEn = {
  ...commonEn,
  side: "bride" as Side,
  meta: {
    title: "Sneha & Venkateswarlu — Wedding Invitation · 22 November 2026",
    description:
      "Wedding of Chi. La. Sow. Sneha with Chi. Venkateswarlu — Sunday, 22 November 2026 at 11:22 AM, P.V. Function Hall, Kodad Road, Nayakangudem.",
  },
  opening: {
    invited: "You are cordially invited",
    open: "Open Invitation",
    noMusic: "Enter without music",
    names: "Sneha & Venkateswarlu",
    date: "22 . 11 . 2026",
    sideBadge: "Bride's Family Invitation",
    monogram: "S & V",
  },
  hero: {
    title: "Wedding Invitation",
    blessings: "With the blessings of our elders and families.",
    solicit:
      "We solicit your gracious presence with family and friends on the auspicious occasion of the marriage of our second daughter.",
    primaryPrefix: "Chi. La. Sow.",
    primaryName: "Sneha",
    with: "with",
    secondaryPrefix: "Chi.",
    secondaryName: "Venkateswarlu",
    groomPrefix: "Chi.",
    groom: "Venkateswarlu",
    bridePrefix: "Chi. La. Sow.",
    bride: "Sneha",
    date: "22 November 2026",
    day: "Sunday",
    time: "11:22 AM",
    scroll: "Scroll",
  },
  couple: {
    eyebrow: "A Blessed Union",
    title: "The Couple",
    script: "two families, one celebration",
    groomLabel: "The Groom",
    brideLabel: "The Bride",
    with: "with",
    otherFamily: "Only Son of Sri Nukapangu Thirapaiah and Thirapamma",
    otherResidence: ["Vallapuram Village,", "Nadigudem Mandal,", "Suryapet District."],
    brideFamily: "Only Son of Sri Nukapangu Thirapaiah and Thirapamma",
    residence: ["Vallapuram Village,", "Nadigudem Mandal,", "Suryapet District."],
    photoAlt: "Sneha and Venkateswarlu",
    residenceLabel: "Residence",
  },
  family: {
    eyebrow: "Invitation By",
    names: "Marapangu Nagarjuna – Chilakamma",
    address: ["Kudali Village,", "Mothey Mandal,", "Suryapet District."],
    compliments: "With Best Compliments from:",
    nearDear: "Near & Dear...",
  },
  closing: {
    message: "Your gracious presence with family and friends will make our celebration even more memorable.",
    love: "With Love & Best Wishes,",
    names: "Sneha & Venkateswarlu",
    date: "Sunday, 22 November 2026",
  },
  share:
    "Wedding Invitation 💐\nChi. La. Sow. Sneha with Chi. Venkateswarlu\nSunday, 22 November 2026 · 11:22 AM\nP.V. Function Hall, Beside Flyover, Kodad Road, Nayakangudem.\n",
};

/* ─── BRIDE'S (GIRL'S) SIDE (Telugu) ─── */
const brideTe: typeof groomEn = {
  ...commonTe,
  side: "bride" as Side,
  meta: {
    title: "స్నేహ & వెంకటేశ్వర్లు — వివాహ శుభలేఖ · 22 నవంబర్ 2026",
    description:
      "చి॥ ల॥ సౌ॥ స్నేహ మరియు చి॥ వెంకటేశ్వర్లు ల వివాహం — ఆదివారం, 22 నవంబర్ 2026, ఉదయం 11:22 గంటలకు, పి.వి. ఫంక్షన్ హాల్, కోదాడ రోడ్డు, నాయకన్‌గూడెం.",
  },
  opening: {
    invited: "మీకు సాదర ఆహ్వానం",
    open: "శుభలేఖను తెరవండి",
    noMusic: "సంగీతం లేకుండా ప్రవేశించండి",
    names: "స్నేహ & వెంకటేశ్వర్లు",
    date: "22 . 11 . 2026",
    sideBadge: "వధువు కుటుంబ ఆహ్వానం",
    monogram: "స్నే ♥ వెం",
  },
  hero: {
    title: "వివాహ శుభలేఖ",
    blessings: "మా పెద్దలు మరియు కుటుంబ సభ్యుల ఆశీస్సులతో.",
    solicit:
      "మా ద్వితీయ పుత్రిక వివాహ శుభ సందర్భమున, మీరు సకుటుంబ సపరివార సమేతంగా విచ్చేసి మీ అమూల్యమైన సన్నిధిని ప్రసాదించవలసినదిగా సవినయంగా కోరుచున్నాము.",
    primaryPrefix: "చి॥ ల॥ సౌ॥",
    primaryName: "స్నేహ",
    with: "మరియు",
    secondaryPrefix: "చి॥",
    secondaryName: "వెంకటేశ్వర్లు",
    groomPrefix: "చి॥",
    groom: "వెంకటేశ్వర్లు",
    bridePrefix: "చి॥ ల॥ సౌ॥",
    bride: "స్నేహ",
    date: "22 నవంబర్ 2026",
    day: "ఆదివారం",
    time: "ఉదయం 11:22 గంటలకు",
    scroll: "క్రిందకు",
  },
  couple: {
    eyebrow: "శుభ బంధం",
    title: "వధూవరులు",
    script: "రెండు కుటుంబాలు, ఒకే వేడుక",
    groomLabel: "వరుడు",
    brideLabel: "వధువు",
    with: "మరియు",
    otherFamily: "శ్రీ నూకపంగు తిరపయ్య మరియు తిరపమ్మ గార్ల ఏకైక కుమారుడు",
    otherResidence: ["వల్లాపురం గ్రామం,", "నడిగూడెం మండలం,", "సూర్యాపేట జిల్లా."],
    brideFamily: "శ్రీ నూకపంగు తిరపయ్య మరియు తిరపమ్మ గార్ల ఏకైక కుమారుడు",
    residence: ["వల్లాపురం గ్రామం,", "నడిగూడెం మండలం,", "సూర్యాపేట జిల్లా."],
    photoAlt: "స్నేహ మరియు వెంకటేశ్వర్లు",
    residenceLabel: "నివాసం",
  },
  family: {
    eyebrow: "ఆహ్వానించువారు",
    names: "మారపంగు నాగార్జున – చిలకమ్మ",
    address: ["కూడలి గ్రామం,", "మోతే మండలం,", "సూర్యాపేట జిల్లా."],
    compliments: "శుభాకాంక్షలతో:",
    nearDear: "బంధుమిత్రులు...",
  },
  closing: {
    message: "మీరు సకుటుంబ సపరివార సమేతంగా విచ్చేసి, మా వేడుకను మరింత మధురమైన జ్ఞాపకంగా మలచగలరని ఆశిస్తున్నాము.",
    love: "ప్రేమ మరియు శుభాకాంక్షలతో,",
    names: "స్నేహ & వెంకటేశ్వర్లు",
    date: "ఆదివారం, 22 నవంబర్ 2026",
  },
  share:
    "వివాహ శుభలేఖ 💐\nచి॥ ల॥ సౌ॥ స్నేహ మరియు చి॥ వెంకటేశ్వర్లు\nఆదివారం, 22 నవంబర్ 2026 · ఉదయం 11:22 గంటలకు\nపి.వి. ఫంక్షన్ హాల్, ఫ్లైఓవర్ ప్రక్కన, కోదాడ రోడ్డు, నాయకన్‌గూడెం.\n",
};

export type Dict = typeof groomEn;

export const sideDictionaries: Record<Side, Record<Lang, Dict>> = {
  bride: { en: brideEn, te: brideTe },
  groom: { en: groomEn, te: groomTe },
};

/** Default export — Bride's (Girl's) Side for wedding-2. */
export const dictionaries: Record<Lang, Dict> = sideDictionaries.bride;

export const getDictionary = (lang: Lang, side: Side = "bride"): Dict => {
  return sideDictionaries[side]?.[lang] || sideDictionaries.bride[lang];
};

export const mapsDirections = (q: string) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(q)}`;
export const mapsLocation = (q: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
export const mapsEmbed = (q: string) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(q)}&z=16&output=embed`;
