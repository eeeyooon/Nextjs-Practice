import { useEffect } from "react";

export default function Home({ name }) {
  console.log("HOME");

  useEffect(() => {
    console.log("HOME MOUNT");
  }, []);

  return <div>{name}</div>;
}

export const getServerSideProps = async () => {
  // SSR을 위해 서버측에서 컴포넌트(페이지의 역할을 하는 컴포넌트 <- 여기선 Home 컴포넌트)에게 전달할 데이터를 설정하는 함수.
  // 이 함수는 반드시 객체를 반환해야 함. props와 props의 값(무조건 객체)
  // 이 객체의 값은 반드시 컴포넌트로 전달됨.

  return {
    props: {
      name: "KOREA",
    },
  };
};
