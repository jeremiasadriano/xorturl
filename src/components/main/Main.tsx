import { useRef, useState } from "react";
import { postData } from "../../hooks/ApiFetch";
import { IUrlResponse } from "../../types/ApiTypes";
import Content from "../content/Content";

export default function Main() {
  const urlRef = useRef<HTMLInputElement | null>(null);
  const [urlData, setUrlData] = useState<IUrlResponse | null>(null);

  async function formDataPost(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await postData<IUrlResponse>("url", {
        url: urlRef.current?.value,
      });
      setUrlData(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="flex flex-col items-center">
      <h1 className="text-3xl">Short your url in just one click!</h1>
      <h2 className="text-2xl">Create a short url was never easy like it!</h2>
      <div className="input-group flex items-center gap-2">
        <form onSubmit={(e) => formDataPost(e)}>
          <input
            type="url"
            placeholder="Enter your url here"
            ref={urlRef}
            autoComplete="url"
            className="h-10 w-96 rounded-md border-2 border-slate-500 pl-2 outline-none active:border-slate-900"
          />
          <button className="h-10 w-32 rounded-md bg-slate-400">Short</button>
        </form>
      </div>
      <Content
        baseUrl={urlData?.baseUrl}
        shortUrl={urlData?.shortUrl}
        qrUrl={urlData?.qrUrl}
        expirationTime={urlData?.expirationTime}
      />
    </main>
  );
}
