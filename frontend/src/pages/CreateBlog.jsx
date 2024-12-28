import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the Quill stylesheet

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState('');
    const [coverImage, setCoverImage] = useState(null);

    const handleImageChange = (e) => {
        setCoverImage(e.target.files[0]);
    };

    const handleContentChange = (value) => {
        setContent(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('tags', tags);
        formData.append('coverImage', coverImage);

        try {
            const response = await fetch('http://localhost:5000/api/blogs', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            console.log('Blog created:', data);
        } catch (error) {
            console.error('Error creating blog:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data" className='bg-sky-800 text-white p-8 h-screen'>
            <div className='flex gap-2'>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className='rounded-lg bg-transparent border px-2 w-full'
                />
            </div>
            <div className='mt-8 flex flex-col gap-4'>
                <label>Content:</label>
                <ReactQuill
                    value={content}
                    onChange={handleContentChange}
                    modules={modules}
                    formats={formats}
                    placeholder="Write your blog content here..."
                    required
                    
                />
            </div>
            <div className='flex gap-2 mt-8'>
                <label>Tags:</label>
                <input
                    type="text"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    required
                    className='rounded-lg bg-transparent border px-2 w-full'
                    placeholder='tag1, tag2, tag3...'
                />
            </div>
            <div className='flex gap-2 mt-8'>
                <label>Cover Image:</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    required
                    
                />
            </div>
            <button type="submit" className='bg-violet-500 p-2 mt-8 rounded-full'>Create Blog</button>
        </form>
    );
};

// Quill modules for handling rich text formatting
const modules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['bold', 'italic', 'underline'],
        ['link', 'image'],
        [{ align: [] }],
        ['blockquote', 'code-block'],
    ],
};

const formats = [
    'header', 'font', 'list', 'bold', 'italic', 'underline', 'align', 'link', 'image', 'blockquote', 'code-block'
];

export default CreateBlog;
