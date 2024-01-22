import { ShieldExclamationIcon } from '@heroicons/react/24/solid'

function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center h-[70vh]'>
      <ShieldExclamationIcon className='h-20 text-black' />
      <p>NotFound</p>
    </div>
  );
}

export default NotFound;