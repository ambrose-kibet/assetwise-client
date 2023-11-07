import image1 from '../assets/img2.jpg';
import image3 from '../assets/img3.jpg';
import image4 from '../assets/img4.jpg';

export const featuredProperties = [
  {
    id: 1,
    image: image1,
    price: 100000,
    address: '1234 Main St',
    county: 'Los Angeles County',
    town: 'Los Angeles',
    bedrooms: 3,
    bathrooms: 2,
    acreage: 0.5,
    amenities: ['pool', 'fireplace', 'lake'],
  },
  {
    id: 2,
    image: image3,
    price: 150000,
    address: '1234 Main St',
    county: 'Los Angeles County',
    town: 'Los Angeles',
    bedrooms: 3,
    bathrooms: 2,
    acreage: 0.5,
    amenities: ['pool', 'lake'],
  },
  {
    id: 3,
    image: image4,
    price: 170000,
    address: '1234 Main St',
    county: 'Nairobi County',
    town: 'Nairobi',
    bedrooms: 5,
    bathrooms: 5,
    acreage: 8.5,
    amenities: ['beach', 'lake'],
  },
];
export const featuredBlogs = [
  {
    id: 1,
    title: 'Blog 1',
    coverImage: image1,
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
        recusandae ducimus dolorem minima quibusdam esse iure dolor qui magni
        minus atque placeat cumque deleniti et distinctio, explicabo laudantium
        asperiores quae cupiditate possimus ab provident, pariatur nostrum.
        Soluta vero fugiat iure?`,
  },
  {
    id: 2,
    title: 'Blog 2',
    coverImage: image3,
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
        recusandae ducimus dolorem minima quibusdam esse iure dolor qui magni
        minus atque placeat cumque deleniti et distinctio, explicabo laudantium
        asperiores quae cupiditate possimus ab provident, pariatur nostrum.
        Soluta vero fugiat iure?`,
  },
  {
    id: 3,
    title: 'Blog 3',
    coverImage: image4,
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
        recusandae ducimus dolorem minima quibusdam esse iure dolor qui magni
        minus atque placeat cumque deleniti et distinctio, explicabo laudantium
        asperiores quae cupiditate possimus ab provident, pariatur nostrum.
        Soluta vero fugiat iure?`,
  },
];

export const people = [
  {
    id: '1',
    name: 'Sylvester Langat',
    contact: '+254716128992',
    position: 'Relationship Manager',
    description:
      'Successful entrepreneur, owner of Sonoy Works and engineer by profession.',
  },
  {
    id: '2',
    name: 'Gideon Cheruiyot ',
    contact: '+254718567275',
    position: 'Marketing and operations Manager',
    description:
      'Successful career working with property managers as an auditor, a CPA and software developer.',
  },
];

export const categories = [
  { name: 'Land', id: '1' },
  { name: 'For Sale', id: '2' },
  { name: 'For Rent', id: '3' },
];

export const statuses = [
  { name: 'draft', id: '1' },
  { name: 'publish', id: '2' },
];
