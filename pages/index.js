import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const code = "KOR";
  const router = useRouter();

  const onClickButton = () => {
    // router.push("/search");
    router.push({
      pathname: "/country/[code]",
      query: { code: code },
    });
  };

  return (
    <div>
      Home Page
      <div>
        <button onClick={onClickButton}>Country 페이지로 이동</button>
        <Link href={"/search"}>Search Page 이동</Link>
      </div>
      <div>
        {/* <Link href={`/country/${code}`}>{code} Page 이동</Link> */}
        <Link
          href={{
            pathname: "/country/[code]",
            query: { code: code },
          }}
        >
          {code} Page 이동
        </Link>
      </div>
    </div>
  );
}
