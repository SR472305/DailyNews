import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Fetchapi } from './NewsSilce';

const Newsdata = () => {
    const dispatch = useDispatch();
    const { item, status, error } = useSelector((state) => state.livenews)

    // console.log(item, status, error);

    useEffect(() => {
        dispatch(Fetchapi())
    }, [dispatch])

    if (status === 'loading') return <h1 className='text-center font-bold  p-85 bg-gray-300 text-6xl text-blue-500'>Loading...</h1>
    if (status === 'failed') return <h1 className='text-center font-bold p-70 bg-gray-300 text-5xl text-blue-500'>Error : {error}</h1>
    return (
        <div className='p-6'>
            <h1 className='text-6xl font-bold mb-4 text-center'>News update</h1>
            <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {Array.isArray(item) && item.length > 0 ? (
                    item.map((articles, idx) => (
                        <li key={idx} className='border border-gray-400 p-4 rounded-xl shadow-md hover:shadow-xl transition duration-300 bg-white w-full'>
                            <img src={articles.urlToImage} alt="newa"
                            className='w-full h-48 object-cover rounded-md mb-3' />
                            <p className='text-xl font-semibold mb-1'> {articles.title}</p>
                            <h1 className='text-xs text-gray-500'>By :{articles.author}</h1>
                            <p className='text=-sm text-gray-700 mb- 2'>{articles.description}</p>
                             <a href={articles.url}
                              target='_blank'
                              rel ='noopener noreferrer'
                              className='inline-block mt-2 text2 text-blue-600 hover:underline text-sm'
                             >Read More</a>
                        </li>
                    ))
                ) : (
                    <p className='text-center col-span-4 text-gray-500'>No articles available.</p>
                )}
            </ul>
        </div>
    )
}

export default Newsdata
