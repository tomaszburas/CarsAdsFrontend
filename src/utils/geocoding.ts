export const geocode = async (address: string): Promise<{
    lat: number | null;
    lon: number | null;
}> => {
    const geoRes = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`);
    const geoData = await geoRes.json();

    if (!geoData[0]) {
        return {lat: null, lon: null};
    }

    const lat = parseFloat(geoData[0].lat);
    const lon = parseFloat(geoData[0].lon);

    return {lat, lon};
}
