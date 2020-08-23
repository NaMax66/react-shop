import t_shirts from '../../data/t-shirt_database.json'
export default (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(t_shirts))
}
