import {Context, GET, Path, POST, ServiceContext} from 'typescript-rest';
import {Inject} from 'typescript-ioc';

import {LoggerApi} from '../logger';

@Path('/cloud-events')
export class CloudEventsController {
  @Inject
  _baseLogger: LoggerApi;
  @Context
  context: ServiceContext;

  get logger() {
    return this._baseLogger.child('CloudEventsController');
  }

  @GET
  async receiveEventGet(): Promise<string> {
    this.logger.info(`Received event: `, {headers: this.context.request.headers});
    return '';
  }

  @POST
  async receiveEvent(event: any): Promise<string> {
    this.logger.info(`Received event: `, {event, headers: this.context.request.headers});
    return '';
  }
}
