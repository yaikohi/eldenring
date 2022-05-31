import { NextApiRequest, NextApiResponse } from 'next'
import armorData from '../../public/data/armor.json'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): void {
  const { name } = req.query

  if (!name) {
    return res
      .status(400)
      .send('You must provide a name in order to find an armor piece')
  }

  const findArmor = armorData.find(
    (armor) => armor.name === req.query.name,
  )

  res.setHeader('Content-Type', 'application/json')

  if (!findArmor) {
    return res.status(400).send(`Armor '${name}' not found.`)
  }

  return res.status(200).send(JSON.stringify(findArmor))
}
