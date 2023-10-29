import SubLayout from "@/components/SubLayout";
import { useRouter } from "next/router";
// Next에서 제공하는 커스텀 훅. router 객체를 반환하는 함수인데,
// router 객체 안에 라우팅과 관련된 대부분의 정보가 다 저장되어있음.

export default function Country() {
  const router = useRouter();
  // router 변수에 useRouter 객체 저장

  // const code = router.query.code;
  const { code } = router.query;
  // code 변수에 url 파라미터로 전달된 국가코드 저장.

  return <div>Country code : {code}</div>;
}

Country.Layout = SubLayout;
