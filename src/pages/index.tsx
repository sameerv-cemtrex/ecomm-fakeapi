import Image from "next/image";
import { Inter } from "next/font/google";
import ProductList from "@/components/ProductList";

import { useState } from "react";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Products | Ecomm sample</title>
        <meta
          name="description"
          content="This is a sample project to test Social cards on server rendering."
        />
        <meta property="og:title" content="Ecomm Products | Sample store" />
        <meta
          property="og:image"
          content="https://fakestoreapi.com/icons/intro.svg"
        />
        <meta property="og:type" content="blog" />
        <meta name="twitter:title" content="Ecomm Products | Sample store" />
        <meta
          name="twitter:image"
          content="https://fakestoreapi.com/icons/intro.svg"
        />
        <meta name="twitter:type" content="blog" />
      </Head>
      <main className="container py-4">
        <h1 className="font-bold text-2xl text-center mb-4 py-4 bg-violet-50 rounded-md">
          Products
        </h1>
      </main>
      <ProductList />
    </>
  );
}
