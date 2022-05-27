const { fetch, fetchAll } = require('../../utils/postgres')

const FLOWERS = `
    SELECT * FROM flowers
`

const NEW_FLOWER = `
    INSERT INTO flowers(flower_name, flower_price) VALUES($1, $2) RETURNING *
`

const flowers = () => fetchAll(FLOWERS)
const newFlower = (name, price) => fetch(NEW_FLOWER, name, price)

module.exports = {
    flowers,
    newFlower
}