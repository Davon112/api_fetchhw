import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import FetchPosts from './components/FetchPosts';
import CreatePost from './components/CreatePost';
import UpdatePost from './components/UpdatePost';


const queryClient = new QueryClient();

const App = () => {
  const [editingPost, setEditingPost] = useState(null);

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>Blog Posts</h1>
        
        <CreatePost />
        <UpdatePost editingPost={editingPost} onClear={() => setEditingPost(null)} />
        <FetchPosts onEdit={(post) => setEditingPost(post)} />
      </div>
    </QueryClientProvider>
  );
};

export default App;