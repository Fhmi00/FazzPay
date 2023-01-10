import React from "react";
import Header from "components/header";
import Side from "components/side";
import Footer from "components/footer";
import axiosClient from "utils/axiosServer";
import CardHistory from "components/cardHistory";
import Cookies from "next-cookies";
import Dropdown from "react-bootstrap/Dropdown";
import { useRouter } from "next/router";

const History = (props) => {
  const router = useRouter();
  return (
    <>
      <Header />
      <div className="container-fluid mt-5">
        <div className="row ms-5">
          <Side />
          <div className="col-8 shadow ms-5 ps-5 py-4">
            <div className="d-flex justify-content-between me-5">
              <span>Transaction History</span>
              <Dropdown className="mb-3" name="history">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  -- Select Filter --
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item value="Week">Week</Dropdown.Item>
                  <Dropdown.Item value="Month">Month</Dropdown.Item>
                  <Dropdown.Item value="Year">Year</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <CardHistory data={props.history} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default History;

export const getServerSideProps = async (context) => {
  console.log(context.query);
  const dataUser = Cookies(context);
  const history = await axiosClient.get(
    `/transaction/history?page=1&limit=50&filter=${
      context.query.filter ? context.query.history : ""
    }`,
    {
      headers: {
        Authorization: `Bearer ${dataUser.token}`,
      },
    }
  );
  return {
    props: {
      data: dataUser,
      history: history.data.data,
    },
  };
};

// export default function History() {
//   const [histories, setHistories] = useState([]);

//   const getAllHistory = async () => {
//     try {
//       const result = await axios.get(`https://fazzpay-rose.vercel.app/transaction/history?page=1&limit=6  &filter=MONTH`)
//       setHistories(result.data.data)
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(() => {
//     getAllHistory();
//   }, {})

//   return (
// <>
//   <Header />
//   <div className="container-fluid mt-5">
//     <div className="row ms-5">
//       <Side />
//       <div className="col-8 shadow ms-5 ps-5 py-4">
//         <div className="d-flex justify-content-between me-5">
//           <span>Transaction History</span>
//           <Dropdown>
//             <Dropdown.Toggle variant="success" id="dropdown-basic">
//               -- Select Filter --
//             </Dropdown.Toggle>

//             <Dropdown.Menu>
//               <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//               <Dropdown.Item href="#/action-2">
//                 Another action
//               </Dropdown.Item>
//               <Dropdown.Item href="#/action-3">
//                 Something else
//               </Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>
//         </div>
//         {histories.length > 0 ? (
//           histories.map((value, index) => (
//             <div className="d-flex flex-row justify-content-between align-items-center me-5 mt-4" key={index}>
//           <div className="d-flex gap-3">
//             <Image
//               src="/robert.png"
//               width={50}
//               height={50}
//               alt="rob"
//             ></Image>
//             <div className="d-flex flex-column">
//               <span>{value.firstName}</span>
//               <span>{value.noTelp}</span>
//             </div>
//           </div>
//           <span>{value.amount}</span>
//         </div>
//           ))
//         ):(
//           <div>
//             <span>You Dont Have Any Transactions</span>
//           </div>
//         ) }
//       </div>
//     </div>
//   </div>
//   <Footer />
// </>
//   );
// }
