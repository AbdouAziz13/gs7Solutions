import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Toast } from "primereact/toast";
import { Editor } from "@tinymce/tinymce-react";
import { useContext } from "react";
import { publicationContext } from "../../../context/CreatePublicationContext";

const Updatepubliction = () => {
  const navigate = useNavigate();
  const editorRef = useRef(null);
  // toast
  const toast = useRef(null);
  const show = () => {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Publication modifiée",
      life: 20000,
    });

    // Delay the navigation by 20000 milliseconds (20 seconds)
    setTimeout(() => {
      Navigate("/auth/admin-section/publications/");
    }, 1000);
  };
  // id publication
  const { publicationUnikId } = useContext(publicationContext);

  const [unikPublictionContent, setUnikPublictionContent] = useState({});
  const [title, setTitle] = useState("");
  const [publicationBody, setPublicationBody] = useState("");
  const Navigate = useNavigate();

  //   receave publication data
  useEffect(() => {
    axios
      .get(`http://localhost:3030/publications/${publicationUnikId}`)
      .then((response) => {
        const data = response.data;
        setUnikPublictionContent(data);
        setTitle(data.title);
        setPublicationBody(data.publicationBody);
      });
  }, [publicationUnikId]);

  // update publication
  const updatePublication = () => {
    const newPublication = {
      title: title,
      publicationBody: publicationBody,
    };
    axios
      .put(
        `http://localhost:3030/publications/update/${publicationUnikId}`,
        newPublication
      )
      .then((res) => {
        console.log(res.data);
      });
  };

  // session
  useEffect(() => {
    axios.get("http://localhost:3030/auth").then((res) => {
      if (res.data.valid) {
      } else {
        console.log("session invalide");
        navigate("/auth/admin");
      }
    });
  }, [navigate]);
  return (
    <div>
      <Toast ref={toast} />
      <div className="w-[80%] mx-auto flex flex-col gap-3 mt-20">
        <h1 className="font-bold text-[24px] text-blue-600 text-center">
          Modifier une publication
        </h1>
        <input
          type="text"
          placeholder="Titre..."
          className="w-[800px] p-1 border-1 font-bold rounded-sm border-[#0075FF]"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* ckeditor  */}
        <div>
          <Editor
            onInit={(evt, editor) => (editorRef.current = editor)}
            value={publicationBody}
            apiKey="0ngw13b1vgm24xpzl7ji0sbemxwwkaf4crmuotr9wlm06oyk"
            init={{
              images_upload_url: "http://localhost:3030/upload/image", // IF you're running from CRA please add full route here "http://localhost:80/upload/image"
              automatic_uploads: true,

              selector: "textarea#open-source-plugins",
              plugins: "preview image link table media",
              menubar: false,
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
            onEditorChange={(content, editor) => setPublicationBody(content)}
          />
        </div>
        <button
          onClick={() => {
            show();
            updatePublication();
          }}
          className="bg-[#0075FF] text-white font-semibold px-7 py-1 my-3 w-fit mx-auto"
        >
          sauvegarder les modifications
        </button>
      </div>
    </div>
  );
};

export default Updatepubliction;
