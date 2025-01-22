import './App.css'
import Neyandex from './components/Neyandex/Neyandex'

function App() {
  //На самом деле корневых даных нет, каждый дочерний компонент ходит на свои API
  const data = {
    newsData: {},
    promoData: {},
    searchData: {},
    bannerData: {},
    recomendationsData: {},
  };

  return (
    <>
      <Neyandex data={data}/>
    </>
  )
}

export default App
