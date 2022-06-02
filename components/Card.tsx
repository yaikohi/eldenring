import Image from 'next/image'

type CardProps = {
  item?: any
  onClick?: any
}
export const Card = ({ item, onClick }: CardProps) => {
  return (
    <>
      {/* card wrapper */}
      <div
        onClick={onClick}
        className="drop-shadow-xl shadow-black relative flex-col max-w-[500px] mx-auto text-yellow-50 rounded-md bg-gradient-to-tr from-yellow-900 via-gray-900 to-black hover:blur-none"
      >
        {/* header / title container (h1) */}
        <div className="px-5 pt-8 pb-1">
          <h1 className="text-3xl">{item.name}</h1>
        </div>
        {/* content wrapper */}
        <div className="flex flex-col px-8 pb-4 rounded-b-md">
          {/* image container (img) */}
          <div className="rounded-md bg-gradient-to-br from-transparent to-neutral-200 p-[3px] max-h-[400px] max-w-[600px] flex flex-col">
            <Image
              className="bg-black object-fit"
              src={item.image || '/'}
              alt={`Image of ${item.name}`}
              width="200px"
              height="200px"
              layout="intrinsic"
              objectFit="contain"
            />
          </div>
          {/* paragraph container (p) */}
          <div className="p-2 h-72">
            <p className="text-lg">{item.description} </p>
          </div>
        </div>
      </div>
    </>
  )
}
