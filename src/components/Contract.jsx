import React, { useState } from 'react';

function Contract() {
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert('Form submitted successfully');
      setEmail('');
      setDescription('');
    }, 1500);
  }
  return (
    <section className="w-1/2 m-auto">
      <form onSubmit={handleSubmit}>
        <input
          className="px-4 py-3 my-3 border-2 border-gray-200 rounded-md shadow-lg w-full"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Please enter your email"
          required
        />
        <textarea
          className="px-4 py-5 my-3 border-2 border-gray-200 rounded-md shadow-lg w-full"
          id="test"
          value={description}
          onChange={e => setDescription(e.target.value)}
          rows="4"
          placeholder="Description"
          cols="50"
          required></textarea>
        <button
          type="submit"
          className="px-4 active:border-2 ease-in duration-100 bg-primary hover:bg-white py-3 my-3 mb-10 text-white font-semibold text-lg rounded-md shadow-lg w-full">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contract;
