import React, { useState, useRef , useEffect } from "react";
import { BsJournalText } from "react-icons/bs";
import { Editor } from "@tinymce/tinymce-react";
import { FaTrash } from "react-icons/fa";
import { TbAlertSquareRoundedFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import axios from "axios"
import { publicationContext } from "../../../context/CreatePublicationContext";

const PublicationArticle = () => {
  const editorRef = useRef(null);

  const Navigate = useNavigate();

  const [showAlert, setShowAlert] = useState(false);
  const {
    handleDeletePublication,
    handleNewPublication,
    setTitle,
    publicationBody,
    setpublicationBody,
    setPublicationUnikId,
    setPublicationUrl,
    listPublications,
  } = useContext(publicationContext);

  
  // session
  useEffect(() => {
    axios.get("http://localhost:3030/auth").then((res) => {
      if (res.data.valid) {
      } else {
        console.log("session invalide");
        Navigate("/auth/admin");
      }
    });
  }, [Navigate]);

  console.log(publicationBody);

  const sortedPublications = [...listPublications].sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
  // render Section
  return (
    <div className="relative">
      <h1 className="text-2xl md:text-3xl font-bold text-center my-3 text-[#0075FF] mt-4">
        / Ajouter une publication
      </h1>
      <BsJournalText className="mx-auto border-b" size={40} />
      <div className="  p-4 w-[80%] overflow-hidden mx-auto  flex  flex-col  my-4 mt-5 gap-2">
        <div className="w-fit flex flex-col gap-2 my-4">
          <h1 className="text-[17px] font-bold">Titre de la publication:</h1>

          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="titre..."
            className=" w-[800px]  py-1  pl-2 border-1 font-bold rounded-sm border-[#0075FF]"
          />
        </div>
        <div>
          <h1 className="flex gap-5 text-[17px]">
            Url de la publication
            <TbAlertSquareRoundedFilled
              size={20}
              onMouseEnter={() => setShowAlert(true)}
              onMouseLeave={() => setShowAlert(false)}
              className="text-red-600"
            />
          </h1>

          <input
            type="text"
            onChange={(e) => {
              setPublicationUrl(e.target.value);
            }}
            className=" py-1  pl-2 rounded-sm border-1 border-[#0075FF]"
            placeholder="url de la publication..."
          />
        </div>
        {showAlert && (
          <div className="  rounded-sm absolute right-[50%] mt-[100px]  w-[200px]  bg-red-600 flex justify-center items-center text-white">
            <p className="text-sm p-2">
              éviter de mettre des espaces remplacées les plutot pr des " - " ou
              par des " _ "
            </p>
          </div>
        )}
        {/* editor */}
        <Editor
          onInit={(evt, editor) => (editorRef.current = editor)}
          apiKey="0ngw13b1vgm24xpzl7ji0sbemxwwkaf4crmuotr9wlm06oyk"
          init={{
            images_upload_url: "http://localhost:3030/upload/image", 
            automatic_uploads: true,
          

            selector: "textarea#open-source-plugins",
            plugins: "preview image link table media",
            menubar: true,
            toolbar:
              "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat | forecolor backcolor",
            tinycomments_mode: "embedded",
            tinycomments_author: "Author name",
            mergetags_list: [
              { value: "First.Name", title: "First Name" },
              { value: "Email", title: "Email" },
            ],

            height: 600,
            contextmenu: "link image table",
          }}
          onEditorChange={(content, editor) => setpublicationBody(content)}
        />

        {/* editor */}
        <button
          className=" rounded-sm bg-blue-600 text-white font-bold px-5 py-1 w-fit mx-auto"
          onClick={handleNewPublication}
        >
          enregistrer
        </button>
        <h1 className=" text-center mt-5 w-full border-b-1 border-b  text-xl font-bold my-7 text-[#0075FF]">
          Listes des publications
        </h1>
        {/* display all media and data */}
        <div className="w-full  mt-6">
          <div className=" mx-auto flex flex-col gap-7  p-2">
            {sortedPublications.map((publiaction) => {
              const formattedDate = new Date(
                publiaction.date
              ).toLocaleDateString("fr-FR");
              return (
                <div
                  key={publiaction._id}
                  className="w-full bg-white p-3 rounded-sm  shadow-md border-1 mt-3 flex items-center justify-between  "
                  id={publiaction._id}
                >
                  <div className=" flex items-center font-semibold text-red-600 p-2 gap-2">
                    <p>{formattedDate}</p>
                  </div>
                  <p className="font-bold">{publiaction.title}</p>
                  <div className=" flex p-3 gap-3 ">
                    <button className="hover:text-red-600 duration-300  ">
                      <FaTrash
                        onClick={() => {
                          handleDeletePublication(publiaction._id);
                        }}
                      />
                    </button>
                    <button
                      onClick={() => {
                        setPublicationUnikId(publiaction._id);
                        Navigate(
                          `/auth/admin-section/publications/${publiaction.publicationUrl}`
                        );
                      }}
                      className=" rounded-sm bg-[#23a162] hove:bg-whitea text-white px-3 py-1"
                    >
                      modifier
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationArticle;
