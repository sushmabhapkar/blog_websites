import React, { useState } from 'react';
import './Blog_Form.css'; // Import CSS file

export default function Blog_Form() {
  const [showNewForm, setShowNewForm] = useState(false);
  const [imageURL, setImageURL] = useState('');
  const [title, setTitle] = useState('');
  const [blogDescription, setBlogDescription] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handlePostBlog = (e) => {
    e.preventDefault();
    setShowNewForm(true);
    setSubmitted(true); // Indicate that form has been submitted
  };

  const handleEditBlog = () => {
    setEditMode(true);
  };

  const handleDeleteBlog = () => {
    // You can implement the delete functionality here
    console.log('Delete Blog');
    // Reset the form and hide the new form
    setImageURL('');
    setTitle('');
    setBlogDescription('');
    setShowNewForm(false);
    setEditMode(false);
    setSubmitted(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'imageURL') {
      setImageURL(value);
    } else if (name === 'title') {
      setTitle(value);
    } else if (name === 'blogDescription') {
      setBlogDescription(value);
    }
  };

  const handleCancel = () => {
    setShowNewForm(false);
    setEditMode(false);
    // Clear input fields
    setImageURL('');
    setTitle('');
    setBlogDescription('');
  };

  return (
    <div>
      {!showNewForm && (
        <form className="blog-form" onSubmit={handlePostBlog}>
          <label>Image URL</label>
          <input
            type='url'
            name='imageURL'
            value={imageURL}
            onChange={handleInputChange}
            required
          />

          <label>Title</label>
          <input
            type='text'
            name='title'
            value={title}
            onChange={handleInputChange}
            required
          />

          <label>Blog Description</label>
          <input
            type='text'
            name='blogDescription'
            value={blogDescription}
            onChange={handleInputChange}
            required
          />

          <button type='submit'>Post Blog</button>
          <button type='button' onClick={handleCancel}>Cancel</button>
        </form>
      )}

      {showNewForm && (
        <div className="new-blog-form">
          {!editMode && submitted && (
            <>
              <h2>New Blog</h2>
              <div>
                <strong>Image URL:</strong> {imageURL}
              </div>
              <div>
                <strong>Title:</strong> {title}
              </div>
              <div>
                <strong>Description:</strong> {blogDescription}
              </div>
              <button type='button' onClick={handleEditBlog}>Edit Blog</button>
              <button type='button' onClick={handleDeleteBlog}>Delete Blog</button>
              
            </>
          )}

          {editMode && (
            <form className="blog-form" onSubmit={handlePostBlog}>
              <label>Image URL</label>
              <input
                type='url'
                name='imageURL'
                value={imageURL}
                onChange={handleInputChange}
                required
              />

              <label>Title</label>
              <input
                type='text'
                name='title'
                value={title}
                onChange={handleInputChange}
                required
              />

              <label>Blog Description</label>
              <input
                type='text'
                name='blogDescription'
                value={blogDescription}
                onChange={handleInputChange}
                required
              />

              <button type='submit'>Edit Blog</button>
              <button type='button' onClick={handleDeleteBlog}>Delete Blog</button>
             
            </form>
          )}
        </div>
      )}
    </div>
  );
}
