"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { blogPosts } from "../data/blogs";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Newsletter } from "../components/Newsletter";
import { motion } from "motion/react";
import { useState } from "react";

export function BlogDetail({ id }: { id: string }) {
  const router = useRouter();
  const [showShareMenu, setShowShareMenu] = useState(false);
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl mb-4">Article Not Found</h1>
        <Link href="/blog" className="text-blue-600 hover:underline">
          Back to Blog
        </Link>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = post.title;
    
    const shareUrls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
    };

    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Back Button */}
      <div className="bg-gray-50 border-b">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </button>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Category Badge */}
            <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full mb-6">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl mb-6">{post.title}</h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                {new Date(post.publishedDate).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                {post.readTime}
              </div>
              <div className="relative">
                <button
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="flex items-center hover:text-blue-600 transition-colors"
                >
                  <Share2 className="w-5 h-5 mr-2" />
                  Share
                </button>
                
                {showShareMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full mt-2 bg-white border rounded-lg shadow-lg p-2 flex gap-2 z-10"
                  >
                    <button
                      onClick={() => handleShare('facebook')}
                      className="p-2 hover:bg-gray-100 rounded transition-colors"
                      aria-label="Share on Facebook"
                    >
                      <Facebook className="w-5 h-5 text-blue-600" />
                    </button>
                    <button
                      onClick={() => handleShare('twitter')}
                      className="p-2 hover:bg-gray-100 rounded transition-colors"
                      aria-label="Share on Twitter"
                    >
                      <Twitter className="w-5 h-5 text-blue-400" />
                    </button>
                    <button
                      onClick={() => handleShare('linkedin')}
                      className="p-2 hover:bg-gray-100 rounded transition-colors"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin className="w-5 h-5 text-blue-700" />
                    </button>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Author */}
            <div className="flex items-center mb-8 p-4 bg-gray-50 rounded-lg">
              <ImageWithFallback
                src={post.author.avatar}
                alt={post.author.name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <p className="font-semibold text-lg">{post.author.name}</p>
                <p className="text-gray-600">{post.author.role}</p>
              </div>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 rounded-lg overflow-hidden shadow-xl"
          >
            <ImageWithFallback
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="prose prose-lg max-w-none mb-12"
          >
            {post.content.split('\n').map((paragraph, index) => {
              if (paragraph.trim().startsWith('##')) {
                return (
                  <h2 key={index} className="text-3xl mt-8 mb-4">
                    {paragraph.replace('##', '').trim()}
                  </h2>
                );
              }
              if (paragraph.trim().startsWith('-')) {
                return (
                  <li key={index} className="ml-6">
                    {paragraph.replace('-', '').trim()}
                  </li>
                );
              }
              if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
                return (
                  <p key={index} className="font-semibold mb-4">
                    {paragraph.replace(/\*\*/g, '').trim()}
                  </p>
                );
              }
              if (paragraph.trim()) {
                return (
                  <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                    {paragraph.trim()}
                  </p>
                );
              }
              return null;
            })}
          </motion.div>

          {/* Tags */}
          <div className="flex items-center gap-2 mb-12 flex-wrap">
            <Tag className="w-5 h-5 text-gray-500" />
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Newsletter */}
          <div className="mb-12">
            <Newsletter />
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
