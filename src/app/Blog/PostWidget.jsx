"use client";
import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts } from '../_services'
import {useState, useEffect} from 'react'

const PostWidget = async () => {
  const recentPosts = await getRecentPosts();
  return (
    <div className='bg-teal-50 shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-8  font-semibold border-b pb-4'>
        Recent Posts
      </h3>
      {recentPosts.map((post) => (
        <div key={post.title} className='flex items-center w-full mb-4'> 
          <div className='w-16 flex-none'>
            <img
            alt={post.title}
            height="60px"
            width="60px"
            className='align-middle rounded-full'
            src={post.featuredImage.url}
            />
          </div>
          <div className='flex-grow ml-4'>
            <p className='text-gray-500 font-xs'> {moment(post.createdAt).format('MMM DD, YYYY')} </p>
            <Link href={`/Blog/${post.slug}`} className='text-md hover:font-bold' key={post.title}>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget