import { type NextPage } from "next";
import Head from "next/head";
// import Link from "next/link";
// import { signIn, signOut, useSession } from "next-auth/react";
// import circle from "../../public/circle.png"
// import Image from "next/image"


// icons
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-10 flex gap-5 flex-col">
        <div className="grid grid-cols-2 gap-4">
          <p className="font-semibold text-sm text-left">Good afternoon, Jeffery</p>
          <p className="text-orange-400 font-semibold text-sm text-right">100 ★</p>
        </div>
        <div className="border rounded-lg px-5 py-4 flex flex-col gap-2">
          <p className="font-semibold text-sm">You&apos;ll get another coupon after 2 more orders</p>
          <div className="w-full rounded-full h-2.5 bg-gray-200">
            <div className="bg-orange-400 h-2.5 rounded-full w-3/5"></div>
          </div>
          <p className="text-gray-400 font-semibold text-xs text-center">3/5 orders complete</p>
        </div>
        <h1 className="font-semibold text-lg">Coupons (5)</h1>
          <div className="flex flex-col gap-2">
          <div className="border rounded-lg p-5 py-10 text-center flex flex-col gap-4 bg-gradient-to-r from-emerald-400 to-teal-600 text-white">
            <h1 className="font-extrabold italic text-5xl">50% off <span className="text-xs align-super">x2</span></h1>
            <p className="text-sm font-semibold">Never Expires - Invite a friend</p>
          </div>
          <div className="border rounded-lg p-5 py-10 text-center flex flex-col gap-4 bg-gradient-to-r from-red-400 to-amber-500 text-white">
            <h1 className="font-extrabold italic text-5xl">25% off <span className="text-xs align-super">x3</span></h1>
            <p className="text-sm font-semibold">Never Expires - Rewards program</p>
          </div>
        </div>
        <div className="h-12"></div>
        <div className="fixed bottom-0 left-0 right-0 grid grid-cols-3 gap-10 py-5 px-10 border-t font-semibold backdrop-blur-lg bg-white bg-opacity-70">
          <div className="text-gray-500 text-center">
            <LocalCafeIcon className="h-8 w-8" onClick={() => window.open("/", "_self")} />
            <p>Order</p>
          </div>
          <div className="text-center text-blue-950">
            <AutoAwesomeIcon className="h-8 w-8" />
            <p>Rewards</p>
          </div>
          <div className="text-center text-gray-500" onClick={() => window.open("/account", "_self")}>
            <AccountCircleIcon className="h-8 w-8" />
            <p>Account</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;