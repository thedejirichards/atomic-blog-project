export type PostType = {
  title: string;
  body: string;
};

export type HeaderType = {
  posts: PostType[];
  onClearPosts: () => void;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

export type SearchPostsType = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

export type ResultType = {
  posts: PostType[];
};

export type MainType = {
  posts: PostType[];
  onAddPost: (post: PostType) => void;
};

export type FormAddPostType = {
  onAddPost: (post: PostType) => void;
};

export type ArchiveType = {
  onAddPost: (post: PostType) => void;
};

export type PostContextType = {
  posts: PostType[];
  onAddPost: (post: PostType) => void;
  onClearPosts: () => void;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;

};
