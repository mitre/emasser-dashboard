export class ApiConfig {
  public url: string;
  public port: number;
  public apiKey: string;
  public sslVerify: boolean;
  public reqCert: boolean;

  constructor(url: string, port: number, apiKey: string, sslVerify: boolean, reqCert: boolean) {
    this.url = url; 
    this.port = port;
    this.apiKey = apiKey;
    this.sslVerify = sslVerify;
    this.reqCert = reqCert;
  }
}