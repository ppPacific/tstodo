import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import React from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

interface TProps { //define props here
    tasks:{
        name: string
        content: string
        url?:string
        with?: string
        // date?: string
        type: string
    }[]
}
const List: React.FC<TProps> = ({ tasks }) =>{

    return(
        <>
        {tasks.map( task => {
            return (
                <StyledTableRow key={task.name}>
                    <StyledTableCell component="th" scope="row">
                        <img className="img_holder" src={task.url} alt="task_photo"/>
                    </StyledTableCell>
                    <StyledTableCell align="center">{task.name}</StyledTableCell>
                    <StyledTableCell align="center">{task.content}</StyledTableCell>
                    <StyledTableCell align="center">{task.with}</StyledTableCell>
                    <StyledTableCell align="center">{task.type}</StyledTableCell>
                </StyledTableRow>
            )
            })}
        </>
    )
}
export default List