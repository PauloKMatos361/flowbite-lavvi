import MainLayout from '@/layouts/MainLayout';
import { Carousel } from 'flowbite-react';

const slides = [
  {
    img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
    link: 'https://www.google.com',
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry 1'
  },
  {
    img: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    link: 'https://www.google.com',
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry 2'
  },
  {
    img: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
    link: 'https://www.google.com',
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry 3'
  },

  {
    img: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
    link: 'https://www.google.com',
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry 4'
  },
  {
    img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
    link: 'https://www.google.com',
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry 5'
  },
];

export default function Home() {
  return (
    <MainLayout>
      <div className="w-full h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slideInterval={6000} indicators={false}>
          {
            slides.map((slide, index) => (
              <img
                className='bg-cover'
                key={`slide-${index}`}
                src={slide.img}
                alt={slide.title}
              />
            ))
          }
        </Carousel>
        <div className="flex h-full p-2 flex-wrap">
          <div className="w-1/3 h-full  bg-green-500"></div>
          <div className="w-1/3 h-full  bg-yellow-500"></div>
          <div className="w-1/3 h-full  bg-blue-500"></div>
          <div className="w-1/3 h-full bg-red-500"></div>
        </div>
      </div>
    </MainLayout>
  )
}
