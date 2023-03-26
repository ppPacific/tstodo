import React, {useState} from "react";
import {MenuItem, TextField} from "@mui/material";
import { TState as Props } from "../App";

const types = [
    {
        value: 'Daily',
        label: 'Daily',
    },
    {
        value: 'Outdoor leisure',
        label: 'Outdoor leisure',
    },
    {
        value: 'Indoor leisure',
        label: 'Indoor leisure',
    },
    {
        value: 'Work Related',
        label: 'Work Related',
    },
    {
        value: 'Hobby',
        label: 'Hobby',
    },
    {
        value: 'Metime',
        label: 'Metime',
    },
];
interface TProps {
    setTask: React.Dispatch<React.SetStateAction<Props["task"]>>
    task: Props["task"]
}
const AddToList: React.FC<TProps>=({ setTask, task})=>{

    const [input, setInput] = useState({
        name: '',
        content: '',
        url: '',
        with: '',
        type: 'Daily'
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void =>{

        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    const handleClick = ():void =>{
        if(!input.name || !input.content ) return

        setTask([
            ...task,
            {
                name: input.name,
                content: input.content,
                url: input.url,
                with: input.with,
                type: input.type
            }
        ]);

        setInput({
            name: "",
            content: "",
            url: "",
            with: "",
            type: "Daily"
        })
    }

    return(
        <div className="addtolist">
            <TextField
                required
                id="standard_task"
                label="name"
                placeholder="what to do"
                variant="filled"
                value={input.name}
                onChange={handleChange}
                name="name" //name matters!
                autoFocus
                className="add-item"/>
            <TextField
                required
                id="standard-detail"
                label="detail"
                placeholder="details"
                variant="filled"
                value={input.content}
                onChange={handleChange}
                name="content"
                className="add-item"/>
            <TextField
                id="standard-url"
                label="url"
                placeholder="image"
                variant="filled"
                value={input.url}
                onChange={handleChange}
                name="url"
                className="add-item"/>
            <TextField
                id="standard-with"
                label="with"
                placeholder="with whom"
                variant="filled"
                value={input.with}
                onChange={handleChange}
                name="with"
                className="add-item"/>
            <TextField
                required
                id="outlined-select-currency"
                select
                label="Select-type"
                defaultValue="Daily"
                value={input.type}
                onChange={handleChange}
                name="type"
                helperText="Please select the type"
            >
                {types.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <button
            onClick={handleClick}>
                Add To List
            </button>
        </div>
    )
}
export default AddToList

// export default function useForm(defaultState: object)
