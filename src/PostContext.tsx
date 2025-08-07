/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState } from "react";
import type { PostContextType, PostType } from "./types/types";
import { faker } from "@faker-js/faker";

const PostContext = createContext<PostContextType | null>(null);

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

function PostProvider({ children }: { children: React.ReactNode }) {
  const [posts, setPosts] = useState<PostType[]>(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post: PostType) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }
  return (
    <PostContext.Provider
      value={{
        posts: searchedPosts,
        onAddPost: handleAddPost,
        onClearPosts: handleClearPosts,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

function usePosts() {
  const context = useContext(PostContext)!;
  if (context === undefined)
    throw new Error("PostContext was used outside Provider");
  return context;
}

export { PostProvider, usePosts };
