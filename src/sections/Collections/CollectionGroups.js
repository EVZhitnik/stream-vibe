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
        }
      }
    ]
  }
];

export default collectionGroups;