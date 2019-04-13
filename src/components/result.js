import React from 'react';

const Result = ({movies}) => <ul>
    {movies && movies.map(movie => <li key={movie.show.id}>{movie.show.name}</li>)}
</ul>


export default Result;