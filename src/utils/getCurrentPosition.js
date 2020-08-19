export async function getCurrentPosition(options = {}) {
  try {
    const { coords } = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
    const { latitude, longitude } = coords;
    return { latitude, longitude };
  } catch (error) {
    return { latitude: 0, longitude: 0 };
  }
}
