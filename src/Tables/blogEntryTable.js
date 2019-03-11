import React, {useState} from 'react';

const BlogEntryTable = props => {
 return(
      props.entries.length > 0 ? (
        props.entries.map(e => (
        <table>
        <th>{e.title}</th>
        <tr>
            <td>{e.content}<p class="text-right">{e.date}</p></td>
        </tr>
        </table>
      ))
     ) : (
        <p>No entires</p>
     )
     
 );
}

export default BlogEntryTable;