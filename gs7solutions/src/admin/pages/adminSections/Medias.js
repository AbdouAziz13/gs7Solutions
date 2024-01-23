import React, { useState, useEffect } from "react";
import { BiSolidCloudUpload } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-scroll";
import PoppupMediaPublish from "../../poppup/PoppupMediaPublish";

const Medias = () => {
  const [images, setImages] = useState([]); // Utilisez un tableau pour stocker les images
  const [mediaList, setMediaList] = useState([]);
  const [openAboutPoppup, setOpenAboutPoppup] = useState(false);
  const [nameUploded, setNameUploaded] = useState("");

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files); // Convertit FileList en un tableau
    setImages(selectedImages);
  };

  const upload = () => {
    const formData = new FormData();
    images.forEach((image) => {
      formData.append("images", image);
    });

    axios
      .post("http://localhost:3030/upload/images/", formData)
      .then((res) => {
        console.log("Images uploadées avec succès");
        setImages([]);
        setMediaList([...mediaList, ...res.data]);
      })
      .catch((err) => console.log(err));
  };
  // session

  useEffect(() => {
    axios
      .get("http://localhost:3030/upload/images/")
      .then((response) => {
        const responseData = response.data.listOfImages;
        if (Array.isArray(responseData)) {
          setMediaList(responseData);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  const deleteMedia = (id) => {
    axios.delete(`http://localhost:3030/upload/images/${id}`).then(() => {
      alert("Média supprimé avec succès");
      setMediaList(mediaList.filter((media) => media._id !== id));
    });
  };

  return (
    <div className="relative justify-center items-center flex flex-col">
      <div className="absolute " id="poppup">
        <PoppupMediaPublish
          fileName={nameUploded}
          openPoppup={openAboutPoppup}
          closePoppup={setOpenAboutPoppup}
        />
      </div>

      <h1 className="text-xl ms:text-2xl text-center font-bold mt-5  ">
        <span className="text-[#0075FF]">section photos vidéos</span>
      </h1>

      <div>
        <form
          className="md:w-[400px] hover:bg-gray-100 static cursor-pointer rounded-md w-full mx-auto justify-center p-10 items-center flex flex-col border-3 border-dashed"
          onClick={() => document.querySelector(".input-field").click()}
        >
          <input
            type="file"
            className="input-field hidden"
            onChange={handleImageChange}
            multiple // Permet de sélectionner plusieurs fichiers
          />
          {images.length > 0 ? (
            images.map((image, index) => (
              <img
                key={index}
                src={URL.createObjectURL(image)}
                alt={image.name}
                className="w-fit md:w-[600px] h-[200px] rounded-md md:h-fit mt-2"
              />
            ))
          ) : (
            <>
              <BiSolidCloudUpload color="#1475cf" size={90} />
              <p className="font-bold  md:text-2xl">
                Uploader des fichiers ici
              </p>
            </>
          )}
        </form>
        <section className="flex flex-col text-center">
          <p className="text-sm font-medium md:my-2">
            {images.length === 0
              ? "Aucun fichier sélectionné"
              : `${images.length} fichier(s) sélectionné(s)`}
          </p>
          {images.length > 0 && (
            <button
              onClick={upload}
              className="bg-[#1475cf] mx-auto font-semibold px-2  my-3 py-1 rounded-sm text-white text-md"
            >
              Enregistrer
            </button>
          )}
        </section>
      </div>

      <div className="w-full bg-[#F6F6F6] mt-6">
        <div className="mx-auto w-full p-2">
          {mediaList.map((media) => (
            <div
              key={media._id}
              className="w-full bg-white mt-3 flex items-center justify-between"
              id={media._id}
            >
              <div className="flex items-center p-2 gap-2">
                <img
                  src={`http://localhost:3030/images/${media.imageName}`}
                  className="w-[50px] rounded-md h-[50px] object-cover"
                  alt={media.imageName}
                />
                <p className="text-black">{media.imageName}</p>
              </div>
              <p className="font-bold">{media.sliderName}</p>
              <div className="flex p-3 gap-3">
                <button className="hover:text-red-600 duration-300">
                  <FaTrash onClick={() => deleteMedia(media._id)} />
                </button>
                <Link to="poppup">
                  <div className=" flex gap-3">
                    <button
                      onClick={() => {
                        setNameUploaded(media.imageName);
                        setOpenAboutPoppup(true);
                      }}
                      className="bg-[#0075FF] px-3 py-2 text-white  rounded"
                    >
                      Publier
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Medias;
