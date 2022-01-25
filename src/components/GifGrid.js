import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
  const { data: gifs, loading } = useFetchGifs(category);

  return (
    <>
      <h2 className='animate__animated animate__fadeIn'>
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </h2>
      {loading && (
        <p className='animate__animated animate__flash'>Loading...</p>
      )}
      <div className='card-grid'>
        {gifs.map(img => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
