import React from "react";

import './Challenges.css';
import GalleryContainer from '../../src/components/GalleryContainer/GalleryContainer.js'; 
import CrazyButton from '../../src/components/CrazyButton/CrazyButton.js';
import UploadModal from '../../src/components/CrazyButton/UploadModal';

import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../../src/locales/en.json";
import translationFR from "../../src/locales/fr.json";
import LanguageSwitcher from "../LanguageSwitcher.js";

const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});


const galleryItems = [
    {
      title: 'Artwork 1',
      imageUrl: 'artwork1.jpg',
      tags: ['Abstract', 'Oil Painting', 'Modern'],
      artist: 'John Doe'
    },
    {
      title: 'Artwork 1',
      imageUrl: 'artwork1.jpg',
      tags: ['Abstract', 'Oil Painting', 'Modern'],
      artist: 'John Doe'
    },{
      title: 'Artwork 1',
      imageUrl: 'artwork1.jpg',
      tags: ['Abstract', 'Oil Painting', 'Modern'],
      artist: 'John Doe'
    }];
 
const Challenges = () => {

  const { t } = useTranslation();


  const [open, setOpen] = React.useState(false);
 
  const handleClose = () => {
      setOpen(false);
  };

  const handleOpen = () => {
      setOpen(true);
  };

    return (

      <div className="Challenges">

        <header className="Challenges-header">

          <LanguageSwitcher />

          <p> {t("welcome")} </p>

          <p> {t("current_challenge")} </p>

          <CrazyButton buttonText="Upload" />

          <button type="button" onClick={handleOpen}>
            {t("click")}
          </button>

          <UploadModal isOpen={open} onClose={handleClose}>
            <>
            <button className="close-btn" onClick={handleClose}>x</button>
            <h3>{t("upload")}</h3>
            <label htmlFor="name">{t("name_of_art")}</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="tags">{t("tags")}</label>
            <input type="text" id="tags" name="tags" />
            <button className="up-btn" onClick={handleClose}>Upload</button>
            </>
          </UploadModal>

        </header>

        <header className='Gallery-header'>
          <p> {t("week")}: 1</p>
          <GalleryContainer galleryItems={galleryItems} />

          <p> {t("week")}: 2</p>
          <GalleryContainer galleryItems={galleryItems} />

          <p> {t("week")}: 3</p>
          <GalleryContainer galleryItems={galleryItems} />
        </header>

        </div>
    );
};
 
export default Challenges;