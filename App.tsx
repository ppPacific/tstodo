import {useState} from 'react'
import './App.css'
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material'
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface TState { //define state here
    task: {
        name: string
        content: string
        url?: string
        with?: string
        date?: string
        type: string
    }[]
}

function App() {
    const [task, setTask] = useState<TState["task"]>([
            {
            name: 'grocery shopping',
            content: 'go BBC supermarket',
            url: 'https://picsum.photos/200/200',
            with: 'mum',
            type: 'Daily'
        }
    ])

    return (
        <div style={{'display': 'flex',  'flexDirection':"column"}}>
            {/*<div className="title">*/}
                <h1>What to do</h1>
            {/*</div>*/}
            <div className="whole">
                <div style={{'width': '45%', 'display': "inline-block"}}>
                    <TableContainer className="tablestyle">
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell align="center">Task</TableCell>
                                    <TableCell align="center">Detail</TableCell>
                                    <TableCell align="center">With</TableCell>
                                    <TableCell align="center">Type</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {task.length ?
                                    <List tasks={task}/> :
                                    null
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <div style={{'width': '45%', 'display': "inline-block"}}>
                <AddToList task={task} setTask={setTask}/>
                </div>
            </div>

        </div>
    )
}

export default App
