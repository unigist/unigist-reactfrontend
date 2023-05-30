import { useState } from 'react';
import './WritePost.css';


const WriteArticle = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return (
        <div className="write-article">
            <div class="form-floating">
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="floatingTitle" placeholder="Title" />
                <label htmlFor="floatingTitle">Title</label>
            </div>
            <div class="form-floating">
                <textarea value={content} setContent={e => setContent(e.target.value)} className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: 100}} defaultValue={""} />
                <label htmlFor="floatingTextarea2">Comments</label>
            </div>

       </div>
    )
}

export default WriteArticle;
