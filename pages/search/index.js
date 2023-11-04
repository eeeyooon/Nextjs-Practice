import { fetchSearchResults } from "@/api";
import CountryList from "@/components/CountryList";
import Searchbar from "@/components/Searchbar";
import SubLayout from "@/components/SubLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function Search() {
  const router = useRouter();
  const { q } = router.query;

  const [countries, setCountries] = useState([]);

  const setData = async () => {
    const data = await fetchSearchResults(q);
    setCountries(data);
  };

  useEffect(() => {
    if (q) {
      setData();
    }
  }, [q]);

  return (
    <>
      <Head>
        <title>NARAS 검색</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content={`${q} 검색 결과 | NARAS`} />
        <meta
          property="og:description"
          content={`${q}의 검색 결과를 확인하세요.`}
        />
      </Head>
      <Searchbar q={q} />
      <CountryList countries={countries} />
    </>
  );
}

Search.Layout = SubLayout;
