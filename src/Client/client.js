
async function getRandomImage() {
  const response = await fetch('https://api.thecatapi.com/v1/images/search', {
    method:'GET'
  })
  await checkStatus(response)
  const catImageArray = await parseJSON(response)
  const catImage = {'url':'', 'breed':{'name':'', 'life_span':''}}
  if (catImageArray[0] && catImageArray[0].url){
    catImage.url = catImageArray[0].url
  }
  if (catImageArray[0] && catImageArray[0].breed && catImageArray[0].breed['name']){
    catImage.breed['name'] = catImageArray[0].breed['name']
  }
  if (catImageArray[0] && catImageArray[0].breed && catImageArray[0].breed['life_span']){
    catImage.breed['life_span'] = catImageArray[0].breed['life_span']
  }
  return catImage
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error); // eslint-disable-line no-console
  throw error;
}

function parseJSON(response) {
  return response.json();
}

const Client = { getRandomImage };
export default Client;
