import { Clipboard, ClipboardCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { api } from "../../hooks/ApiFetch";

type UrlProps = {
  shortUrl?: string;
};

export default function Content({ shortUrl }: UrlProps) {
  const [copied, setCopied] = useState(false);
  const appDns = import.meta.env.VITE_APPLICATION_DNS;
  const [qrCodeImage, setQrCodeImage] = useState<string | null>(null);
  const shortenerUrl = `${appDns}${shortUrl}`;

  const copyToClipboard = async () => {
    if (shortUrl) {
      try {
        await navigator.clipboard.writeText(shortenerUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch (err) {
        console.error("Failed while coping the url: ", err);
      }
    }
  };

  const fetchQRCode = async () => {
    if (shortUrl) {
      try {
        const response = await api.get<Blob>(`qr/${shortUrl}`, {
          responseType: "blob",
        });
        const imageUrl = URL.createObjectURL(response.data);
        setQrCodeImage(imageUrl);
      } catch (error) {
        console.error("Error fetching QR code:", error);
      }
    }
  };

  useEffect(() => {
    fetchQRCode();
    return () => {
      if (qrCodeImage) {
        URL.revokeObjectURL(qrCodeImage);
      }
    };
  }, [shortUrl]);
  return (
    <>
      {shortUrl && (
        <div>
          <div className="response flex gap-8">
            <a
              href={shortenerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm bg-slate-100 p-2 text-black underline"
            >
              {shortenerUrl}
            </a>
            <button onClick={copyToClipboard} aria-label="Copy Url">
              {!copied ? <Clipboard /> : <ClipboardCheck />}
            </button>
          </div>
          <div className="qr">
            {qrCodeImage ? (
              <img src={qrCodeImage} alt="QR code shortener" />
            ) : (
              <p>Carregando QR code...</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
