export interface IUrlRequest {
  url?: string;
}

export interface IUrlResponse {
  baseUrl: string;
  shortUrl: string;
  qrUrl: string;
  expirationTime: string;
}
