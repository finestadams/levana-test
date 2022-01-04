import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useContext, useRef, useState } from 'react';
import { ValueContext } from '../Layout/Layout';

const Home: NextPage = () => {
  const [openModal, setModal] = useState(false);
  const [searchValue, changeUrl, setContact, isContact] =
    useContext(ValueContext);
  const contact = isContact.map((cont: any) => {
    console.log('this is contact', cont);
    const { name } = cont;
    return (
      <>
        <tr key={cont.id}>
          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-10 h-10">
                <img
                  className="w-10 h-10 rounded-full"
                  src={changeUrl}
                  alt="admin dashboard ui"
                />
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium leading-5 text-gray-900">
                  {searchValue}
                </div>
              </div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <div className="text-sm leading-5 text-gray-500">{name.first}</div>
          </td>
          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <div className="text-sm leading-5 text-gray-500">{name.last}</div>
          </td>
          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <div className="text-sm leading-5 text-gray-500">{cont.email}</div>
          </td>
        </tr>
      </>
    );
  });
  return (
    <>
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
          ''
        )}
        <h1
          className="text-3xl font-bold opacity-50 flex items-center"
          style={{ paddingTop: '40px' }}
        >
          {searchValue}
        </h1>
        <div className="flex flex-col mt-16">
          <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Username
                    </th>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      First
                    </th>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Last
                    </th>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Email
                    </th>
                  </tr>
                </thead>

                {isContact.length ? (
                  <tbody
                    className="bg-white cursor-pointer"
                    onClick={() => {
                      setModal(true);
                      setModal(!openModal);
                    }}
                  >
                    {contact}
                  </tbody>
                ) : (
                  <tbody className="">
                    <tr>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        No Contact Generated
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        No Contact Generated
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        No Contact Generated
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        No Contact Generated
                      </td>
                    </tr>
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
      {openModal && (
        <div
          style={{ backgroundColor: 'rgba(0,0,0,0.15)' }}
          className="fixed font-HKGrotesk w-full h-full inset-0 bg-transparent z-100 "
        >
          <div
            style={{ transform: 'translate(-50%, -50%)' }}
            className="absolute top-2/4 left-2/4 bg-white rounded-2xl w-50 h-20"
          >
            <div className="p-4">
              <p>Do you want to delete this contact?</p>
              <div className="flex items-center justify-center">
                <button
                  className="mr-2 bg-lavanaRed rounded-2xl  text-white px-4 py-1"
                  onClick={() => setModal(false)}
                >
                  Delete
                </button>
                <button onClick={() => setModal(false)}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
