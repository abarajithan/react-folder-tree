import React from "react";
import "./style.css";
import { data } from "./metadata";

const Folder = ({ name, children }) => {
  let [isOpen, setIsOpen] = React.useState(false);

  const openFolder = e => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const getStyle = isOpen => {
    return {
      marginLeft: "10px",
      overflow: "hidden",
      height: isOpen ? "auto" : "0"
    };
  };

  return (
    <div className="black-text" onClick={e => openFolder(e)}>
      {name}
      <div style={getStyle(isOpen)}>{children}</div>
    </div>
  );
};

const File = ({ name }) => {
  let [isOpen, setIsOpen] = React.useState(false);

  const openFile = () => {
    setIsOpen(!isOpen);
  };

  return <div className="black-text">{name}</div>;
};

const RenderFolderTree = ({ data }) => {
  return data.map(item => {
    if (item.type == "folder") {
      return (
        <Folder name={item.name}>
          <RenderFolderTree data={item.child} />
        </Folder>
      );
    } else {
      return <File name={item.name} />;
    }
  });
};

export default function App() {
  return <RenderFolderTree data={data} />;
}
