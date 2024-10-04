import { Send } from "lucide-react";
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
    <main className="flex flex-col items-center gap-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-xl md:text-3xl">
          Short your url in just one click!
        </h1>
        <h2 className="text-lg md:text-2xl">
          Create a short url was never easy like it!
        </h2>
      </div>
      <div className="input-group">
        <form
          onSubmit={(e) => formDataPost(e)}
          className="flex items-center gap-2"
        >
          <input
            type="url"
            placeholder="Enter your url here"
            ref={urlRef}
            autoComplete="url"
            className="h-9 w-80 rounded-md border-2 border-slate-500 pl-2 outline-none active:border-slate-900 md:h-10 md:w-96"
          />
          <button className="rounded-md bg-slate-400 px-3 py-2 text-center text-white md:px-4 md:py-2">
            <Send />
          </button>
        </form>
      </div>
      <Content shortUrl={urlData?.shortUrl} />
    </main>
  );
}
