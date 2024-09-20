import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { v4 } from "uuid";

import socket from "../../socket/index";
import ACTIONS from "../../socket/actions";

const Main = () => {
  const navigate = useNavigate();

  const [rooms, updateRooms] = useState([]);

  useEffect(() => {
    socket.on(ACTIONS.SHARE_ROOMS, ({ rooms = [] } = {}) => {
      console.log(rooms);

      updateRooms(rooms);
    });
  }, []);

  return (
    <div>
      <h1>Avaible Rooms</h1>

      <ul>
        {rooms.map((roomID) => (
          <li key={roomID}>
            {roomID}
            <button
              onClick={() => {
                navigate(`/room/${roomID}`);
              }}
            >
              JOIN TO ROOM
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={() => {
          navigate(`/room/${v4()}`);
        }}
      >
        Create New Room
      </button>
    </div>
  );
};

export default Main;
