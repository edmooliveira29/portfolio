import React from "react"
import Head from "next/head"

const Course = () => {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet" />
        <title>AluraPlay by Edmo</title>
        <link rel="shortcut icon"
          href="/img/favicon.ico"
          type="image/x-icon" />
      </Head>

      <header>

        <nav className="cabecalho__container">

          <h1 className="logo__item" ></h1>

          <div className="cabecalho__pesquisar__item">
            <form action="">
              <input type="search"
                placeholder="Pesquisar"
                id="pesquisar"
                className="pesquisar__input" />
              <label className="pesquisar__label"></label>
            </form>
            <a href="#"
              className="cabecalho__audio"></a>
          </div>

          <div className="cabecalho__icones__item">
            <a href="#"
              className="cabecalho__videos"></a>
            <a href="#"
              className="cabecalho__apps"></a>
            <a href="#"
              className="cabecalho__notificacoes"></a>
            <a href="#"
              className="cabecalho__avatar"></a>
          </div>

        </nav>

      </header>

      <aside className="menu__container">
        <ul className="menu__lista">
          <li>
            <a className="menu__itens"
              href="#">
              <i className="icone__inicio icone-item"></i>
              <span>Início</span></a>
          </li>

          <li>
            <a className="menu__itens"
              href="#">
              <i className="icone__explorar icone-item"></i>
              <span>Explorar</span></a>
          </li>

          <li>
            <a className="menu__itens"
              href="#">
              <i className="icone__shorts icone-item"></i>
              <span>Shorts</span></a>
          </li>

          <li>
            <a className="menu__itens"
              href="#">
              <i className="icone__inscricoes icone-item"></i>
              <span>Inscrições</span></a>
          </li>

          <li>
            <a className="menu__itens"
              href="#">
              <i className="icone__biblioteca icone-item"></i>
              <span>Biblioteca</span></a>
          </li>
        </ul>

        <ul className="menu__lista">
          <li>
            <a className="menu__itens"
              href="#">
              <i className="icone__historico icone-item"></i>
              <span>Histórico</span></a>
          </li>

          <li>
            <a className="menu__itens"
              href="#">
              <i className="icone__relogio icone-item"></i>
              <span>Assistir mais tarde</span></a>
          </li>

          <li>
            <a className="menu__itens"
              href="#">
              <i className="icone__like icone-item"></i>
              <span>Marcados com like</span></a>
          </li>
        </ul>

        <ul className="menu__lista">
          <li>
            <a className="menu__itens inscricoes"
              href="#">INSCRIÇÕES</a>
          </li>


          <li>
            <a className="menu__itens"
              href="#">
              <i className="icone__deschamps icone-item"></i>
              <span>Felipe Deschamps</span></a>
          </li>

          <li>
            <a className="menu__itens"
              href="#">
              <i className="icone__nerd icone-item"></i>
              <span>Jovem Nerd</span></a>
          </li>

          <li>
            <a className="menu__itens"
              href="#">
              <i className="icone__souto icone-item"></i>
              <span>Mario Souto</span></a>
          </li>

          <li>
            <a className="menu__itens"
              href="#">
              <i className="icone__iamarino icone-item"></i>
              <span>Atila Iamarino</span></a>
          </li>

          <li>
            <a className="menu__itens"
              href="#">
              <i className="icone__ballerini icone-item"></i>
              <span>Rafaella Ballerini</span></a>
          </li>

          <li>
            <a className="menu__itens"
              href="#">
              <i className="icone__gaveta icone-item"></i>
              <span>Gaveta</span></a>
          </li>

          <li>
            <a className="menu__itens"
              href="#">
              <i className="icone__alura icone-item"></i>
              <span>Alura</span></a>
          </li>
          <li>
            <a className="menu__itens"
              href="#">
              <i className="icone__mostrar icone-item"></i>
              <span>Mostrar mais 2</span></a>
          </li>
        </ul>

        <ul className="menu__lista">
          <li className="menu__itens maispagina">
            <a href="#">MAIS DA PÁGINA</a>
          </li>
          <li className="jogos">
            <a className="menu__itens"
              href="#">
              <i className="icone__jogos icone-item"></i>
              <span>Jogos</span></a>
          </li>

          <li className="filmes">
            <a className="menu__itens"
              href="#">
              <i className="icone__filmes icone-item"></i>
              <span>Filmes</span></a>
          </li>
          <li className="premium">
            <a className="menu__itens"
              href="#">
              <i className="icone__videos icone-item"></i>
              <span>Vídeo Premium</span></a>
          </li>


        </ul>
      </aside>


      <section className="superior__secao__container">
        <a className="superior__item"
          href="#">Tudo</a>
        <a className="superior__item"
          href="#">Debates</a>
        <a className="superior__item"
          href="#">Ao Vivo</a>
        <a className="superior__item"
          href="#">Podcasts</a>
        <a className="superior__item"
          href="#">Fundos de Investimento</a>
        <a className="superior__item"
          href="#">Desenhos</a>
        <a className="superior__item"
          href="#">Data Science</a>
        <a className="superior__item"
          href="#">Apps</a>
        <a className="superior__item"
          href="#">Linguagem de Programação</a>
        <a className="superior__item"
          href="#">Ciência da Computação</a>
        <a className="superior__item"
          href="#">Marketing</a>
      </section>


      <ul className="videos__container">
        <li className="videos__item">
          <iframe width="100%"
            height="72%"
            src="https://www.youtube.com/embed/pA-EgOaF23I"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
          <div className="descricao-video">

            <h3>Qual é o melhor hardware para programação com Mario Souto</h3>
            <p>236 mil visualizações - Há 8 dias</p>
          </div>
        </li>
        <li className="videos__item">
          <iframe width="100%"
            height="72%"
            src="https://www.youtube.com/embed/OrnUhR41MYI"
            title="Voltando ao mercado após a maternidade: Ana Silvério"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
          <div className="descricao-video">

            <h3>Voltando ao mercado após a maternidade: Ana Silvério</h3>
            <p>618 visualizações - Há 1 mês</p>
          </div>
        </li>
        <li className="videos__item">
          <iframe width="100%"
            height="72%"
            src="https://www.youtube.com/embed/YhnNOTde2I0"
            title="Mercado de Trabalho | Desmistificando Mobile - Episódio 5"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
          <div className="descricao-video">

            <h3>Mercado de Trabalho | Desmistificando Mobile...</h3>
            <p>1,1 mil visualizações - Há 1 mês</p>
          </div>
        </li>
        <li className="videos__item">
          <iframe width="100%"
            height="72%"
            src="https://www.youtube.com/embed/y8FeZMv37WU"
            title="Conhecendo a linguagem Go | Hipsters.Talks"

            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
          <div className="descricao-video">

            <h3>Conhecendo a linguagem Go | Hipsters.Talks</h3>
            <p>3 mil visualizações - Há 3 meses</p>
          </div>
        </li>
        <li className="videos__item">
          <iframe width="100%"
            height="72%"
            src="https://www.youtube.com/embed/fmu1LQvZhms"
            title="Desmistificando mobile- Linguagens e Frameworks - Episódio 2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
          <div className="descricao-video">

            <h3>Desmistificando mobile- Linguagens e Frameworks</h3>
            <p>1,5 mil visualizações - Há 2 meses</p>
          </div>
        </li>
        <li className="videos__item">
          <iframe width="100%"
            height="72%"
            src="https://www.youtube.com/embed/jpuJ1qrluoU"
            title="Orientação a objetos com Roberta Arcoverde | #HipstersPontoTube"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
          <div className="descricao-video">

            <h3>Orientação a objetos com Roberta Arcoverde | #Hipster...</h3>
            <p>30 mil visualizações - Há 3 meses</p>
          </div>
        </li>
        <li className="videos__item">
          <iframe width="100%"
            height="72%"
            src="https://www.youtube.com/embed/2HhPcadvjqU"
            title="Tire suas dúvidas sobre o bootcamp de Data Science."
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
          <div className="descricao-video">

            <h3>Tire suas dúvidas sobre o bootcamp de Data Science...</h3>
            <p>1,6 mil visualizações - Transmitido há 6 meses</p>
          </div>
        </li>
        <li className="videos__item">
          <iframe width="100%"
            height="72%"
            src="https://www.youtube.com/embed/h83e1aAM5xQ"
            title="
                4:06
                TOCANDO AGORA
                Linguagens e ferramentas usadas em Ciência de Dados | Universo Data Science - Episódio 3"

            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
          <div className="descricao-video">

            <h3>Linguagens e ferramentas usadas em Ciência de Dados...</h3>
            <p>2,5 mil visualizações - Há 9 dias</p>
          </div>
        </li>
        <li className="videos__item">
          <iframe width="100%"
            height="72%"
            src="https://www.youtube.com/embed/CnB3eLTrkn4"
            title="Reencontrando a paixão por programar: Beatriz Ramerindo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
          <div className="descricao-video">

            <h3>Reencontrando a paixão por programar: Beatriz Ramerindo</h3>
            <p>1,2 mil visualizações - Há 1 mês</p>
          </div>
        </li>
        <li className="videos__item">
          <iframe width="100%"
            height="72%"
            src="https://www.youtube.com/embed/vf9P_PycgRw"
            title="Híbridos: Flutter e React Native | Desmistificando Mobile - Episódio 4"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
          <div className="descricao-video">

            <h3>Híbridos: Flutter e React Native | Desmistificando...</h3>
            <p>1,6 mil visualizações - Há 1 mês</p>
          </div>
        </li>
        <li className="videos__item">
          <iframe width="100%"
            height="72%"
            src="https://www.youtube.com/embed/Nts3P35mHzE"
            title="Data Science na prática- com Jéssika Ribeiro do Grupo Boticário | Universo Data Science - Episódio 4"

            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
          <div className="descricao-video">

            <h3>Data Science na prática- com Jéssika Ribeiro do Grupo...</h3>
            <p>3,2 mil visualizações - Há 7 dias</p>
          </div>
        </li>
        <li className="videos__item">
          <iframe width="100%"
            height="72%"
            src="https://www.youtube.com/embed/HBVCsBtsmzA"
            title="baNaNa | Memes do JavaScript - Episódio 2"

            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
          <div className="descricao-video">

            <h3>baNaNa | Memes do JavaScript #2</h3>
            <p>1,2 mil visualizações - Há 5 dias</p>
          </div>
        </li>
        <li className="videos__item">
          <iframe width="100%"
            height="72%"
            src="https://www.youtube.com/embed/SyEdlBSw11k"
            title="Aniversário da Casa do Código | 10 anos da sua editora de Tecnologia"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
          <div className="descricao-video">

            <h3>Aniversário da Casa do Código | 10 anos da sua editora de...</h3>
            <p>1,3 mil visualizações - Há 1 mês</p>
          </div>
        </li>
        <li className="videos__item">
          <iframe width="100%"
            height="72%"
            src="https://www.youtube.com/embed/FKYBCl_I9zU"
            title="Jetpack Compose: Estados e animações | #AluraMais"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
          <div className="descricao-video">

            <h3>Jetpack Compose: Estados e animações</h3>
            <p>1,6 mil visualizações - Há 8 dias</p>
          </div>
        </li>
        <li className="videos__item">
          <iframe width="100%"
            height="72%"
            src="https://www.youtube.com/embed/68EGCA67g_A"
            title="[Casa do Código] Lançamento do Livro Certificação Linux"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
          <div className="descricao-video">

            <h3>[Casa do Código] Lançamento do Livro Certificação Linux</h3>
            <p>1,2 mil visualizações - Há 1 mês</p>
          </div>
        </li>
        <li className="videos__item">
          <iframe width="100%"
            height="72%"
            src="https://www.youtube.com/embed/VHxoyduIt18"
            title="Por que o JavaScript é assim? | Memes do JavaScript - Episódio 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
          <div className="descricao-video">

            <h3>Por que o JavaScript é assim? | Memes JavaScript #01</h3>
            <p>2,3 mil visualizações - Há 2 dias</p>
          </div>
        </li>
      </ul>

      <footer className="rodape__container">
        <section>
          <h2 className="rodape__titulo">Programação</h2>
          <p className="rodape__texto">Lógica</p>
          <p>Python</p>
          <p>Computação</p>
          <p>Jogos</p>
          <p>Computação</p>
          <p>Node JS</p>
        </section>

        <section>
          <h2 className="rodape__titulo">Data Science</h2>
          <p className="rodape__texto">Ciência de dados</p>
          <p>BI</p>
          <p>SQL</p>
          <p>Banco de Dados</p>
          <p>Machine Learning</p>
          <p>NoSQL</p>
        </section>

        <section>
          <h2 className="rodape__titulo">UX e Design</h2>
          <p className="rodape__texto">Photoshop</p>
          <p>Illustrator</p>
          <p>Usabilidade</p>
          <p>Vídeo e Motion</p>
          <p>Figma</p>
          <p>Interface</p>
        </section>

        <section>
          <h2 className="rodape__titulo">Inovação e Gestão</h2>
          <p className="rodape__texto">Métodos ágeis</p>
          <p>Softskills</p>
          <p>Liderança</p>
          <p>Gestão</p>
          <p>Startups</p>
          <p>Vendas</p>
        </section>

        <section>
          <h2 className="rodape__titulo">Front-end</h2>
          <p className="rodape__texto">HTML</p>
          <p>CSS</p>
          <p>React</p>
          <p>Angular</p>
          <p>JavaScript</p>
          <p>jQuery</p>
        </section>

        <section>
          <h2 className="rodape__titulo">Devops</h2>
          <p className="rodape__texto">AWS</p>
          <p>Azure</p>
          <p>Docker</p>
          <p>Segurança</p>
          <p>IaC</p>
          <p>Linux</p>
        </section>

        <section>
          <h2 className="rodape__titulo">Mobile</h2>
          <p className="rodape__texto">React Native</p>
          <p>Flutter</p>
          <p>iOS</p>
          <p>Swift</p>
          <p>Android</p>
          <p>Kotlin</p>
        </section>
      </footer>
    </>
  )
}

export default Course