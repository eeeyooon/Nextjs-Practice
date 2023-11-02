import { fetchCountries } from "@/api";
import CountryList from "@/components/CountryList";
import Searchbar from "@/components/Searchbar";

export default function Home({ countries }) {
  return (
    <>
      <Searchbar />
      <CountryList countries={countries} />
    </>
  );
}

export const getStaticProps = async () => {
  // NARAS API 호출 코드

  // 전체 국가 데이터 불러오기
  const countries = await fetchCountries();
  console.log("countries 데이터 불러옴.");

  return {
    props: {
      countries,
    },
  };
};
