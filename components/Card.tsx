import Image from 'next/image'

type TemplateProps = {
  item?: any
}

export const TemplateCard = ({}: TemplateProps) => {
  return (
    <>
      {/* <div className=" -inset-1 absolute opacity-20 blur rounded-xl bg-gradient-to-r from-violet-300   via-teal-400 to-pink-300"></div> */}
      {/* card wrapper */}
      <div className="bg-gradient-to-tr from-yellow-900 via-gray-900 to-black mx-auto max-w-2xl text-white relative flex-col rounded-md hover:blur-none blur">
        {/* header / title container (h1) */}
        <div className="px-5 pb-1 pt-8">
          <h1 className="text-3xl">Ash of War: Glintsword Arch</h1>
        </div>
        {/* content wrapper */}
        <div className="border-yellow-800 border-2 flex flex-col px-8 pb-4 rounded-b-md">
          {/* image container (img) */}
          <div className="z-10 rounded-md bg-gradient-to-br from-transparent to-neutral-200 p-[3px]">
            <Image
              className="bg-black z-20"
              src="/"
              alt="image"
              width="600"
              height="400"
            />
          </div>
          {/* paragraph container (p) */}
          <div className="p-2 h-72">
            <p className="text-lg">
              This Ash of War grants an armament the Magic affinity and the
              following Skill:
              <br />
              <br />
              Skill: Glintsword Arch
              <br />
              A skill used by the enchanted Carian Knights. Small glintswords
              form an arch and attack automatically. Attack again for a lunging
              thrust.
              <br />
              <br />
              It can be used on all thrusting armaments.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

type CardProps = {
  item?: any
}
export const Card = ({ item }: CardProps) => {
  if (!item) {
    return (
      <>
        {/* <div className=" -inset-1 absolute opacity-20 blur rounded-xl bg-gradient-to-r from-violet-300   via-teal-400 to-pink-300"></div> */}
        {/* card wrapper */}
        <div className="bg-gradient-to-tr from-yellow-900 via-gray-900 to-black mx-auto max-w-2xl text-white relative flex-col rounded-md hover:blur-none blur">
          {/* header / title container (h1) */}
          <div className="px-5 pb-1 pt-8">
            <h1 className="text-3xl">Ash of War: Glintsword Arch</h1>
          </div>
          {/* content wrapper */}
          <div className="border-yellow-800 border-2 flex flex-col px-8 pb-4 rounded-b-md">
            {/* image container (img) */}
            <div className="z-10 rounded-md bg-gradient-to-br from-transparent to-neutral-200 p-[3px]">
              <Image
                className="bg-black z-20"
                src="/"
                alt="image"
                width="600"
                height="400"
              />
            </div>
            {/* paragraph container (p) */}
            <div className="p-2 h-72">
              <p className="text-lg">
                This Ash of War grants an armament the Magic affinity and the
                following Skill:
                <br />
                <br />
                Skill: Glintsword Arch
                <br />
                A skill used by the enchanted Carian Knights. Small glintswords
                form an arch and attack automatically. Attack again for a
                lunging thrust.
                <br />
                <br />
                It can be used on all thrusting armaments.
              </p>
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>
        {/* <div className=" -inset-1 absolute opacity-20 blur rounded-xl bg-gradient-to-r from-violet-300   via-teal-400 to-pink-300"></div> */}
        {/* card wrapper */}
        <div className="bg-gradient-to-tr from-yellow-900 via-gray-900 to-black mx-auto max-w-2xl text-white relative flex-col rounded-md hover:blur-none blur">
          {/* header / title container (h1) */}
          <div className="px-5 pb-1 pt-8">
            <h1 className="text-3xl">{item.name}</h1>
          </div>
          {/* content wrapper */}
          <div className="border-yellow-800 border-2 flex flex-col px-8 pb-4 rounded-b-md">
            {/* image container (img) */}
            <div className="z-10 rounded-md bg-gradient-to-br from-transparent to-neutral-200 p-[3px] h-[400px] w-[600px] flex flex-col">
              <Image
                className="bg-black"
                src={item.image || '/'}
                alt="image"
                width="400"
                height="400"
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
}
