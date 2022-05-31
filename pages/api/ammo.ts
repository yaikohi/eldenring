import { NextApiRequest, NextApiResponse } from 'next'
import ammoData from '../../public/data/ammo.json'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): void {
  const { name } = req.query

  if (!name) {
    return res
      .status(400)
      .send('you must provide a name in order to find an ammo piece')
  }

  const findAmmo = ammoData.find(
    (ammo) => ammo.name === req.query.name,
  )

  res.setHeader('Content-Type', 'application/json')

  if (!findAmmo) {
    return res.status(400).send(`ammo '${name}' not found.`)
  }

  return res.status(200).send(JSON.stringify(findAmmo))
}
