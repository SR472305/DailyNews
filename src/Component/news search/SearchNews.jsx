import React, { useEffect, useMemo, useState } from 'react'
// import { data } from 'react-router-dom';

const SearchNews = () => {

  const [article, setarticle] = useState([]);
  const [loading, setloading] = useState(true);
  const [search, setsearch] = useState('');

  const date = new Date().getDate()


  const API_Key = '5e299a5edb98429eadc50c455098f613'
  const api = `https://newsapi.org/v2/everything?q=India&from=2025-06-14${date - 1}
  &sortBy=publishedAt&apiKey=${API_Key}`;

  useEffect(() => {
    fetch(api)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setarticle(article);
        setloading(false);

      })
      .catch((err) => {
        console.error('Error Fetching News', err);
        setloading(false)
      })
  }, [])

  const filterNews = useMemo(() => {
    return article.filter((FilterdData) =>
      FilterdData.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, article])
  console.log(filterNews)

  if (loading) {
    return (
      <div>Loading...</div>
    )
  }
return (
  <div>

      <input type="text"
       placeholder='Search News'
       value={search}
       onChange={(e)=>setsearch(e.target.value)}

      />
       {filterNews.map((article,index)=>(
         <h4 key={index}>{article.title}</h4>
       ))}
  </div>
)
}

export default SearchNews
