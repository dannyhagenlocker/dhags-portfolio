function getImageUrl(name: string | undefined) {
  return new URL(`../assets/${name}`, import.meta.url).href;
}

export { getImageUrl };
