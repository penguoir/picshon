import axios from "axios";

export default async function handler(req, res) {
  const url = "http://wordrawapp.com/getword.php?e=false&m=false&h=true&_=321";
  const data = await axios.get(url);

  res.status(200);
  res.json(data.data);
}
