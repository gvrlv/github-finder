import spinner from './assets/spinner.gif';

const Spinner = () => {
  return (
    <div className='w-100 mt-20'>
      <p className='text-center mx-auto text-4xl p-5'>Loading...</p>
      <img
        width={200}
        className='text-center mx-auto'
        src={spinner}
        alt='Loading...'
      ></img>
    </div>
  );
};

export default Spinner;
