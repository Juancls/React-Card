import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Top from './components/Top/Top'
import Card from './components/Card/Card'
import imgMato1 from './assets/imgText2.jpg'
import imgMato2 from './assets/mato.jpg'
import imgMato3 from './assets/mato2.jpg'
import imgMato4 from './assets/mato3.jpg'
import imgMato5 from './assets/mato4.jpg'

function App() {


  return (
    <>
      <Top/>
        <div className="box">
          <Card title="Floresta dos Sussurros" text="Um ecossistema denso e enevoado, onde a vegetação é tão fechada que a luz do sol raramente toca o solo. O lugar é marcado por um fenômeno acústico constante: o vento passando pelas frestas das árvores centenárias cria sons que se assemelham a vozes humanas sussurrando segredos, tornando a atmosfera pesada e desorientadora para qualquer visitante." img={imgMato1} />
          <Card title="Bosque Encantado de Eldoria" text="Um refúgio de natureza vibrante onde a magia se manifesta de forma visível. As árvores possuem folhas de tons prateados e dourados que emitem um brilho suave, iluminando o solo coberto por flores que nunca murcham. É um lugar de serenidade absoluta, onde o ar é carregado de uma energia purificadora e as águas dos riachos fluem com uma clareza cristalina, protegendo a fauna mística que habita suas profundezas." img={imgMato2} />
          <Card title="Bosque dos Mistérios" text="Um cenário enigmático onde a realidade parece se dobrar. O ar é carregado por uma neblina perpétua que distorce distâncias e formas, fazendo com que trilhas conhecidas mudem de lugar subitamente. É um ambiente de beleza estática e silenciosa, onde cada som parece abafado e o tempo flui de maneira irregular, desafiando a lógica de quem se atreve a explorá-lo." img={imgMato3} />
          <Card title="Bosque da Magia Antiga" text="Um santuário ancestral onde a própria terra pulsa com energias primordiais. As árvores possuem troncos colossais marcados por runas naturais que brilham em tons de azul profundo, e suas raízes expostas guardam segredos de eras esquecidas. É um lugar de poder bruto e reverência, onde a fauna e a flora evoluíram em simbiose com feitiços arcaicos, tornando o ambiente um repositório vivo da história mágica do mundo." img={imgMato4} />
          <Card title="Floresta dos Espíritos da Natureza" text="Um domínio sagrado onde o plano físico e o espiritual se sobrepõem em perfeita harmonia. É um lugar vibrante, onde cada elemento — das pedras cobertas de musgo às cascatas cristalinas — abriga uma entidade guardiã. Pequenas luzes flutuantes percorrem a vegetação densa, e as árvores parecem observar os visitantes com uma consciência milenar, reagindo às intenções daqueles que entram em seu território." img={imgMato5} />

        </div>
    </>
  )
}

export default App
