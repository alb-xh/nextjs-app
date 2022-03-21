import Image from 'next/image';

const UnderConstruction = () => (
  <div className='under-construction'>
    <Image
      src='/images/under-construction.png'
      alt='under construction image'
      width={284}
      height={300}
    />
  </div>
)

export default UnderConstruction;