import './App.css'
import Card from './components/Card';
import { CardBody } from './components/CardBody';
import { CardImage } from './components/CardImage';
import { TCard } from './types/card';

function App() {

  const propsList: TCard[] = [
    {
      image: "/images/cat1.jpg",
      title: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      buttonTitle: "Dominis vobiscum",
    },
    {
      image: "/images/cat2.jpg",
      title: "Ipsum dolor",
      buttonTitle: "Pax omni",
    },
    {
      title: "Dolor sit",
      text: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttonTitle: "A novo",
    },
    {
      text: "Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttonTitle: "Acta est fabula!",
    },
    {
      text: "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "/images/cat5.jpg",
      title: "Consetetuer adipiscing",
      text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
  ];

  return (
    <>
      {propsList.map((props) => {
        return (
          <Card props={props}>
            <CardImage />
            <CardBody />
          </Card>
        );
      })}
    </>
  );
}

export default App
