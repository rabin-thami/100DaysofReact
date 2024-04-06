import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import Toggle from "./Toggle/index";

export default function Star({ onChange}) {
  return (
    <Toggle onToggle={onChange}>
        <Toggle.Button>
            <Toggle.Off>
             <FaRegEye />
            </Toggle.Off>
            <Toggle.On>
            <FaRegEyeSlash />
            </Toggle.On>
        </Toggle.Button>

    </Toggle>
  )
}