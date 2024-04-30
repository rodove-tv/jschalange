
// Récupérer le paramètre "file" de l'URL
const urlParams = new URLSearchParams(window.location.search);
const fileName = urlParams.get('file');
// Créer un élément script pour charger le fichier JavaScript correspondant
if (fileName && fileName !== 'null') {
  const scriptElement = document.createElement('script');
  scriptElement.src = `/js/${fileName}.js`;
  scriptElement.defer = true;
  console.log(`la balise ${fileName} est corectement crée`);
  document.body.appendChild(scriptElement);
} else {
  console.log('no file');
  // Redirection vers la page d'erreur
  window.location.href = '/error';
}