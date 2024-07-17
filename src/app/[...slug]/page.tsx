import Header from '@components/molecules/Header'
import MoviePage from '@components/organisms/Movie'
import React from 'react'

const movieSlug = (props: any) => {
  return (
    <div className="h-full">
      <Header />
      <MoviePage type={props.params.slug} />
    </div>
  )
}

export default movieSlug
