import Image from 'next/image'

type StaticCardProps = {
  item?: any
}

export const StaticCard = ({}: StaticCardProps) => {
  return (
    <>
      {/* <div className="absolute -inset-1 opacity-20 blur rounded-xl bg-gradient-to-r from-violet-300 via-teal-400 to-pink-300"></div> */}
      {/* card wrapper */}
      <div className="relative flex-col max-w-2xl mx-auto text-white rounded-md bg-gradient-to-tr from-yellow-900 via-gray-900 to-black hover:blur-none blur">
        {/* header / title container (h1) */}
        <div className="px-5 pt-8 pb-1">
          <h1 className="text-3xl">Ash of War: Glintsword Arch</h1>
        </div>
        {/* content wrapper */}
        <div className="flex flex-col px-8 pb-4 border-2 border-yellow-800 rounded-b-md">
          {/* image container (img) */}
          <div className="rounded-md bg-gradient-to-br from-transparent to-neutral-200 p-[3px]">
            <Image
              className="bg-black"
              src="/"
              alt="image"
              width="600"
              height="400"
            />
          </div>
          {/* paragraph container (p) */}
          <div className="p-2 h-72">
            <p className="text-lg">
              This Ash of War grants an armament the Magic affinity
              and the following Skill:
              <br />
              <br />
              Skill: Glintsword Arch
              <br />
              A skill used by the enchanted Carian Knights. Small
              glintswords form an arch and attack automatically.
              Attack again for a lunging thrust.
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
