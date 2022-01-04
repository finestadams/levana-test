import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useContext } from 'react';
import { ValueContext } from '../Layout/Layout';

const Home: NextPage = () => {
  const [searchValue, changeUrl] = useContext(ValueContext);
  console.log(searchValue, 'this is changeurl');
  return (
    <div style={{ padding: '52px 38px' }}>
      {searchValue ? (
        <img
          className=" inline object-cover opacity-50"
          src={changeUrl}
          alt="Profile image"
          style={{
            width: '55.9px',
            height: '55.9px',
            borderRadius: '16.4px',
            marginRight: '11px'
          }}
        />
      ) : (
        <img
          className=" inline object-cover opacity-50"
          src="/svg/user.svg"
          alt="Profile image"
          style={{
            width: '55.9px',
            height: '55.9px',
            borderRadius: '16.4px',
            marginRight: '11px'
          }}
        />
      )}
      <h1
        className="text-3xl font-bold opacity-50"
        style={{ paddingTop: '40px' }}
      >
        Title: {searchValue}
      </h1>
    </div>
  );
};

export default Home;
