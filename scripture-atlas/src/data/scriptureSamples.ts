export type TraditionKey = 'bible' | 'torah' | 'quran';

export type ChapterSample = {
  chapter: string;
  title: string;
  verses: string[];
};

export type BookSample = {
  book: string;
  chapters: ChapterSample[];
};

export const scriptureSamples: Record<TraditionKey, BookSample[]> = {
  bible: [
    { book: 'Genesis', chapters: [{ chapter: '1', title: 'Creation', verses: ['In the beginning God created the heaven and the earth.', 'And God said, Let there be light: and there was light.'] }] },
    { book: 'Exodus', chapters: [{ chapter: '3', title: 'Burning Bush', verses: ['God called unto him out of the midst of the bush, and said, Moses, Moses.', 'I AM THAT I AM.'] }] },
    { book: 'Psalms', chapters: [{ chapter: '23', title: 'The Shepherd Psalm', verses: ['The Lord is my shepherd; I shall not want.', 'He restoreth my soul: he leadeth me in the paths of righteousness.'] }] },
    { book: 'Proverbs', chapters: [{ chapter: '3', title: 'Trust in the Lord', verses: ['Trust in the Lord with all thine heart; and lean not unto thine own understanding.', 'In all thy ways acknowledge him, and he shall direct thy paths.'] }] },
    { book: 'Matthew', chapters: [{ chapter: '5', title: 'Beatitudes', verses: ['Blessed are the poor in spirit: for theirs is the kingdom of heaven.', 'Blessed are the peacemakers: for they shall be called the children of God.'] }] },
    { book: 'John', chapters: [{ chapter: '1', title: 'The Word', verses: ['In the beginning was the Word, and the Word was with God, and the Word was God.', 'And the Word was made flesh, and dwelt among us.'] }] }
  ],
  torah: [
    { book: 'Bereshit', chapters: [{ chapter: '1', title: 'Creation', verses: ['In the beginning, God created the heavens and the earth.', 'God said, “Let there be light,” and there was light.'] }] },
    { book: 'Shemot', chapters: [{ chapter: '3', title: 'Burning Bush', verses: ['God called to him from within the bush, “Moses! Moses!”', '“I Will Be What I Will Be.”'] }] },
    { book: 'Vayikra', chapters: [{ chapter: '19', title: 'Holiness Code', verses: ['You shall be holy, for I, the Lord your God, am holy.', 'You shall love your neighbor as yourself.'] }] },
    { book: 'Devarim', chapters: [{ chapter: '6', title: 'Shema', verses: ['Hear, O Israel: The Lord is our God, the Lord alone.', 'You shall love the Lord your God with all your heart, with all your soul, and with all your might.'] }] }
  ],
  quran: [
    { book: 'Al-Fatihah', chapters: [{ chapter: '1', title: 'The Opening', verses: ['In the Name of Allah—the Most Compassionate, Most Merciful.', 'Guide us to the straight path.'] }] },
    { book: 'Al-Baqarah', chapters: [{ chapter: '2', title: 'The Cow', verses: ['This is the Book! There is no doubt about it—a guide for those mindful of Allah.', 'Allah does not burden a soul beyond that it can bear.'] }] },
    { book: 'Al-Imran', chapters: [{ chapter: '3', title: 'Family of Imran', verses: ['He has revealed to you ˹O Prophet˺ the Book in truth.', 'So put your trust in Allah; surely Allah loves those who trust in Him.'] }] },
    { book: 'An-Nisa', chapters: [{ chapter: '4', title: 'Women', verses: ['O humanity! Be mindful of your Lord, Who created you from a single soul.', 'Indeed, Allah commands you to render trusts to whom they are due.'] }] },
    { book: 'Yusuf', chapters: [{ chapter: '12', title: 'Joseph', verses: ['Indeed, in the stories of them there is a lesson for people of understanding.', 'Surely my Lord is subtle in fulfilling what He wills.'] }] },
    { book: 'Al-Isra', chapters: [{ chapter: '17', title: 'The Night Journey', verses: ['Glory be to the One Who took His servant by night.', 'Do not pursue that of which you have no knowledge.'] }] },
    { book: 'An-Nur', chapters: [{ chapter: '24', title: 'The Light', verses: ['Allah is the Light of the heavens and the earth.', 'Allah makes clear His revelations for the people.'] }] },
    { book: 'Ya-Sin', chapters: [{ chapter: '36', title: 'Ya-Sin', verses: ['By the wise Quran, you are truly one of the messengers.', 'His command is only when He intends a thing that He says to it, “Be,” and it is.'] }] },
    { book: 'Ar-Rahman', chapters: [{ chapter: '55', title: 'The Most Compassionate', verses: ['The Most Compassionate taught the Quran.', 'So which of the favors of your Lord would you deny?'] }] },
    { book: 'Al-Ikhlas', chapters: [{ chapter: '112', title: 'Sincerity', verses: ['Say, ˹O Prophet,˺ “He is Allah—One ˹and Indivisible˺.”', 'And there is none comparable to Him.”'] }] }
  ]
};
