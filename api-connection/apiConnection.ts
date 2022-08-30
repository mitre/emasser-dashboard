import {Configuration} from "@mitre/emass_client/dist/configuration"
import globalAxios, {AxiosInstance, AxiosRequestConfig} from 'axios'
import {ApiConfig} from './apiConfig';
import { InitConnections } from "./initConnection";

export class ApiConnection {
  public configuration: Configuration;
  public basePath: Configuration["basePath"];
  public axiosInstances: AxiosInstance
  
  constructor(url: string, port: number, apiKey: string, sslVerify: boolean, reqCert: boolean) {
    
    const conf = new ApiConfig(url, port, apiKey, sslVerify, reqCert);
    const init = new InitConnections(conf.url, conf.port, conf.apiKey, conf.sslVerify, conf.reqCert);

    this.configuration = init.configuration;
    this.basePath = init.configuration.basePath;
    this.axiosInstances = init.axiosInstances;

  }
}
