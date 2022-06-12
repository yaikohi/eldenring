import { Ammo } from 'types/ammo'

type CardAmmoProps = {
  ammo?: Ammo
}
export const Card = ({ ammo }: CardAmmoProps) => {
  return (
    <div className="p-2 h-72">
      {/* <p className="text-lg">{ammo?.attackPower} </p> */}
      <p className="text-lg">{ammo?.type} </p>
      <p className="text-lg">{ammo?.passive} </p>
    </div>
  )
}
