import React, { useState } from "react";
import {useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
// import {  Table } from "semantic-ui-react";
const columns = [
    { id: 'user_ID', label: 'User\u00a0ID', minWidth: 170 },
    { id: 'Name', label: 'Name', minWidth: 100 },
    {
      id: 'address',
      label: 'Address',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'mobile_number',
      label: 'Mobile Number',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
  ];
const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 440,
    },
  });
  
 
    
    const MyProfile = (props) => {
        const [apiResponse, setapiResponse] = useState([]);
        props.setisLogin(true);
        console.log(props.userid);
        if(props.userid!=0)
        {
          localStorage.setItem("id",props.userid);
        }
        useEffect(() => {
         
          var userkiid=localStorage.getItem("id");
          fetch("http://localhost:9000/profile/"+userkiid)
            .then(data => {
              return data.json();
            })
            .then(data => {
                console.log(data);
              setapiResponse(data);
            })
            .catch(err => {
              
            });
        }, [props]);
        const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };    
        return (
            
           <Paper className={classes.root}>
           <TableContainer className={classes.container}>
             <Table stickyHeader aria-label="sticky table">
               <TableHead>
                 <TableRow>
                   {columns.map((column) => (
                     <TableCell
                       key={column.id}
                       align={column.align}
                       style={{ minWidth: column.minWidth }}
                     >
                       {column.label}
                     </TableCell>
                   ))}
                 </TableRow>
               </TableHead>
               <TableBody>
                 {apiResponse.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                   return (
                     <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                       {columns.map((column) => {
                         const value = row[column.id];
                         return (
                           <TableCell key={column.id} align={column.align}>
                             {column.format && typeof value === 'number' ? column.format(value) : value}
                           </TableCell>
                         );
                       })}
                     </TableRow>
                   );
                 })}
               </TableBody>
             </Table>
           </TableContainer>
           <TablePagination
             rowsPerPageOptions={[10, 25, 100]}
             component="div"
             count={apiResponse.length}
             rowsPerPage={rowsPerPage}
             page={page}
             onChangePage={handleChangePage}
             onChangeRowsPerPage={handleChangeRowsPerPage}
           />
           
         </Paper>
        );
    
}
  
export default MyProfile;
