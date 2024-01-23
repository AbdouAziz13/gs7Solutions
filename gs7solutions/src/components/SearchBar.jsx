import React, { useState, useContext } from "react";
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router-dom";
import { publicationContext } from "../context/CreatePublicationContext";

const SearchBar = ({ placeholder, data, listPublications }) => {
  const navigate = useNavigate()
  const [filterData, setFilterData] = useState([]);

  const handleFilter = (e) => {
    const wordToSearch = e.target.value;
    const newFilter = listPublications.filter((value) => {
      return value.title.toLowerCase().includes(wordToSearch.toLowerCase());
    });

    if (wordToSearch === "") {
      setFilterData([]);
    } else {
      setFilterData(newFilter);
    }
  };

  const { setPublicationUnikId, publicationUnikId } =
    useContext(publicationContext);
  console.log(publicationUnikId);
  return (
    <div>
      <span className="p-input-icon-right w-[300px] border-1 rounded-sm">
        <i className="pi pi-search" />
        <InputText
          placeholder={placeholder}
          className="p-2 w-full"
          onChange={handleFilter}
        />
      </span>
      {filterData.length !== 0 && (
        <div className="  w-[300px] flex flex-col gap-[30px]  mt-[20px] p-4 shadow-md  overflow-y-auto  rounded-sm border">
          {filterData.slice(0, 5).map((value, key) => {
            return (
              <button
              className="mb-10 bg-gray-100 "
                onClick={() => {
                    setPublicationUnikId(value._id);
                    localStorage.setItem("publicationUnikId", value._id);
                    navigate(`/publications/${value.publicationUrl}`);
                  }}
          
              >
                <p
                  className="hover:underline w-[100%] h-[50px] items-center flex"
                
                >
                  {value.title}
                </p>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
