import categoryItems from "@/sections/Categories/categoryItems";

const collectionGroups = [
  {
    isActive: true,
    title: 'Movies',
    items: [
      {
        title: 'Our Genres',
        categoryItems,
      },
      {
        title: 'Popular Top 10 In Genres',
        categoryItems: [
          {
            title: 'Action',
            badge: 'Top 10 In',
            images: [
              './src/assets/images/categories/action/21.jpg',
              './src/assets/images/categories/action/22.jpg',
              './src/assets/images/categories/action/23.jpg',
              './src/assets/images/categories/action/24.jpg',
            ],
          },
          {
            title: 'Adventure',
            badge: 'Top 10 In',
            images: [
              './src/assets/images/categories/adventure/25.jpg',
              './src/assets/images/categories/adventure/26.jpg',
              './src/assets/images/categories/adventure/27.jpg',
              './src/assets/images/categories/adventure/28.jpg',
            ],
          },
          {
            title: 'Comedy',
            badge: 'Top 10 In',
            images: [
              './src/assets/images/categories/comedy/29.jpg',
              './src/assets/images/categories/comedy/30.jpg',
              './src/assets/images/categories/comedy/31.jpg',
              './src/assets/images/categories/comedy/32.jpg',
            ],
          },
          {
            title: 'Drama',
            badge: 'Top 10 In',
            images: [
              './src/assets/images/categories/drama/33.jpg',
              './src/assets/images/categories/drama/34.jpg',
              './src/assets/images/categories/drama/35.jpg',
              './src/assets/images/categories/drama/36.jpg',
            ],
          },
          {
            title: 'Action',
            badge: 'Top 10 In',
            images: [
              './src/assets/images/categories/action/21.jpg',
              './src/assets/images/categories/action/22.jpg',
              './src/assets/images/categories/action/23.jpg',
              './src/assets/images/categories/action/24.jpg',
            ],
          },
          {
            title: 'Adventure',
            badge: 'Top 10 In',
            images: [
              './src/assets/images/categories/adventure/25.jpg',
              './src/assets/images/categories/adventure/26.jpg',
              './src/assets/images/categories/adventure/27.jpg',
              './src/assets/images/categories/adventure/28.jpg',
            ],
          },
          {
            title: 'Comedy',
            badge: 'Top 10 In',
            images: [
              './src/assets/images/categories/comedy/29.jpg',
              './src/assets/images/categories/comedy/30.jpg',
              './src/assets/images/categories/comedy/31.jpg',
              './src/assets/images/categories/comedy/32.jpg',
            ],
          },
          {
            title: 'Drama',
            badge: 'Top 10 In',
            images: [
              './src/assets/images/categories/drama/33.jpg',
              './src/assets/images/categories/drama/34.jpg',
              './src/assets/images/categories/drama/35.jpg',
              './src/assets/images/categories/drama/36.jpg',
            ],
          },
          {
            title: 'Action',
            badge: 'Top 10 In',
            images: [
              './src/assets/images/categories/action/21.jpg',
              './src/assets/images/categories/action/22.jpg',
              './src/assets/images/categories/action/23.jpg',
              './src/assets/images/categories/action/24.jpg',
            ],
          },
          {
            title: 'Adventure',
            badge: 'Top 10 In',
            images: [
              './src/assets/images/categories/adventure/25.jpg',
              './src/assets/images/categories/adventure/26.jpg',
              './src/assets/images/categories/adventure/27.jpg',
              './src/assets/images/categories/adventure/28.jpg',
            ],
          },
          {
            title: 'Comedy',
            badge: 'Top 10 In',
            images: [
              './src/assets/images/categories/comedy/29.jpg',
              './src/assets/images/categories/comedy/30.jpg',
              './src/assets/images/categories/comedy/31.jpg',
              './src/assets/images/categories/comedy/32.jpg',
            ],
          },
          {
            title: 'Drama',
            badge: 'Top 10 In',
            images: [
              './src/assets/images/categories/drama/33.jpg',
              './src/assets/images/categories/drama/34.jpg',
              './src/assets/images/categories/drama/35.jpg',
              './src/assets/images/categories/drama/36.jpg',
            ],
          },
          {
            title: 'Action',
            badge: 'Top 10 In',
            images: [
              './src/assets/images/categories/action/21.jpg',
              './src/assets/images/categories/action/22.jpg',
              './src/assets/images/categories/action/23.jpg',
              './src/assets/images/categories/action/24.jpg',
            ],
          },
          {
            title: 'Adventure',
            badge: 'Top 10 In',
            images: [
              './src/assets/images/categories/adventure/25.jpg',
              './src/assets/images/categories/adventure/26.jpg',
              './src/assets/images/categories/adventure/27.jpg',
              './src/assets/images/categories/adventure/28.jpg',
            ],
          },
          {
            title: 'Comedy',
            badge: 'Top 10 In',
            images: [
              './src/assets/images/categories/comedy/29.jpg',
              './src/assets/images/categories/comedy/30.jpg',
              './src/assets/images/categories/comedy/31.jpg',
              './src/assets/images/categories/comedy/32.jpg',
            ],
          },
          {
            title: 'Drama',
            badge: 'Top 10 In',
            images: [
              './src/assets/images/categories/drama/33.jpg',
              './src/assets/images/categories/drama/34.jpg',
              './src/assets/images/categories/drama/35.jpg',
              './src/assets/images/categories/drama/36.jpg',
            ],
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 20, 
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20, 
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            }
          }
        },
      },
      {
        title: 'Trending Now',
        movieItems: [
          {
            title: 'Morbius',
            imgSrc: './src/assets/images/categories/trending-now/1.jpg',
            duration: '1h 30min',
            views: '2K'
          },
          {
            title: 'Bhai Jaan',
            imgSrc: './src/assets/images/categories/trending-now/2.jpg',
            duration: '1h 57min',
            views: '1.5K'
          },
          {
            title: 'Suraj pe mangal bhari',
            imgSrc: './src/assets/images/categories/trending-now/3.jpg',
            duration: '2h 10min',
            views: '1.8K'
          },
          {
            title: 'Pathan',
            imgSrc: './src/assets/images/categories/trending-now/4.jpg',
            duration: '2h 20min',
            views: '3K'
          },
          {
            title: 'Ant-Man',
            imgSrc: './src/assets/images/categories/trending-now/5.jpg',
            duration: '1h 42min',
            views: '5K'
          },
          {
            title: 'Morbius',
            imgSrc: './src/assets/images/categories/trending-now/1.jpg',
            duration: '1h 30min',
            views: '2K'
          },
          {
            title: 'Bhai Jaan',
            imgSrc: './src/assets/images/categories/trending-now/2.jpg',
            duration: '1h 57min',
            views: '1.5K'
          },
          {
            title: 'Suraj pe mangal bhari',
            imgSrc: './src/assets/images/categories/trending-now/3.jpg',
            duration: '2h 10min',
            views: '1.8K'
          },
          {
            title: 'Pathan',
            imgSrc: './src/assets/images/categories/trending-now/4.jpg',
            duration: '2h 20min',
            views: '3K'
          },
          {
            title: 'Ant-Man',
            imgSrc: './src/assets/images/categories/trending-now/5.jpg',
            duration: '1h 42min',
            views: '5K'
          },
          {
            title: 'Morbius',
            imgSrc: './src/assets/images/categories/trending-now/1.jpg',
            duration: '1h 30min',
            views: '2K'
          },
          {
            title: 'Bhai Jaan',
            imgSrc: './src/assets/images/categories/trending-now/2.jpg',
            duration: '1h 57min',
            views: '1.5K'
          },
          {
            title: 'Suraj pe mangal bhari',
            imgSrc: './src/assets/images/categories/trending-now/3.jpg',
            duration: '2h 10min',
            views: '1.8K'
          },
          {
            title: 'Pathan',
            imgSrc: './src/assets/images/categories/trending-now/4.jpg',
            duration: '2h 20min',
            views: '3K'
          },
          {
            title: 'Ant-Man',
            imgSrc: './src/assets/images/categories/trending-now/5.jpg',
            duration: '1h 42min',
            views: '5K'
          },
          {
            title: 'Morbius',
            imgSrc: './src/assets/images/categories/trending-now/1.jpg',
            duration: '1h 30min',
            views: '2K'
          },
          {
            title: 'Bhai Jaan',
            imgSrc: './src/assets/images/categories/trending-now/2.jpg',
            duration: '1h 57min',
            views: '1.5K'
          },
          {
            title: 'Suraj pe mangal bhari',
            imgSrc: './src/assets/images/categories/trending-now/3.jpg',
            duration: '2h 10min',
            views: '1.8K'
          },
          {
            title: 'Pathan',
            imgSrc: './src/assets/images/categories/trending-now/4.jpg',
            duration: '2h 20min',
            views: '3K'
          },
          {
            title: 'Ant-Man',
            imgSrc: './src/assets/images/categories/trending-now/5.jpg',
            duration: '1h 42min',
            views: '5K'
          },
          {
            title: 'Morbius',
            imgSrc: './src/assets/images/categories/trending-now/1.jpg',
            duration: '1h 30min',
            views: '2K'
          },
          {
            title: 'Bhai Jaan',
            imgSrc: './src/assets/images/categories/trending-now/2.jpg',
            duration: '1h 57min',
            views: '1.5K'
          },
          {
            title: 'Suraj pe mangal bhari',
            imgSrc: './src/assets/images/categories/trending-now/3.jpg',
            duration: '2h 10min',
            views: '1.8K'
          },
          {
            title: 'Pathan',
            imgSrc: './src/assets/images/categories/trending-now/4.jpg',
            duration: '2h 20min',
            views: '3K'
          },
          {
            title: 'Ant-Man',
            imgSrc: './src/assets/images/categories/trending-now/5.jpg',
            duration: '1h 42min',
            views: '5K'
          },
        ],
      },
      {
        title: 'New Releases',
        movieItems: [
          {
            title: 'Adipurush',
            imgSrc: './src/assets/images/categories/new-releases/1.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            },
          },
          {
            title: 'Adipurush',
            imgSrc: './src/assets/images/categories/new-releases/2.jpg',
            released: {
              label: '22 April 2023',
              dateTime: '2023-04-22',
            },
          },
          {
            title: 'Sin-city',
            imgSrc: './src/assets/images/categories/new-releases/3.jpg',
            released: {
              label: '13 April 2023',
              dateTime: '2023-04-13',
            },
          },
          {
            title: 'Tommorow war',
            imgSrc: './src/assets/images/categories/new-releases/4.jpg',
            released: {
              label: '19 April 2023',
              dateTime: '2023-04-19',
            },
          },
          {
            title: 'Misfire',
            imgSrc: './src/assets/images/categories/new-releases/5.jpg',
            released: {
              label: '11 April 2023',
              dateTime: '2023-04-11',
            },
          },
          {
            title: 'Adipurush',
            imgSrc: './src/assets/images/categories/new-releases/1.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            },
          },
          {
            title: 'Adipurush',
            imgSrc: './src/assets/images/categories/new-releases/2.jpg',
            released: {
              label: '22 April 2023',
              dateTime: '2023-04-22',
            },
          },
          {
            title: 'Sin-city',
            imgSrc: './src/assets/images/categories/new-releases/3.jpg',
            released: {
              label: '13 April 2023',
              dateTime: '2023-04-13',
            },
          },
          {
            title: 'Tommorow war',
            imgSrc: './src/assets/images/categories/new-releases/4.jpg',
            released: {
              label: '19 April 2023',
              dateTime: '2023-04-19',
            },
          },
          {
            title: 'Misfire',
            imgSrc: './src/assets/images/categories/new-releases/5.jpg',
            released: {
              label: '11 April 2023',
              dateTime: '2023-04-11',
            },
          },
          {
            title: 'Adipurush',
            imgSrc: './src/assets/images/categories/new-releases/1.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            },
          },
          {
            title: 'Adipurush',
            imgSrc: './src/assets/images/categories/new-releases/2.jpg',
            released: {
              label: '22 April 2023',
              dateTime: '2023-04-22',
            },
          },
          {
            title: 'Sin-city',
            imgSrc: './src/assets/images/categories/new-releases/3.jpg',
            released: {
              label: '13 April 2023',
              dateTime: '2023-04-13',
            },
          },
          {
            title: 'Tommorow war',
            imgSrc: './src/assets/images/categories/new-releases/4.jpg',
            released: {
              label: '19 April 2023',
              dateTime: '2023-04-19',
            },
          },
          {
            title: 'Misfire',
            imgSrc: './src/assets/images/categories/new-releases/5.jpg',
            released: {
              label: '11 April 2023',
              dateTime: '2023-04-11',
            },
          },
          {
            title: 'Adipurush',
            imgSrc: './src/assets/images/categories/new-releases/1.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            },
          },
          {
            title: 'Adipurush',
            imgSrc: './src/assets/images/categories/new-releases/2.jpg',
            released: {
              label: '22 April 2023',
              dateTime: '2023-04-22',
            },
          },
          {
            title: 'Sin-city',
            imgSrc: './src/assets/images/categories/new-releases/3.jpg',
            released: {
              label: '13 April 2023',
              dateTime: '2023-04-13',
            },
          },
          {
            title: 'Tommorow war',
            imgSrc: './src/assets/images/categories/new-releases/4.jpg',
            released: {
              label: '19 April 2023',
              dateTime: '2023-04-19',
            },
          },
          {
            title: 'Misfire',
            imgSrc: './src/assets/images/categories/new-releases/5.jpg',
            released: {
              label: '11 April 2023',
              dateTime: '2023-04-11',
            },
          },
        ],
      },
      {
        title: 'Must - Watch Movies',
        movieItems: [
          {
            title: 'Kantara',
            imgSrc: './src/assets/images/categories/watch-movies/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },
          {
            title: 'Pushpa',
            imgSrc: './src/assets/images/categories/watch-movies/2.jpg',
            duration: '1h 30min',
            rating: {
              value: 4,
              label: '20K',
            }
          },
          {
            title: 'Blade runner',
            imgSrc: './src/assets/images/categories/watch-movies/3.jpg',
            duration: '1h 42min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: './src/assets/images/categories/watch-movies/4.jpg',
            duration: '2h 10min',
            rating: {
              value: 4,
              label: '20K',
            }
          },
          {
            title: 'Kantara',
            imgSrc: './src/assets/images/categories/watch-movies/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },
          {
            title: 'Pushpa',
            imgSrc: './src/assets/images/categories/watch-movies/2.jpg',
            duration: '1h 30min',
            rating: {
              value: 4,
              label: '20K',
            }
          },
          {
            title: 'Blade runner',
            imgSrc: './src/assets/images/categories/watch-movies/3.jpg',
            duration: '1h 42min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: './src/assets/images/categories/watch-movies/4.jpg',
            duration: '2h 10min',
            rating: {
              value: 4,
              label: '20K',
            }
          },
          {
            title: 'Kantara',
            imgSrc: './src/assets/images/categories/watch-movies/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },
          {
            title: 'Pushpa',
            imgSrc: './src/assets/images/categories/watch-movies/2.jpg',
            duration: '1h 30min',
            rating: {
              value: 4,
              label: '20K',
            }
          },
          {
            title: 'Blade runner',
            imgSrc: './src/assets/images/categories/watch-movies/3.jpg',
            duration: '1h 42min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: './src/assets/images/categories/watch-movies/4.jpg',
            duration: '2h 10min',
            rating: {
              value: 4,
              label: '20K',
            }
          },
          {
            title: 'Kantara',
            imgSrc: './src/assets/images/categories/watch-movies/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },
          {
            title: 'Pushpa',
            imgSrc: './src/assets/images/categories/watch-movies/2.jpg',
            duration: '1h 30min',
            rating: {
              value: 4,
              label: '20K',
            }
          },
          {
            title: 'Blade runner',
            imgSrc: './src/assets/images/categories/watch-movies/3.jpg',
            duration: '1h 42min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: './src/assets/images/categories/watch-movies/4.jpg',
            duration: '2h 10min',
            rating: {
              value: 4,
              label: '20K',
            }
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 20, 
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20, 
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            }
          }
        },
      },
    ]
  }
];

export default collectionGroups;