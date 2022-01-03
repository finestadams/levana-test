import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useContext } from 'react';
import { ValueContext } from '../Layout/Layout';

const Home: NextPage = () => {
  const searchValue = useContext(ValueContext);
  return <h1 className="text-3xl font-bold underline">Title: {searchValue}</h1>;
};

export default Home;
