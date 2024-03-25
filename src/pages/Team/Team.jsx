import { DataGrid } from '@mui/x-data-grid';
import { useTheme } from '@mui/material';
import { Box, Typography } from "@mui/material";
import { rows } from './data';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Header from '../../components/Header';
export default function Team() {
    const theme = useTheme()
    const columns= [
        { field: 'id', headerName: 'ID' , flex: 0.5,width: 33 , align: "center" , headerAlign: "center" },
        { field: 'name', headerName: 'Name', flex: 1, align: "center" , headerAlign: "center" },
        { field: 'email', headerName: 'Email', flex: 2, align: "center" , headerAlign: "center" },
        { field: 'age', headerName: 'Age', flex: 0.5, align: "center" , headerAlign: "center" },
        { field: 'phone', headerName: 'Phone', flex: 1, align: "center" , headerAlign: "center" },
        { 
            field: 'access',
            headerName: 'access', 
            flex: 1, 
            align: "center", 
            headerAlign: "center", 
            renderCell: ({row: {access}}) =>{
                return(
                    <Box sx={{
                        p: "5px", 
                        width: "99px",
                        borderRadius: "3px",
                        textAlign: "center",
                        backgroundColor: access === "Admin" ? theme.palette.primary.dark:
                            access === "Manager" ? theme.palette.secondary.main : "#3da58a"  ,
                        display: 'flex',
                        justifyContent: "space-evenly"
                        }}>
                        { access === "Admin" && <AdminPanelSettingsOutlinedIcon sx={{color: "white"}} fontSize='small' />}
                        { access === "Manager" && <SecurityOutlinedIcon sx={{color: "white"}} fontSize='small' />}
                        { access === "User" && <LockOpenOutlinedIcon sx={{color: "white"}} fontSize='small' />}
                        <Typography sx={{fontSize:"13px", color: "white"}}>{access}</Typography>
                    </Box>
                )
            }
        },
    ];
  return (
    <Box sx={{ height: 665, width: '98%', mx: "auto" }}>
        <Header title={"TEAM"} subTitle={"Managing the Team Members"} />
        <DataGrid rows={rows} columns={columns} />
    </Box>
  );
}