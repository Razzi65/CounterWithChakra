import { useState } from "react"


// type Studenttype = {
//     Name: string,
//     RollNo: Number,
//     studentClass: string,
//     Batch: Number
// }



// const Students = () => {

//     const Lists: Studenttype[] = [{
//         Name: "Rizwan",
//         RollNo: 2342,
//         studentClass: "MAD",
//         Batch: 1
//     },
//     {
//         Name: "Rizwan",
//         RollNo: 2342,
//         studentClass: "MAD",
//         Batch: 1
//     }

//     ]

//     const newlist:Studenttype[]=[]
//     const [newlisting,setnew] = useState<Studenttype[]>([{
//         Name: "Rizwan",
//         RollNo: 2342,
//         studentClass: "MAD",
//         Batch: 1
//     },
//     {
//         Name: "Rizwan2",
//         RollNo: 2342,
//         studentClass: "MAD1",
//         Batch: 1
//     }

//     ])


//     return (


//         <div>
//             <h1> Students List</h1>
//             <table>
//                 <tr><th> Name </th>
//                     <th> RollNo </th>
//                     <th> studentClass </th>
//                     <th> Batch </th>
//                 </tr>

               

//                 <tr>
//                     {Lists.map((index) => {
//                         return ( 
                           
//                             <tr>
//                                 <td> {index.Name} </td>
//                                 <td> {index.RollNo} </td>
//                                 <td> {index.studentClass} </td>
//                                 <td> {index.Batch} </td>

//                             </tr>
//                         )
//                     }
//                     )
//                     }
//                 </tr>

//             </table>

//             <button> Click to add </button>


//         </div>
//     )
// }



// export default Students