import { Link } from 'react-router-dom'

export const NotFound404 = () => {
  return (
    <div className='fixed top-0 left-0 z-50 w-[100vw] h-[100vh] flex items-center justify-center bg-lightGray dark:bg-darkGray'>
      <div>
        <h1 className='text-4xl'>Page not found</h1>
        <h1 className='text-center mb-5 mt-4 text-6xl font-semibold'>
          4<span className='text-primary'>0</span>4
        </h1>
        <div className='flex justify-center gap-4'>
          <Link
            to='/'
            className='bg-primary text-light px-4 pt-2 pb-1.5 rounded font-medium '>
            Take me home
          </Link>
          <button
            className='border-2 border-primary text-primary px-4 pt-1.5 pb-1 rounded font-medium'
            onClick={() => history.go(-1)}>
            Go back
          </button>
        </div>
      </div>
    </div>
  )
}
