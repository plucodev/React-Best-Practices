import React, {useState, useContext} from "react";
import {Context} from '../store/projectContext';
import PropTypes from 'prop-types'

const Search = props => {
    const {store, actions} = useContext(Context)
    const [searchInput, setSearchInput] = useState();
    return (
        <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={e => setSearchInput(e.target.value)} />
            <button className="btn btn-outline-success" type="button" onClick={() => actions.search(searchInput)}>Search</button>
        </form>
    )
}

Search.propTypes = {

}

export default Search
