import React, { useState } from 'react'
import { IconName } from "react-icons/fa";
const Search=({onSearch})=> {
  const [search,setSearch] = useState("");

  const onInputChange =(value) =>{
    setSearch(value);
    onSearch(value);
  }
    return (
    <input type ="text"
    className='form-control'
    style={{width:"240px"}}
    placeholder="Search..."
    value={search}
    onChange={(e) => onInputChange (e.target.value)}
    />
  )
}

export default Search;