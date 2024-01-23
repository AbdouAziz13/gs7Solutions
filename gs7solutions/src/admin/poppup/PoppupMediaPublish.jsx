import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { TfiLayoutSlider } from "react-icons/tfi";
import { AiOutlineSend } from "react-icons/ai";
import { useContext } from "react";
import { PoppupContext } from "../../context/PoppupContext";
import { IoTrashBin } from "react-icons/io5";

import axios from "axios";

const PoppupMediaPublish = ({ openPoppup, closePoppup, fileName }) => {
  const { linkSliderMedia } = useContext(PoppupContext);
  // stat variable
  const [listOfSlider, setListOfSlider] = useState([]);
  const [openSliderPoppup, setOpenSliderPoppup] = useState(false);
  const [newSlider, setNewSlider] = useState("");
  const [publishButton, setPublishButton] = useState(false);
  const [SliderId, setSliderId] = useState("");

  const handleCreateSlider = () => {
    // create slider
    axios
      .post("http://localhost:3030/slider/create", { name: newSlider })
      .then(() => {
        console.log("Slider créé");
        // Assuming you want to refresh the list of sliders after creation
        axios
          .get("http://localhost:3030/slider/")
          .then((res) => setListOfSlider(res.data));
      })
      .catch((error) => {
        console.error("Erreur lors de la création du slider:", error);
      });
  };

  // delete publication
  const deleteSlider = (sliderId) => {
    axios.delete(`http://localhost:3030/slider/${sliderId}`).then(() => {
      console.log("slider supprimé");
      // fltrer les slider
      setListOfSlider(listOfSlider.filter((slider) => slider._id !== sliderId));
    });
  };
  const confirmDelete = (sliderId) => {
    const isConfirmed = window.confirm("Voulez-vous vraiment supprimer ce slider ?");
    if (isConfirmed) {
      deleteSlider(sliderId);
    }
  };
  //
  useEffect(() => {
    if (openPoppup) {
      axios
        .get("http://localhost:3030/slider/")
        .then((res) => setListOfSlider(res.data))
        .catch((error) => {
          console.error("Erreur lors de la récupération des sliders:", error);
        });
    }
  }, [openPoppup]);

  if (!openPoppup) return null;

  return (
    <div className=" md:pb-4   p-5  rounded-md shadow-lg flex-col flex left-9 bg-white">
      <IoClose
        className="absolute right-0 cursor-pointer mr-3 mt-2"
        onClick={() => closePoppup(false)}
      />
      <TfiLayoutSlider className="mx-auto mt-10 w-[80px] text-blue-700 rounded-md h-[60px]" />
      <h1 className="text-center mt-2 text-blue-700 p-2 md:text-2xl font-bold">
        Lier l'image ou la vidéo à une diapositive
      </h1>

      <div className="px-2">
        <select
          onChange={(e) => {
            setPublishButton(true);
            setNewSlider(e.target.value);
            setSliderId(e.target.value);
          }}
          className="border mt-2 w-full mx-auto py-2 rounded-md border-blue-700"
        >
          {listOfSlider.map((slider) => {
            return (
              <>
                <option key={slider._id} value={slider._id}>
                  {slider.name}
                </option>
              </>
            );
          })}
        </select>
      </div>
      <button
        onClick={() => {
          setPublishButton(false);
          setOpenSliderPoppup(true);
        }}
        className="md:mt-10 ml-3 bg-blue-700 text-white py-2 px-3 rounded-sm w-fit mx-auto"
      >
        Ajouter un nouveau diapositif
      </button>

      {/* button de publication */}

      {publishButton ? (
        <button
          onClick={() => {
            closePoppup(false);
            linkSliderMedia(SliderId, fileName);
          }}
          className=" flex items-center px-2 py-1 my-4 hover:bg-[#00b26f] hover:text-white rounded-sm duration-100
       gap-2 border-1 w-fit mx-auto border-[#00b26f] "
        >
          associée à la diapositive <AiOutlineSend />
        </button>
      ) : null}

      {openSliderPoppup && (
        <div className="w-fit mx-auto p-5 bg-white shadow-md flex flex-col items-center gap-3 justify-center border mt-3 py-3">
          <input
            onChange={(e) => setNewSlider(e.target.value)}
            type="text"
            placeholder="Ajouter..."
            className="w-fit mt-4 border-1 p-1 rounded-sm border-gray-600"
          />
          <div className="flex gap-3">
            <button
              onClick={() => {
                if (!listOfSlider.some((slider) => slider.name === newSlider)) {
                  handleCreateSlider();
                  setOpenSliderPoppup(false);
                } else {
                  // Handle case where the name is not unique
                  alert("cette diapositive existe déja choisir une autre");
                }
              }}
              className="bg-blue-700 text-white px-3 py-1 rounded-sm text-sm"
            >
              Créer
            </button>
            <button
              onClick={() => setOpenSliderPoppup(false)}
              className="bg-blue-700 text-white px-3 py-1 rounded-sm text-sm"
            >
              Annuler
            </button>
          </div>
        </div>
      )}
      {/* list of slider */}
      <div className="flex flex-col gap-3 my-4">
        {listOfSlider.map((slider) => {
          return (
            <div
              className="flex gap-3 bg-gray-50 w-full p-2  items-center "
              key={slider._id}
            >
              <p className="my-auto">{slider.name}</p>
              <button>
                <IoTrashBin
                  className="text-red-600"
                  onClick={() => {
                  
                     confirmDelete(slider._id)
                  }}
                />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PoppupMediaPublish;
