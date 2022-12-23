import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { InferGetStaticPropsType } from "next";
import { getStaticProps } from "../src/StaticProps";

export { getStaticProps } from "../src/StaticProps";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ pokemons }: any) {
  return (
    <>
      <ul>
        {pokemons?.results?.map((item: any) => {
          return <li key={item.name}>{item.name}</li>;
        })}
      </ul>
    </>
  );
}
