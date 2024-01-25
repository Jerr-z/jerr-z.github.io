import PostCard from "./PostCard"
import PostWidget from "./PostWidget"
import { getPost } from "../_services"
//import { useEffect, useState } from 'react';


export default async function Blog() {
  const posts = await getPost()
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-20 ">
        <div className="lg:col-span-8 col-span-1">
            {posts.edges.map((post, index) => (
                <div key={index}>
                  <PostCard post={post.node} key={post.title}/>
                </div>
            ))}
        </div>

        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-20">
            <PostWidget/>
          </div>
        </div>
      </div>
    </div>
  );
}


