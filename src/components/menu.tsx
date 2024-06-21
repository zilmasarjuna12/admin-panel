import Link from "next/link"

interface MenuItem {
  key: string;
  label: string;
  href?: string;
  children?: MenuItem[];
}

interface MenuProps {
  menus: MenuItem[]
}

const Menu: React.FC<MenuProps> = ({
  menus,
}) => {
  return (
    <ul className="mt-6 space-y-1">
      {
        menus.map(item => {
          if (item?.children) {
            return (
              <li key={item.key}>
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary
                    className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-white hover:bg-gray-100 hover:text-gray-700"
                  >
                    <span className="text-sm font-medium"> {item.label} </span>
        
                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>
        
                  <ul className="ml-2">
                    {
                      item.children.map(subitem => {
                        return (
                          <li key={subitem.key}>
                            <Link
                              href={item.href || ""}
                              className="block rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark"
                            >
                              {
                                subitem.label
                              }
                            </Link>
                          </li>
                        )
                      })
                    }
                    
                  </ul>
                </details>
              </li>
            )
          }

          return (
            <li
              key={item.key}
            >
              <Link
                href={item.href || ""}
                className="block rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark"
              >
                {
                  item.label
                }
              </Link>
              
            </li>
          )
        })
      }
    </ul>
  )
}

// const Menu: React.FC<MenuProps> = ({
//   menus,
// }) => {
//   return (
//     <ul className="mt-6 space-y-1">
//       <li>
//         <a
//           href="#"
//           className="block rounded-lg px-4 py-2 text-sm font-medium text-white"
//         >
//           Dashboard
//         </a>
//       </li>

//       <li>
//         <a
//           href="#"
//           className="block rounded-lg px-4 py-2 text-sm font-medium text-white"
//         >
//           User Role
//         </a>
//       </li>

//       <li>
        // <details className="group [&_summary::-webkit-details-marker]:hidden">
        //   <summary
        //     className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-white hover:bg-gray-100 hover:text-gray-700"
        //   >
        //     <span className="text-sm font-medium"> Master </span>

        //     <span className="shrink-0 transition duration-300 group-open:-rotate-180">
        //       <svg
        //         xmlns="http://www.w3.org/2000/svg"
        //         className="h-5 w-5"
        //         viewBox="0 0 20 20"
        //         fill="currentColor"
        //       >
        //         <path
        //           fillRule="evenodd"
        //           d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        //           clipRule="evenodd"
        //         />
        //       </svg>
        //     </span>
        //   </summary>

        //   <ul className="mt-2 space-y-1 px-4">
        //     <li>
        //       <details className="group [&_summary::-webkit-details-marker]:hidden">
        //         <summary
        //           className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-white hover:bg-gray-100 hover:text-gray-700"
        //         >
        //           <span className="text-sm font-medium"> Masters </span>

        //           <span className="shrink-0 transition duration-300 group-open:-rotate-180">
        //             <svg
        //               xmlns="http://www.w3.org/2000/svg"
        //               className="h-5 w-5"
        //               viewBox="0 0 20 20"
        //               fill="currentColor"
        //             >
        //               <path
        //                 fillRule="evenodd"
        //                 d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        //                 clipRule="evenodd"
        //               />
        //             </svg>
        //           </span>
        //         </summary>

        //         <ul className="mt-2 space-y-1 px-4">
        //           <li>
        //             <a
        //               href="#"
        //               className="block rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-gray-100 hover:text-gray-700"
        //             >
        //               Data Masjid
        //             </a>
        //           </li>

        //           <li>
        //             <a
        //               href="#"
        //               className="block rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-gray-100 hover:text-gray-700"
        //             >
        //               Data Relawan
        //             </a>
        //           </li>

        //           <li>
        //             <a
        //               href="#"
        //               className="block rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-gray-100 hover:text-gray-700"
        //             >
        //               Data Managerial
        //             </a>
        //           </li>

        //           <li>
        //             <a
        //               href="#"
        //               className="block rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-gray-100 hover:text-gray-700"
        //             >
        //               Apps Koperasi
        //             </a>
        //           </li>
        //         </ul>
        //       </details>
        //     </li>

        //     <li>
        //       <a
        //         href="#"
        //         className="block rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-gray-100 hover:text-gray-700"
        //       >
        //         Data Relawan
        //       </a>
        //     </li>

        //     <li>
        //       <a
        //         href="#"
        //         className="block rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-gray-100 hover:text-gray-700"
        //       >
        //         Data Managerial
        //       </a>
        //     </li>

        //     <li>
        //       <a
        //         href="#"
        //         className="block rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-gray-100 hover:text-gray-700"
        //       >
        //         Apps Koperasi
        //       </a>
        //     </li>
        //   </ul>
        // </details>
//       </li>

//       <li>
//         <details className="group [&_summary::-webkit-details-marker]:hidden">
//           <summary
//             className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-white hover:bg-gray-100 hover:text-gray-700"
//           >
//             <span className="text-sm font-medium"> Simpanan </span>

//             <span className="shrink-0 transition duration-300 group-open:-rotate-180">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </span>
//           </summary>

//           <ul className="mt-2 space-y-1 px-4">
//             <li>
//               <a
//                 href="#"
//                 className="block rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-gray-100 hover:text-gray-700"
//               >
//                 Simpanan Pokok
//               </a>
//             </li>

//             <li>
//               <a
//                 href="#"
//                 className="block rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-gray-100 hover:text-gray-700"
//               >
//                 Simpanan Wajib
//               </a>
//             </li>

//             <li>
//               <a
//                 href="#"
//                 className="block rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-gray-100 hover:text-gray-700"
//               >
//                 Simpanan Sukarela
//               </a>
//             </li>

//             <li>
//               <a
//                 href="#"
//                 className="block rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-gray-100 hover:text-gray-700"
//               >
//                 Simpanan Pokok Khusus
//               </a>
//             </li>
//           </ul>
//         </details>
//       </li>
//     </ul>
//   )
// }

export default Menu