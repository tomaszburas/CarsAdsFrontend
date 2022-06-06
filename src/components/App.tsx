import { Route, Routes } from "react-router-dom";
import { AddAd } from "./AddAd";
import { Header } from "./Header";
import { Map } from "./Map";
import { Theme } from "./Theme";

export const App = () => {
  return (
    <Theme>
      <Header />
      <Routes>
          <Route path="/" element={<Map />} />
          <Route path="/add" element={<AddAd />} />
          <Route path="*" element={<Map />} />
      </Routes>
    </Theme>
  );
};
