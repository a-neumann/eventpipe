import { IElbwalker } from "@elbwalker/walker.js";
import { ServerDestination } from "./destinations";

export namespace EventPipe {
  interface Function {
    addDestination: AddDestination;
    push: Push;
    config: Config;
    destinations: Destinations;
  }

  interface AddDestination {
    (id: string, destination: ServerDestination.Function<any, any>): void;
  }

  interface Push {
    (event: ServerEvent): Promise<PushResult>;
  }

  interface PushResult {
    successful: ServerDestination.PushSuccess;
    failed: ServerDestination.PushFailure;
  }

  interface Config {
    version: string;
  }

  interface Destinations {
    [key: string]: ServerDestination.Function;
  }

  interface ServerEvent extends WebEvent {
    request: Request;
  }

  type WebEvent = IElbwalker.Event;

  interface Request {
    useragent: string;
  }
}
