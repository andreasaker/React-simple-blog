import React, {useState} from 'react';


const BlogEntryForm = props => {

    const initForm = {title: "", content: "", date: ""}
    const [entry, setEntry] = useState(initForm);

    const handleChange = e => {   
        const {name, value} = e.target;
        setEntry({...entry, [name]: value});
        
    }

    return(
        <form
        onSubmit={event =>{
            event.preventDefault();
            props.addEntry(entry);
        }}
        >
            <label>Title</label>
            <input type="text" name="title" onChange={handleChange} />
            <label>Content</label>
            <textarea name="content" onChange={handleChange}></textarea>
            <button type="submit">Submit</button>
        </form>
    );
}

export default BlogEntryForm;