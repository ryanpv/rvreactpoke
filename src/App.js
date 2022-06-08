import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList';
import axios from 'axios';
import Pagination from './Pagination';

function App() {
  const [pokemon, setPokemon] = useState([]); // setting state and updatedstate for the list of pokemon - empty array for initial state as it will never be empty afterwards
  const [currentPageUrl, setcurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon") // state for each page - first page passed in to set state
  const [nextPageUrl, setNextPageUrl] = useState(); // no state argument passed in so that it takes updated state variable value first, which would then become state
  const [prevPageUrl, setprevPageUrl] = useState();
  const [loading, setLoading] = useState(true); // setting states for loading screen (for awaiting page response). defaults state variable to true

  useEffect(() => {
    setLoading(true) // "loading..." will show until results have been returned
    let cancel
    axios.get(currentPageUrl, { // using axios to fetch the api. passing in state variable to get specific url
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false) // must set loading to false after get request or else loading will continue
      setNextPageUrl(res.data.next) // sets updated state to specific data (which is 'next' page link provided by api in this case) - dot notation accesses specific JSON
      setprevPageUrl(res.data.previous) // ^^ but for previous page
      setPokemon(res.data.results.map(p => p.name)) // sets updated state with results, but only by name. Each pokemon object has two keys itself, but objects require keys themselves
      // each pokemon object was given key {p} to represent itself as each individual pokemon are unique anyway. So we use dot notation here to access name value of {p} object
    });

    return () => cancel()
  }, [currentPageUrl])

  function gotoNextPage() {
    setcurrentPageUrl(nextPageUrl) // function to update state of current page to the next page url - this state is always updated with setNextPageUrl(res.data.next)
  }

  function gotoPrevPage() {
    setcurrentPageUrl(prevPageUrl) // function to update state of current page to previous url
  }

  if (loading) return "Loading..." // if loading state is true (which is defaulted), then return this string on page while it stays true
  // this will stop after the axios get request and cancelToken

  return (
    <>
    <PokemonList pokemon={pokemon}/> 
    {/* pass in this prop, which is just pokemon state, to the PokemonList component */}
    <Pagination
    // passed in props to this components
      gotoNextPage={ nextPageUrl ? gotoNextPage : null } // conditional ternary operator - if nextPageUrl is true (or exists) run function : if false then null
      gotoPrevPage={ prevPageUrl ? gotoPrevPage : null } // ^^
    />
    </>
  );
}

export default App;
