import { useParams } from "react-router-dom";

import { useWebRTC } from "../../hooks/useWebRTC";

import { LOCAL_VIDEO } from "../../hooks/useWebRTC";

const Room = () => {
  const { id: roomID } = useParams();

  const { clients, provideMediaRef } = useWebRTC(roomID);

  console.log(clients);
  return (
    <div>
      {clients.map((clientID) => {
        return (
          <div key={clientID}>
            <video
              ref={(instance) => {
                provideMediaRef(clientID, instance);
              }}
              autoPlay
              playsInline
              muted={clientID === LOCAL_VIDEO}
            ></video>
          </div>
        );
      })}
    </div>
  );
};

export default Room;
