import BlogCard from './BlogCard';
import React from 'react';
import SectionHeading from '../SectionHeading';
import { getFeaturedPosts } from '@/lib/mdx';

export default function FeaturedBlogs() {
  const featuredPosts = getFeaturedPosts();

  return (
    <div className="mt-20 lg:mt-40">
     <SectionHeading
  heading="Explore Our Expert Blogs"
  subheading="Gain deeper insights and valuable perspectives from our latest articles."
/>
      <div className="rounded-2xllg:mt-40 mt-20">
        <div className="mt-8 overflow-x-auto rounded-2xl pb-4">
          <div className="flex space-x-6 px-4">
            {featuredPosts.map((post, idx) => (
              <BlogCard
                key={idx}
                blog={{
                  title: post.title,
                  description: post.description || post.excerpt,
                  imageUrl: post.imageUrl,
                  url: `/posts/${post.slug}`,
                  readTime: post.readTime,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
