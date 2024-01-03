import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const Product = ({ product }: any) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{product.title}</title>
        <meta property="og:title" content={product.title} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.image} />
        <meta property="og:type" content="blog" />
        <meta name="twitter:title" content={product.title} />
        <meta name="twitter:image" content={product.image} />
        <meta property="twitter:description" content={product.description} />
        <meta name="twitter:type" content="blog" />
      </Head>
      <div className="container py-4">
        <header className="w-full mb-4 py-4 bg-violet-50 rounded-md relative">
          <p
            onClick={() => router.push("/")}
            className="text-xs cursor-pointer text-slate-700 absolute top-1/2 -translate-y-1/2 left-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-move-left"
            >
              <path d="M6 8L2 12L6 16" />
              <path d="M2 12H22" />
            </svg>
            back
          </p>
          <h1 className="font-bold text-2xl text-center ">Product Detail</h1>
        </header>

        <main className="grid grid-cols-2 gap-6 place-items-center">
          <img
            className="w-full object-contain aspect-square rounded-md"
            src={product.image}
          />

          <div className="p-2">
            <p className="text-slate-600 uppercase leading-7">
              {product.category}
            </p>
            <p className="text-xl font-bold ">{product.title}</p>

            <p className="text-bold text-2xl tracking-wide mt-6">
              ${product.price}
            </p>

            <div className="pt-24 space-y-2">
              <p className="text-slate-600 font-semibold ">Description</p>

              <p className="w-2/3">{product.description}</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export const getServerSideProps = async (ctx: any) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/${ctx.params.id}`
  );

  const product = await response.json();

  return {
    props: {
      product,
    },
  };
};

export default Product;
