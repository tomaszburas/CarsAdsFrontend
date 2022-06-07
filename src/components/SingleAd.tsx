import { AdEntity } from "types";
import { useEffect, useState } from "react";
import { API_URL } from "../config";

interface Props {
  id: string;
}

export const SingleAd = ({ id }: Props) => {
  const [ad, setAd] = useState<AdEntity | null>(null);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${API_URL}/ad/${id}`);
      const data = await res.json();

      setAd(data.ad);
    })();
  }, [id]);

  if (ad === null) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <strong>
        {ad.brand} {ad.model}
      </strong>
      {ad.version ? <p>Version: {ad.version}</p> : null}
      <p>Year: {ad.year}</p>
      <p>Power: {ad.power} HP</p>
      <p>Price: {ad.price} PLN</p>
      <a href={ad.url} target="_blank" rel="noreferrer">
        Open announcement
      </a>
    </>
  );
};
