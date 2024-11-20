import { DataGrid } from '@mui/x-data-grid';

function App(){
const columns = [
    { field: 'id', headerName: 'id', width: 200},
    { field: 'name', headerName: 'name', width: 200},
];

const row = [
    { id: "001" ,name: "あいだ"},
    { id: "002" ,name: "いのうえ"},
    { id: "003" ,name: "えのもと"},
];
    return (
        <>
        <DataGrid
            rows={row}
            columns={columns}
            sx={{height:"800px",fontSize:12,border:"none"}}
        />
        </>
    )
}

export default App;
