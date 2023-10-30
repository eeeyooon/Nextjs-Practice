import { fetchCountries } from "@/api";

export default function Home({ countries }) {
  return (
    <div>
      {countries.map((country) => (
        <div key={country.code}>{country.commonName}</div>
      ))}
    </div>
  );
}

export const getServerSideProps = async () => {
  // NARAS API 호출 코드

  // 전체 국가 데이터 불러오기
  const countries = await fetchCountries();

  return {
    props: {
      countries,
    },
  };
};
