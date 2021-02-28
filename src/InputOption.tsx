import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import './InputOption.css'

interface IInputProps {
    Icon: any;
    title: string;
    color: string;
}

const InputOption = ({Icon, title, color}: IInputProps) => {
    return (
        <div className="input_option">
            <Icon style={{color}} />
            <h4>{title}</h4>
        </div>
    );
};

export default InputOption;