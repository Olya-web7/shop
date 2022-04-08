import { Injectable } from '@angular/core';
import { Config } from '../models/config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private config!: Config;

  constructor() { }

  setConfig(config: Partial<Config>) {
    this.config = {...this.config, ...config};
  }

  getConfig() {
    return this.config;
  }
}
