// lib/appwrite.ts
import { Platform } from "react-native";
import {
  Client,
  Account,
  Databases,
  Storage,
  Avatars,
} from "react-native-appwrite";

export const client = new Client()
  .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT || "")
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID || "")
  .setPlatform(
    Platform.OS === "ios" ? "host.exp.Exponent" : "host.exp.exponent"
  );

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
