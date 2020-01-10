
async function getRandomImage() {
  let url = ''
  const response = await fetch('https://api.thecatapi.com/v1/images/search', {
    method:'GET'
  })
  await checkStatus(response)
  const catImageArray = await parseJSON(response)
  return catImageArray[0]
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
