const sampleListing = [
  {
    title: "Cozy Hilltop Cottage",
    description: "Escape the chaos in this serene hilltop retreat.",
    image: {
      filename: "listingData",
      url: "https://res.cloudinary.com/dcfivzmbt/image/upload/v1753155458/wonderlust_dev/gcapwm7y1ez2vo80ixfd.jpg",
    },

    price: 2500,
    location: "Manali",
    country: "India",
  },
  {
    title: "Luxury Beach Villa",
    description: "Wake up to the sound of waves in this beachside villa.",
    image: {
      filename: "listingData",
      url: "https://res.cloudinary.com/dcfivzmbt/image/upload/v1753155458/wonderlust_dev/gcapwm7y1ez2vo80ixfd.jpg",
    },
    price: 10000,
    location: "Goa",
    country: "India",
  },
  {
    title: "Heritage Haveli",
    description: "Experience royal Rajasthani living in this vintage haveli.",
    image: {
      filename: "listingData",
      url: "https://res.cloudinary.com/dcfivzmbt/image/upload/v1753155458/wonderlust_dev/gcapwm7y1ez2vo80ixfd.jpg",
    },
    price: 3500,
    location: "Jaipur",
    country: "India",
  },
  {
    title: "Jungle Safari Camp",
    description: "Stay close to nature with wild views and comfort.",
    image: {
      filename: "listingData",
      url: "https://res.cloudinary.com/dcfivzmbt/image/upload/v1753155458/wonderlust_dev/gcapwm7y1ez2vo80ixfd.jpg",
    },
    price: 1800,
    location: "Jim Corbett",
    country: "India",
  },
  {
    title: "Snowy Cabin Escape",
    description: "Perfect winter escape with warm fires and cozy nights.",
    image: {
      filename: "listingData",
      url: "https://res.cloudinary.com/dcfivzmbt/image/upload/v1753155458/wonderlust_dev/gcapwm7y1ez2vo80ixfd.jpg",
    },
    price: 4500,
    location: "Shimla",
    country: "India",
  },
  {
    title: "Backwaters Houseboat",
    description: "Cruise through Kerala’s calm backwaters in style.",
    image: {
      filename: "listingData",
      url: "https://res.cloudinary.com/dcfivzmbt/image/upload/v1753155458/wonderlust_dev/gcapwm7y1ez2vo80ixfd.jpg",
    },
    price: 5200,
    location: "Alleppey",
    country: "India",
  },
  {
    title: "Lakeside Retreat",
    description: "Relax by the water in this peaceful lakeside stay.",
    image: {
      filename: "listingData",
      url: "https://res.cloudinary.com/dcfivzmbt/image/upload/v1753155458/wonderlust_dev/gcapwm7y1ez2vo80ixfd.jpg",
    },
    price: 3000,
    location: "Udaipur",
    country: "India",
  },
  {
    title: "Forest Hideout",
    description: "Unplug and unwind in a quiet forest cabin.",
    image: {
      filename: "listingData",
      url: "https://res.cloudinary.com/dcfivzmbt/image/upload/v1753155458/wonderlust_dev/gcapwm7y1ez2vo80ixfd.jpg",
    },
    price: 2800,
    location: "Wayanad",
    country: "India",
  },
  {
    title: "Modern City Loft",
    description: "A stylish apartment in the heart of the city.",
    image: {
      filename: "listingData",
      url: "https://res.cloudinary.com/dcfivzmbt/image/upload/v1753155458/wonderlust_dev/gcapwm7y1ez2vo80ixfd.jpg",
    },
    price: 4000,
    location: "Bangalore",
    country: "India",
  },
  {
    title: "Royal Palace Stay",
    description: "Feel like royalty in this lavish historic palace.",
    image: {
      filename: "listingData",
      url: "https://res.cloudinary.com/dcfivzmbt/image/upload/v1753155458/wonderlust_dev/gcapwm7y1ez2vo80ixfd.jpg",
    },
    price: 15000,
    location: "Jodhpur",
    country: "India",
  },
  {
    title: "Tea Estate Bungalow",
    description: "Stay amidst tea gardens with colonial charm.",
    image: {
      filename: "listingData",
      url: "https://res.cloudinary.com/dcfivzmbt/image/upload/v1753155458/wonderlust_dev/gcapwm7y1ez2vo80ixfd.jpg",
    },
    price: 3200,
    location: "Munnar",
    country: "India",
  },
  {
    title: "Himalayan Viewpoint Homestay",
    description: "Enjoy panoramic views of the Himalayas.",
    image: {
      filename: "listingData",
      url: "https://res.cloudinary.com/dcfivzmbt/image/upload/v1753155458/wonderlust_dev/gcapwm7y1ez2vo80ixfd.jpg",
    },
    price: 2700,
    location: "Darjeeling",
    country: "India",
  },
  {
    title: "Thar Desert Camp",
    description: "Sleep under the stars in the golden desert.",
    image: {
      filename: "listingData",
      url: "https://res.cloudinary.com/dcfivzmbt/image/upload/v1753155458/wonderlust_dev/gcapwm7y1ez2vo80ixfd.jpg",
    },
    price: 2000,
    location: "Jaisalmer",
    country: "India",
  },
  {
    title: "Riverfront Cabin",
    description: "A peaceful escape right beside the river.",
    image: {
      filename: "listingData",
      url: "https://res.cloudinary.com/dcfivzmbt/image/upload/v1753155458/wonderlust_dev/gcapwm7y1ez2vo80ixfd.jpg",
    },
    price: 3100,
    location: "Rishikesh",
    country: "India",
  },
  {
    title: "Boutique Heritage Home",
    description: "Live in a restored haveli with modern comforts.",
    image: {
      filename: "listingData",
      url: "https://res.cloudinary.com/dcfivzmbt/image/upload/v1753155458/wonderlust_dev/gcapwm7y1ez2vo80ixfd.jpg",
    },
    price: 3600,
    location: "Pushkar",
    country: "India",
  },
  {
    title: "Tropical Garden Villa",
    description: "Surround yourself with greenery and silence.",
    image: {
      filename: "listingData",
      url: "https://res.cloudinary.com/dcfivzmbt/image/upload/v1753155458/wonderlust_dev/gcapwm7y1ez2vo80ixfd.jpg",
    },
    price: 4300,
    location: "Pondicherry",
    country: "India",
  },
  {
    title: "Island Paradise Stay",
    description: "Private island feel with ocean views.",
    image: {
      filename: "listingData",
      url: "https://res.cloudinary.com/dcfivzmbt/image/upload/v1753155458/wonderlust_dev/gcapwm7y1ez2vo80ixfd.jpg",
    },
    price: 9000,
    location: "Andaman Islands",
    country: "India",
  },
  {
    title: "Luxury Himalayan Chalet",
    description: "Premium wooden chalet with fireplace and mountain views.",
    image: {
      filename: "listingData",
      url: "https://res.cloudinary.com/dcfivzmbt/image/upload/v1753155458/wonderlust_dev/gcapwm7y1ez2vo80ixfd.jpg",
    },
    price: 8500,
    location: "Auli",
    country: "India",
  },
  {
    title: "Historic Colonial Cottage",
    description: "British-era cottage with antique decor.",
    image: {
      filename: "listingData",
      url: "https://res.cloudinary.com/dcfivzmbt/image/upload/v1753155458/wonderlust_dev/gcapwm7y1ez2vo80ixfd.jpg",
    },
    price: 2900,
    location: "Ooty",
    country: "India",
  },
  {
    title: "Eco Bamboo Hut",
    description: "Sustainable bamboo hut with earthy vibes.",
    image: {
      filename: "listingData",
      url: "https://res.cloudinary.com/dcfivzmbt/image/upload/v1753155458/wonderlust_dev/gcapwm7y1ez2vo80ixfd.jpg",
    },
    price: 1800,
    location: "Meghalaya",
    country: "India",
  },
];

module.exports = { data: sampleListing };
