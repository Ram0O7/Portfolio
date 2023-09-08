import React from "react";
import CustomDropdown from "./CustomDropdown";

const options = ["elegent", "furiastic", "monochrome", "energetic", "nature"];

export default function SelectTheme() {
  return <CustomDropdown options={options} />;
}
