import React, { useEffect, useState } from 'react'
import Card from "../card/Card"
import "./MovieList.css"
import { useParams } from 'react-router-dom'

const MovieList = () => {
    const [movieList, setMovieList] = useState([])
    const { type } = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=5944c5e73730be49fa6a65603c959942&language=en-US`)
            .then(res => res.json())
            .then(data => setMovieList(data.results))
    }

    return (
        <>
            <div className='movie__list'>
                <h2 className='list__title'>{(type ? type : "POPULAR").toUpperCase()}</h2>
                <div className='list__cards'>
                    {
                        movieList.map(movie => (
                            <Card key={movie.id} movie={movie} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default MovieList
