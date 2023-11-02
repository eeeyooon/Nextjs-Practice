import { fetchCountries } from "@/api";
import Searchbar from "@/components/Searchbar";

export default function Home({ countries }) {
  return (
    <div>
      <Searchbar />
    </div>
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
