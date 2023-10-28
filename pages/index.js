import Link from "next/link";

export default function Home() {
  const code = "KOR";

  return (
    <div>
      Home Page
      <div>
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
