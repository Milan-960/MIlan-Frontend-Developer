//* this will call a noraml api
// const apiUrl = process.env.REACT_APP_API_BASE_URL;

//* this will call a PHP api
const apiUrl = "http://localhost:8000/api.php";

export async function fetchCapsules() {
  const response = await fetch(apiUrl);
  if (!response.ok) {
    console.error(`API request failed with status ${response.status}`);
    return;
  }
  const data = await response.json();
  return data;
}
