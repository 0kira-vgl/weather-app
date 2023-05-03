import React, { useState } from 'react';
import fetchData from './services/api';
import initialData from './halpers/initialData';
import Card from './components/Card';

function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(initialData);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(city).then((response) => {
      setData(response);
    });
  };

  return (
    <div className="flex flex-col w-full h-screen items-center sm:justify-center  p-4">
      <form onSubmit={handleSubmit} className="fixed bottom-0 w-full flex p-4 sm:relative justify-center">
        <input className="p-3 rounded-lg outline-none w-full sm:max-w-[300px] flex-1" type="text" placeholder="Cidade" value={city} onChange={({ target: { value } }) => setCity(value)} />
        <button className="bg-blue-600 rounded-lg p-3 ml-3 text-white font-bold" type="submit">Pesquisar</button>
      </form>
      <Card data={data} />
    </div>
  );
}

export default App;
