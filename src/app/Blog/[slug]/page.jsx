
import React from 'react'
import {getPost, getPostContent} from '../../_services'
import PostDetail from './PostDetail'
import Author from './Author'
import PostWidget from '../PostWidget'
import { GetPostContent } from '../../_services'

export async function generateStaticParams() {
  const posts = await getPost();
  console.log(posts.edges.map((post) => ({ slug: post.node.slug })))
  return posts.edges.map((post) => ({ slug: post.node.slug }));
}

const PostContent = async ({params}) => {
  const {slug} = params;
  const post = await GetPostContent(params.slug);
  return (
    <div className='container mx-auto px-10 mb-8 mt-20'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='col-span-1 lg:col-span-8 mb-8'>
          <PostDetail post={post}/>
          <Author author={post.author}/>
        </div>
        <div className='col-span-1 lg:col-span-4'>
          <div className='lg:sticky relative top-20 mt-20'>
            <PostWidget/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PostContent