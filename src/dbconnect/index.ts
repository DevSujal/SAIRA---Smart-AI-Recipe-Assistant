import mongoose from "mongoose";
import { store } from "../store/store.js";
import {
  connect as connectStatus,
  disconnect,
} from "../store/features/dbReducer.js";
const connect = async () => {

  const { dbReducer } = store.getState();
  const { isConnected } = dbReducer;
  if (isConnected) {
    console.log("Using existing database connection");
    return;
  }

  if (mongoose.connections[0].readyState) {
    store.dispatch(connectStatus());
    console.log("Reusing established connection");
    return;
  }
  try {
    await mongoose.connect(String(process.env.MONGODB_URI));
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Connected to database");
      store.dispatch(connectStatus());
    });

    connection.on("error", (error) => {
      console.log("Error in connecting to database", error);
      store.dispatch(disconnect());
      process.exit();
    });
  } catch (error) {
    store.dispatch(disconnect());
    throw new Error("Error in connecting to database : " + error.message);
  }
};

export default connect;
