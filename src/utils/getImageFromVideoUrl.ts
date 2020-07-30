export const getImageFromVideoUrl = (url: string): string => {
  const id = url.split("=")[1];
  return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
};
