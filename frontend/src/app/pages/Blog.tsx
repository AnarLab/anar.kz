"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Calendar, Clock, User } from "lucide-react";
import { blogPosts } from "../data/blogs";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion } from "motion/react";

export function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl mb-4">Tech Blog</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Insights, tutorials, and industry trends from our team of experts
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-white border-b sticky top-16 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 flex-grow bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/blog/${post.id}`} className="group block h-full">
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                      <div className="relative h-48 overflow-hidden">
                        <ImageWithFallback
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center gap-4 text-sm text-gray-500 pt-4 border-t">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(post.publishedDate).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime}
                          </div>
                        </div>

                        <div className="flex items-center mt-4">
                          <ImageWithFallback
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-10 h-10 rounded-full object-cover mr-3"
                          />
                          <div>
                            <p className="text-sm font-medium">{post.author.name}</p>
                            <p className="text-xs text-gray-500">{post.author.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
