import Image from 'next/image'

type Props = {}

export const Card = ({ }: Props) => {
    return (
        <>
            {/* card wrapper */}
            <div className="bg-gradient-to-tr from-yellow-900 via-gray-900 to-black mx-auto max-w-2xl text-white relative flex-col">
                {/* header / title container (h1) */}
                <div className="px-5 pb-1 pt-8">
                    <h1 className="text-3xl">Ash of War: Glintsword Arch</h1>
                </div>
                {/* content wrapper */}
                <div className="border-yellow-800 border-2 flex flex-col px-8 pb-4">
                    {/* image container (img) */}
                    <div className="border-2 border-yellow-100">
                        <Image
                            className="bg-black"
                            src="/"
                            alt="image"
                            width="600"
                            height="400"
                        />
                    </div>
                    {/* paragraph container (p) */}
                    <div className='p-2 h-72'>
                        <p className="text-lg">
                            This Ash of War grants an armament the Magic affinity and the
                            following Skill:
                            <br />
                            <br />
                            Skill: Glintsword Arch
                            <br />
                            A skill used by the
                            enchanted Carian Knights. Small glintswords form an arch and attack
                            automatically. Attack again for a lunging thrust.
                            <br />
                            <br />
                            It can be used on
                            all thrusting armaments.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
