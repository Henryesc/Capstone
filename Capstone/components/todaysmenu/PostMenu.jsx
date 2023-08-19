import { useState } from "react";
import { styled } from "styled-components";
import { IoAdd } from "react-icons/io5";
import Title from "../title/Title";
import "../../src/App.css";

const PostMenu = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [items, setItems] = useState([
    { id: 1, value: "" },
    { id: 2, value: "" },
    { id: 3, value: "" },
    { id: 4, value: "" },
    { id: 5, value: "" },
    { id: 6, value: "" },
    { id: 7, value: "" },
    { id: 8, value: "" },
    { id: 9, value: "" },
    { id: 10, value: "" },
    { id: 11, value: "" },
    { id: 12, value: "" },
  ]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleInputChange = (event, index) => {
    const newInputsValues = [...items];
    newInputsValues[index].value = event.target.value;
    setItems(newInputsValues);
  };

  const handleAddInput = () => {
    const newItems = [...items];
    const prevId = newItems.pop().id;
    setItems((prevItemValues) => [
      ...prevItemValues,
      { id: prevId + 1, value: "" },
    ]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("image", selectedFile);

      items.forEach((input) => {
        if (input.value === "") return;
        formData.append(`input_${input.id}`, input.value);
      });

      try {
        const options = {
          method: "POST",
          body: formData,
        };
        const response = await fetch("http://localhost:8080/upload", options);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setSelectedFile(null);
          setItems([
            { id: 1, value: "" },
            { id: 2, value: "" },
            { id: 3, value: "" },
            { id: 4, value: "" },
            { id: 5, value: "" },
            { id: 6, value: "" },
            { id: 7, value: "" },
            { id: 8, value: "" },
            { id: 9, value: "" },
            { id: 10, value: "" },
            { id: 11, value: "" },
            { id: 12, value: "" },
          ]);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  const renderLabel = (index) => {
    if (index === 0) return "Header";
    if (index === 1) return "Date";
    return `Food item ${index - 1}`;
  };

  const inputClass = (index) => {
    if (index === 0) return "full-width";
    if (index === 1) return "half-width";
    return "strict-width";
  };

  const inputs =
    items &&
    items.length &&
    items.map((input, index) => {
      return (
        <InputContainer className={inputClass(index)} key={input.id}>
          <Label>
            {renderLabel(index)}
            <Input
              required
              type="text"
              value={input.value}
              onChange={(e) => handleInputChange(e, index)}
            ></Input>
          </Label>
        </InputContainer>
      );
    });

  return (
    <BackGroundContainer>
      <FormContainer>
        <Title
          info={"Twitter post"}
          title={"Daily Tweet"}
          subtitle={"Please fill out all the information below"}
        />
        <Wrapper>{inputs}</Wrapper>
        <Button type="button" onClick={handleAddInput}>
          <IoAdd />
        </Button>
        <FileInput
          required
          accept="image/jpeg, image/png"
          type="file"
          onChange={handleFileChange}
        />
        <SendTweet type="submit" onClick={handleUpload}>
          Send Tweet
        </SendTweet>
      </FormContainer>
    </BackGroundContainer>
  );
};
export default PostMenu;

const BackGroundContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Caviar Dreams Bold";
`;

const FormContainer = styled.form`
  width: 90%;
  height: 100%;
  max-width: 1000px;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 12px;
`;

const InputContainer = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 6px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .full-width {
    width: 100%;
  }
  .half-width {
    width: 50%;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 34px;
  border-radius: 8px;
  border: 1px solid grey;
  padding: 10px;
  -webkit-box-shadow: 5px 6px 6px -6px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 5px 6px 6px -6px rgba(0, 0, 0, 0.2);
  box-shadow: 5px 6px 6px -6px rgba(0, 0, 0, 0.2);
  &:focus {
    border-color: #084cdf;
    outline: none;
  }
`;

const FileInput = styled.input.attrs({
  type: "file",
})`
  &::file-selector-button {
    margin-right: 20px;
    border: none;
    background: #084cdf;
    padding: 10px 20px;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    transition: background 0.2s ease-in-out;
    font-family: "Caviar Dreams Bold";
  }

  &::file-selector-button:hover {
    background: #0d45a5;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: none;
  cursor: pointer;
  font-size: 25px;
  font-family: "Caviar Dreams Bold";
  margin: 0 auto;
  background: #084cdf;
  color: #fff;
  -webkit-box-shadow: 5px 6px 62px -6px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 5px 6px 62px -6px rgba(0, 0, 0, 0.3);
  box-shadow: 5px 6px 62px -6px rgba(0, 0, 0, 0.3);
  &:hover {
    background: #0d45a5;
    transform: translateY(-2px);
    transition: transform 0.2s ease-in-out;
  }
`;

const SendTweet = styled(Button)`
  width: 200px;
  height: 40px;
  border-radius: 10px;
`;
