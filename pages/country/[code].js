import { fetchCountry } from "@/api";
import SubLayout from "@/components/SubLayout";
import { useRouter } from "next/router";
// Next에서 제공하는 커스텀 훅. router 객체를 반환하는 함수인데,
// router 객체 안에 라우팅과 관련된 대부분의 정보가 다 저장되어있음.

export default function Country({ country }) {
  const router = useRouter();
  const { code } = router.query;
  // code 변수에 url 파라미터로 전달된 국가코드 저장.

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!country) {
    return <div>존재하지 않는 국가입니다.</div>;
  }

  return (
    <div>
      {country.commonName} {country.officialName}
    </div>
  );
}

Country.Layout = SubLayout;

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { code: "ABW" } }, { params: { code: "KOR" } }],
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { code } = context.params;
  console.log(`${code} 페이지 생성!`);

  let country = null;

  if (code) {
    country = await fetchCountry(code);
  }

  return {
    props: { country },
    revalidate: 3, // 3초마다 재생성
  };
};
