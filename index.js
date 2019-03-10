import * as protobuf from "protobufjs/light";
import * as awesome from "./awesome.json";

const root = protobuf.Root.fromJSON(awesome);

export function toMessage(awesomeField) {
  // Obtain a message type
  const AwesomeMessage = root.lookupType("AwesomeMessage");

  // Exemplary payload
  const payload = { awesomeField };

  // Verify the payload if necessary (i.e. when possibly incomplete or invalid)
  const errMsg = AwesomeMessage.verify(payload);
  if (errMsg)
    throw Error(errMsg);

  // Create a new message
  const message = AwesomeMessage.create(payload); // or use .fromObject if conversion is necessary

  // Encode a message to an Uint8Array (browser) or Buffer (node)
  const buffer = AwesomeMessage.encode(message).finish();

  return buffer;
}