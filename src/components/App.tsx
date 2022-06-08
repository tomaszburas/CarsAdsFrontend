import { Route, Routes } from "react-router-dom";
import { AddAd } from "./AddAd";
import { Header } from "./Header";
import { Map } from "./Map";
import { Theme } from "./Theme";
import { RECAPTCHA_KEY } from "../config";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export const App = () => {
  return (
    <Theme>
      <Header />
      <Routes>
        <Route path="/cars-ad" element={<Map />} />
        <Route
          path="/cars-ad/add"
          element={
            <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_KEY}>
              <AddAd />
            </GoogleReCaptchaProvider>
          }
        />
        <Route path="*" element={<Map />} />
      </Routes>
    </Theme>
  );
};
