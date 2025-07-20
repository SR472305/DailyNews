import React from 'react'
import Newsdata from '../redux/features/Newsdata'
import SearchNews from '../Component/news search/SearchNews'

const News = () => {
  return (
    <div>
      {/* <h1>Live News</h1> */}
      <Newsdata />
      {/* <SearchNews /> */}
    </div>
  )
}

export default News
