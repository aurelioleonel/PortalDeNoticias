// const response = await fetch("https://restcountries.com/v3.1/all%22, {
//       headers: {
//         Authorization: "token",
//       },
//     })
//0d407fc2211b47889d8f8a38134bb01c
const divNoticias = document.querySelector("#listaDeNoticias");

async function getNoticias(categoria) {
  try {
    const key = "0d407fc2211b47889d8f8a38134bb01c";
    if (categoria == "" || categoria == null) {
      categoria = "general";
    }
    console.log(categoria);
    const mudarCategoria = categoria;

    
    const response = await fetch(
      "https://newsapi.org/v2/top-headlines?country=br&category=" +
        mudarCategoria,
      {
        headers: {
          authorization: key,
        },
      }
    );
    const listNoticias = await response.json(); //Cria dinamicamente os cards e adiciona as noticias
    listNoticias.articles.forEach((noticia) => {
      const html = `
      <article class="col-6">
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="${noticia.urlToImage}"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">
              ${noticia.title}
              </h5>
              <p class="card-text">
                Saques serão permitidos até 15 de dezembro.
              </p>
              <a
                href="${noticia.url}"
                class="btn btn-primary"
                >Ir para noticia</a
              >
            </div>
          </div>
        </div>
      </div>
    </article>
           
        `;
     
      divNoticias.innerHTML += html;
     
    });

    console.log(listNoticias);
  } catch (error) {
    console.error(error);
  }
}

function mudaCategoria(elemento) {
  divNoticias.innerHTML = ``; //inicia o article vazio
  getNoticias(elemento.value);
}

window.onload(getNoticias(""));
