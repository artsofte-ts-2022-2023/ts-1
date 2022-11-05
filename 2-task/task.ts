export interface IApplicationConfig {
  os: 'win' | 'mac' | 'linux',
}

export interface ILogger {
  plain: (msg: string) => void;
  warn: (msg: string) => void;
  error: (msg: string) => void;
}

export class Application {
  public constructor(
    private readonly config: IApplicationConfig,
    private readonly logger: ILogger,
  ) {
  }

  public start() {
    this.logger.plain(`App started, os: ${this.config.os}`);
    this.logger.warn('Dont restart pc');
  }
}
