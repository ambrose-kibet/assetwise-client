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

export const propertyTypes = [
  { _id: 'buy', name: 'buy' },
  { _id: 'rent', name: 'rent' },
];
export const propertyCategories = [
  { _id: 'residential', name: 'residential' },
  { _id: 'commercial', name: 'commercial' },
  { _id: 'aparment', name: 'apartment' },
  { _id: 'land', name: 'land' },
];

export const counties = [
  { _id: 'Mombasa', name: 'Mombasa' },
  { _id: 'Kwale', name: 'Kwale' },
  { _id: 'Kilifi', name: 'Kilifi' },
  { _id: 'TanaRiver', name: 'Tana River' },
  { _id: 'Lamu', name: 'Lamu' },
  { _id: 'TaitaTaveta', name: 'Taita-Taveta' },
  { _id: 'Garissa', name: 'Garissa' },
  { _id: 'Wajir', name: 'Wajir' },
  { _id: 'Mandera', name: 'Mandera' },
  { _id: 'Marsabit', name: 'Marsabit' },
  { _id: 'Isiolo', name: 'Isiolo' },
  { _id: 'Meru', name: 'Meru' },
  { _id: 'TharakaNithi', name: 'Tharaka-Nithi' },
  { _id: 'Embu', name: 'Embu' },
  { _id: 'Kitui', name: 'Kitui' },
  { _id: 'Machakos', name: 'Machakos' },
  { _id: 'Makueni', name: 'Makueni' },
  { _id: 'Nyandarua', name: 'Nyandarua' },
  { _id: 'Nyeri', name: 'Nyeri' },
  { _id: 'Kirinyaga', name: 'Kirinyaga' },
  { _id: 'Muranga', name: 'Murang’a' },
  { _id: 'Kiambu', name: 'Kiambu' },
  { _id: 'Turkana', name: 'Turkana' },
  { _id: 'WestPokot', name: 'West Pokot' },
  { _id: 'Samburu', name: 'Samburu' },
  { _id: 'TransNzoia', name: 'Trans Nzoia' },
  { _id: 'UasinGishu', name: 'Uasin Gishu' },
  { _id: 'ElgeyoMarakwet', name: 'Elgeyo-Marakwet' },
  { _id: 'Nandi', name: 'Nandi' },
  { _id: 'Baringo', name: 'Baringo' },
  { _id: 'Laikipia', name: 'Laikipia' },
  { _id: 'Nakuru', name: 'Nakuru' },
  { _id: 'Narok', name: 'Narok' },
  { _id: 'Kajiado', name: 'Kajiado' },
  { _id: 'Kericho', name: 'Kericho' },
  { _id: 'Bomet', name: 'Bomet' },
  { _id: 'Kakamega', name: 'Kakamega' },
  { _id: 'Vihiga', name: 'Vihiga' },
  { _id: 'Bungoma', name: 'Bungoma' },
  { _id: 'Busia', name: 'Busia' },
  { _id: 'Siaya', name: 'Siaya' },
  { _id: 'Kisumu', name: 'Kisumu' },
  { _id: 'HomaBay', name: 'Homa Bay' },
  { _id: 'Migori', name: 'Migori' },
  { _id: 'Kisii', name: 'Kisii' },
  { _id: 'Nyamira', name: 'Nyamira' },
  { _id: 'Nairobi', name: 'Nairobi' },
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

export const statuses = [
  { name: 'draft', id: '1' },
  { name: 'publish', id: '2' },
];
