import React from 'react'

const Author = ({ author }) => {
  return (
      <div className='flex items-center mt-10 mb-10 p-12 rounded-lg bg-blue-500 bg-opacity-20 shadow-lg'>
        <div className='-top-15 border-r-2 border-r-black border-opacity-65 pr-20'>
            <img
                alt={author.name}
                height="100px"
                width="100px"
                className='align-middle rounded-full'
                src={author.photo.url}
            />
        </div>
        <div className='text-center flex-grow ml-4'>
            <h3 className='my-4 font-bold'>
                About the author: {author.name}
            </h3>
            <p className='text-lg'> {author.bio} </p>
        </div>
      </div>
    
  )
}

export default Author