const GOOGLE_API_KEY = "AIzaSyChQQ0ZkL-zCFpzEq-SjzfoFAVaMEOysHA";

const MAX_RESULT = 50;

export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=${MAX_RESULT}&regionCode=IN&key=${GOOGLE_API_KEY}`;
