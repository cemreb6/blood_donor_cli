import { Table, TableHead, TableBody, TableRow, TableCell, IconButton } from '@mui/material';
import { DeleteOutline as DeleteOutlineIcon, Edit as EditIcon } from '@mui/icons-material';

export default function DonorTable({ donors, onDelete, onEdit }) {
    return (
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Fullname</TableCell>
            <TableCell>Blood Type</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Town</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { donors.length>0 &&
          donors.map((donor) => (
            <TableRow key={donor.id}>
              <TableCell>{donor.fullname}</TableCell>
              <TableCell>{donor.bloodType}</TableCell>
              <TableCell>{donor.city}</TableCell>
              <TableCell>{donor.town}</TableCell>
              <TableCell>
                <IconButton onClick={() => onDelete(donor.id)}>
                  <DeleteOutlineIcon />
                </IconButton>
                <IconButton onClick={() => onEdit(donor.id)}>
                  <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }