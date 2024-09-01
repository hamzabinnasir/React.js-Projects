export const userRows = [
    {
        id: 1,
        userName: "Roxie",
        img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
        email: "1snow@gmail.com",
        age: "35",
        status: "active",
    },
    {
        id: 2,
        userName: "Jamie Lannister",
        img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
        email: "2snow@gmail.com",
        age: "42",
        status: "passive",
    },
    {
        id: 3,
        userName: "Lannister",
        img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
        email: "3snow@gmail.com",
        age: "45",
        status: "pending",
    },
    {
        id: 4,
        userName: "Stark",
        img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
        email: "4snow@gmail.com",
        age: "16",
        status: "active",
    },
    {
        id: 5,
        userName: "Targeryen",
        img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
        email: "5snow@gmail.com",
        age: "22",
        status: "passive",
    },
    {
        id: 6,
        userName: "Clifford",
        img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
        email: "1snow@gmail.com",
        age: "35",
        status: "pending",
    },
    {
        id: 7,
        userName: "Jamie Lannister",
        img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
        email: "2snow@gmail.com",
        age: "42",
        status: "active",
    },
    {
        id: 8,
        userName: "Snow",
        img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
        email: "3snow@gmail.com",
        age: "45",
        status: "passive",
    },
    {
        id: 9,
        userName: "Frances",
        img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
        email: "4snow@gmail.com",
        age: "16",
        status: "active",
    },
    {
        id: 10,
        userName: "Jamie",
        img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
        email: "5snow@gmail.com",
        age: "22",
        status: "pending",
    },
    {
        id: 11,
        userName: "Clifford",
        img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
        email: "1snow@gmail.com",
        age: "35",
        status: "pending",
    },
    {
        id: 12,
        userName: "Jamie Lannister",
        img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
        email: "2snow@gmail.com",
        age: "42",
        status: "active",
    },
]

export const userColumns = [
    {
        field: "id",
        headerName: "ID",
        renderCell : (params) =>{
            return(
                <>
                <p>{params.row.id}</p>
                </>
            )
        }
    },
    {
        field: "user",
        headerName: "User",
        width: 240,
        renderCell: (params) => {
            return (
                <>
                    <div className="userDataContainer">
                        <img src={params.row.img} alt="no img" />
                        <p>{params.row.userName}</p>
                    </div>
                </>
            )
        }
    },
    {
        field: "email",
        headerName: "Email",
        width: 240,
        renderCell: (params) => {
            return (
                <>
                    <p>{params.row.email}</p>
                </>
            )
        }
    },
    {
        field: "age",
        width : 130,
        headerName: "Age",
        renderCell: (params) => {
            return (
                <>
                    <p>{params.row.age}</p>
                </>
            )
        }
    },
    {
        field: "status",
        headerName: "Status",
        width : 240,
        renderCell: (params) => {
            return (
                <>
                    <button className={`usersBtn ${params.row.status}`}>{params.row.status}</button>
                </>
            )
        }
    }

]