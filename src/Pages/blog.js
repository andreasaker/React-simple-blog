import React, { useState } from 'react';

import BlogEntryForm from '../Forms/blogEntryForm';
import BlogEntryTable from '../Tables/blogEntryTable';

const Blog = params => {
    const entriesData = [{id: 1, title: "React js", content: "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.", date: "2019-03-11"}]
    const [entries, setEntries] = useState(entriesData);

    const addEntry = entry => {
      entry.id = entries.length + 1;
      entry.date = new Date().toISOString().slice(0,10); 
      setEntries([...entries, entry]);
    }

    return (
      <div>
        <div class="flex-row">
          <div class="flex-small"><BlogEntryForm addEntry={addEntry} /></div>
        </div>
        <div class="flex-row">
          <div class="flex-small"><BlogEntryTable entries={entries} /> </div>
        </div>
      </div>
      
    );
}

export default Blog;