import "./Table.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const rows = [
    {
        id: 1143155,
        product: "Acer Nitro 5",
        img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
        customer: "John Smith",
        date: "1 March",
        amount: 785,
        method: "Cash on Delivery",
        status: "Approved",
    },
    {
        id: 2235235,
        product: "Playstation 5",
        img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
        customer: "Michael Doe",
        date: "1 March",
        amount: 900,
        method: "Online Payment",
        status: "Pending",
    },
    {
        id: 2342353,
        product: "Redragon S101",
        img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
        customer: "John Smith",
        date: "1 March",
        amount: 35,
        method: "Cash on Delivery",
        status: "Pending",
    },
    {
        id: 2357741,
        product: "Razer Blade 15",
        img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
        customer: "Jane Smith",
        date: "1 March",
        amount: 920,
        method: "Online",
        status: "Approved",
    },
    {
        id: 2342355,
        product: "ASUS ROG Strix",
        img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
        customer: "Harold Carol",
        date: "1 March",
        amount: 2000,
        method: "Online",
        status: "Pending",
    },
];

export default function tableList() {
    return (
        <>
            <div className="tableSection">
                <p className="tablePara">Latest Transactions</p>
                <TableContainer component={Paper} className="basicTable">
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="tableCell">Tracking ID</TableCell>
                                <TableCell className="tableCell">Product</TableCell>
                                <TableCell className="tableCell">Customer</TableCell>
                                <TableCell className="tableCell">Date</TableCell>
                                <TableCell className="tableCell">Amount</TableCell>
                                <TableCell className="tableCell">Payment Method</TableCell>
                                <TableCell className="tableCell">Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((rows) => (
                                <TableRow
                                    key={rows.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell className="tableCell">{rows.id}</TableCell>
                                    <TableCell className="tableCell">
                                        <div className="product">
                                            <img src={rows.img} alt="no img" />
                                            <p>{rows.product}</p>
                                        </div>
                                    </TableCell>
                                    <TableCell className="tableCell">{rows.customer}</TableCell>
                                    <TableCell className="tableCell">{rows.date}</TableCell>
                                    <TableCell className="tableCell">{rows.amount}</TableCell>
                                    <TableCell className="tableCell">{rows.method}</TableCell>
                                    <TableCell className="tableCell">
                                        <button className={`listBtn ${rows.status}`}>{rows.status}</button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    );
}
