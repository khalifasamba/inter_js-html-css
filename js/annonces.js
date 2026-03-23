const formations = {
  1: {
    title: "Agriculture Durable",
    description: "Formation complète sur les techniques écologiques.",
    objectifs: [
      "Utilisation d’engrais organiques",
      "Rotation des cultures",
      "Protection des sols"
    ]
  },
  2: {
    title: "Gestion Financière Agricole",
    description: "Maîtriser les coûts et augmenter les profits.",
    objectifs: [
      "Planification budgétaire",
      "Analyse de rentabilité",
      "Gestion des crédits"
    ]
  },
  3: {
    title: "Protection des Cultures",
    description: "Prévention et traitement des maladies agricoles.",
    objectifs: [
      "Identification des ravageurs",
      "Traitement biologique",
      "Techniques de prévention"
    ]
  }
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if(id && formations[id]){
  document.getElementById("formation-title").innerText = formations[id].title;
  document.getElementById("formation-description").innerText = formations[id].description;

  const ul = document.getElementById("formation-objectifs");
  formations[id].objectifs.forEach(obj => {
    const li = document.createElement("li");
    li.innerText = obj;
    ul.appendChild(li);
  });
}