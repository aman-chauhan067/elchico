export interface StoryEra {
  id: string;
  year: string;
  title: string;
  description: string;
  image: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
}

export const story = [
  {
    id: 'era-1963',
    year: '1963',
    title: 'The Hong Kong Inspiration',
    description: 'During a stopover in Hong Kong, twenty-something graduate Ganesh Roy was enjoying a quiet cup of coffee when inspiration struck. He decided to open a little Cafe in Allahabad upon his return from Tokyo.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop', // Vintage bakery vibe
    bgColor: 'var(--color-peach)',
    textColor: 'var(--color-cocoa)',
    accentColor: 'var(--color-strawberry)'
  },
  {
    id: 'era-1964',
    title: 'The First Catering',
    year: '1964',
    description: 'El Chico proudly partnered with the growth of the city. The first outdoor catering managed by El Chico was to host Mr. JD Birla at the stone laying of Hindalco in 1964.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop', // Fine dining / historic look
    bgColor: '#87CEEB',
    textColor: '#191970',
    accentColor: '#191970'
  },
  {
    id: 'era-1965',
    title: 'The Legendary Pudding',
    year: '1965',
    description: 'Mr. Adi Godrej tried the El Chico Pudding for the first time in 1965 made by our head Baker Ala Dia at the wedding of Usha Roy to the son of Dr. Surendra Narula, Swarup.',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop', // Modern culinary
    bgColor: 'var(--color-vanilla)',
    textColor: 'var(--color-cocoa)',
    accentColor: 'var(--color-strawberry)'
  },
  {
    id: 'era-today',
    title: 'We Are Professional at Our Skills',
    year: 'Present',
    description: 'More than 2000+ customers trusted us',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop', // Restaurant ambiance
    bgColor: 'var(--color-pistachio)',
    textColor: 'var(--color-cocoa)',
    accentColor: 'var(--color-cocoa)',
    isStats: true
  }
];
