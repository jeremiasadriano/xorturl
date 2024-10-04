import { Clipboard, ClipboardCheck } from "lucide-react";
import { useState } from "react";

type UrlProps = {
  shortUrl?: string;
  qrUrl?: string;
};

export default function Content({ shortUrl, qrUrl }: UrlProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl ?? "");
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Falha ao copiar: ", err);
    }
  };

  return (
    <>
      {shortUrl && (
        <div>
          <div className="response flex gap-8">
            <a
              href={shortUrl}
              target="_blank"
              className="rounded-sm bg-slate-100 p-2 text-black underline"
            >
              {shortUrl}
            </a>
            <button onClick={copyToClipboard}>
              {!copied ? <Clipboard /> : <ClipboardCheck />}
            </button>
          </div>
          <div className="qr">
            <img src={qrUrl} alt="qr url" />
          </div>
        </div>
      )}
    </>
  );
}
