import { useEffect, useState, createContext } from 'react';

export default function Sidebar({ searchValue, setSearchValue }: any) {
  const [changeUrl, setChangeUrl] = useState('');
  const [spinning, setSpinning] = useState(false);
  const [isDisabled, setDisabled] = useState(true);
  const getAvatar = async (searchValue: string) => {
    const url = `https://avatars.dicebear.com/api/human/${searchValue}.svg`;
    const response = await fetch(url);
    setChangeUrl(response?.url);
    console.log('this is the url', response?.url);
    console.log('this is the value', searchValue);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSpinning(false);
      setDisabled(true);
      getAvatar(searchValue);
    }, 2000);
    setSpinning(true);
    setDisabled(false);
    return () => clearTimeout(timer);
  }, [searchValue]);

  return (
    <aside
      className=" bg-lavanaSidebarColor w-full min-h-screen flex flex-col items-center ml-0"
      style={{
        padding: '41px 20px',
        maxWidth: '295px',
        minWidth: '294px'
      }}
    >
      <div className="flex flex-row justify-center cursor-pointer relative ">
        {searchValue ? (
          <img
            className=" inline object-cover"
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
            className=" inline object-cover"
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
        {spinning && (
          <div className="absolute ">
            <svg
              className="animate-spin -ml-1 mr-3 h-10 w-10 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        )}
      </div>
      <form style={{ marginTop: '40px' }}>
        <input
          type="text"
          className=" text-lavanaDark w-full py-2 text-sm bg-lanorButtonGrey rounded-full pl-10 font-semibold focus:outline-none focus:text-lavanaDark placeholder"
          placeholder="username"
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        />
        <button
          type="submit"
          disabled={!isDisabled || !searchValue}
          className={
            !isDisabled || !searchValue
              ? 'mt-4 w-full px-4 py-2 rounded-2xl justify-center focus:outline-none focus:shadow-outline bg-lavanaGrey text-black'
              : 'mt-4 w-full px-4 py-2 rounded-2xl justify-center focus:outline-none focus:shadow-outline bg-lavanaBlue text-white'
          }
        >
          Create User
        </button>
      </form>
    </aside>
  );
}
