import ChartBars from '@/components/ChartBars';
import MainLayout from '@/layouts/MainLayout';
import { Card, Carousel, Progress } from 'flowbite-react';

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

const Cards = [
  {
      title:"vgv",
      color:"#00ACAC",
      valueInfo:"7,842.00",
      legend:"15% Better than last week",
      progressPercentage:15
  },
  {
      title:"Cadastro de Leads",
      color:"#348FE2",
      valueInfo:"180.200",
      legend:"63% Better than last week",
      progressPercentage:63
  },
  {
      title:"Pontos a liberar",
      color:"#727CB6",
      valueInfo:"38.900",
      legend:"18% Better than last week",
      progressPercentage:18
  },
  {
      title:"Pontos resgatados",
      color:"#2D353C",
      valueInfo:"3.988",
      legend:"37% Better than last week ",
      progressPercentage:37
  }
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
        <div className="grid w-full gap-2 grid-cols-2 h-full px-2 py-4">
          <div className="grid gap-2 grid-cols-2 h-full p-2 ">
            {Cards.map( (card, index) => (
              <div className='h-full w-full flex flex-col px-2 py-3 justify-between rounded-md bg-slate-800 gap-0'>
                <h2 className='m-0 uppercase text-gray-300'> {card.title} </h2>
                  <span className="text-gray-400  text-2xl"> {card.valueInfo} </span>
                  <p className="text-gray-400  text-sm"> {card.legend} </p>
                <Progress
                  progress={card.progressPercentage}
                  color="dark"
                />
              </div>
            ))}
          </div>
          <div className=''>
            <ChartBars />
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
