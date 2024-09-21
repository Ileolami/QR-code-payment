import { createThirdwebClient } from "thirdweb";

import { ConnectButton } from "thirdweb/react";

const client = createThirdwebClient({ clientId: import.meta.env.VITE_CLIENT_ID});
type Props = {
  text?: string
}
export default function ConnectBtn({text}: Props) {
  return (
  
      <ConnectButton connectButton={{
        label: text? text : "Connect Wallet",
      }}  client={client} />
   
  );
}