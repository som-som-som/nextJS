import Image from "next/image";

export default function Home() {
  return (
    <>
    <h2>Welcome</h2>
    Hello, WEB!

    <br></br>
    {/* <img src="/hello.png"></img> */}
    <Image 
      src="/hello.png" 
      alt="Hello" 
      width={300} 
      height={300} 
    />
    </>
  );
}
