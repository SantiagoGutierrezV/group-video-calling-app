import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react"; 

const appId = "68fdc3bd1048482890699ded3ed7cd8a"
const token = "007eJxTYNDc0hJutODepuQNhw8e2/QopVd5FlvAu9X2S96tsmE//WWXAoOZRVpKsnFSiqGBiYWJhZGFpYGZpWVKaopxaop5copFolAGQ/LknYzJsjUbWBgZIBDEZ2HITczMY2AAAADeIl8="


export const config = {mode: "rtc", codec: "vp8", appId: appId, token: token};
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";