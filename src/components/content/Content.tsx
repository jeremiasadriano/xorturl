import { memo } from "react";

type UrlProps = {
  baseUrl?: string;
  shortUrl?: string;
  qrUrl?: string;
  expirationTime?: string;
};

const Content = memo(
  ({ baseUrl, shortUrl, qrUrl, expirationTime }: UrlProps) => {
    return <></>;
  },
);
export default Content;
