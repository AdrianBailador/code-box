import { useState } from 'react';
import dynamic from 'next/dynamic';
import { MongoClient } from 'mongodb';
import { Button } from '@material-ui/core';

const MarkdownEditor = dynamic(() => import('react-markdown-editor-lite'), {
  ssr: false,
});

import MarkdownIt from 'markdown-it';

const mdParser = new MarkdownIt();

const BlogComponent = () => {
  const [title, setTitle] = useState('');
  const [markdown, setMarkdown] = useState('');

  const handleEditorChange = ({ html, text }) => {
    setMarkdown(text);
  };

  const publishPost = async () => {
    const client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    try {
      await client.connect();

      const database = client.db(process.env.MONGODB_DB);
      const posts = database.collection('posts');

      const post = { title, markdown, date: new Date() };
      const result = await posts.insertOne(post);

      console.log('Post publicado con éxito:', result);
    } finally {
      await client.close();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título del post"
      />
      <MarkdownEditor
        value={markdown}
        style={{ height: '500px' }}
        renderHTML={(text) => mdParser.render(text)}
        onChange={handleEditorChange}
      />
      <Button variant="contained" color="primary" onClick={publishPost}>
        Publicar
      </Button>
    </div>
  );
};

export default BlogComponent;
