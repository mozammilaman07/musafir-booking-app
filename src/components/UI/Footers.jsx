import React from "react";
import { NavLink } from "react-router-dom";

const Footers = () => {
  // const lists =
  // const headi = [

  //   "Hotels",
  //   "Holidays",
  //   "Visas",
  //   "Blogs",
  //   "Customer care",
  // ];
  const sections = [
    // {
    //   heading: "Airlines",
    //   lists: [
    //     "Air India",
    //     "IndiGo flights",
    //     "GoAir flights",
    //     "SpiceJet flights",
    //     "Jet Airways flights",
    //     "Vistara",
    //     "Air Arabia",
    //     "Qatar Airways",
    //   ],
    // },
    // {
    //   heading: "International flights",
    //   lists: [
    //     "Mumbai to Dubai",
    //     "IndiGo flights",
    //     "GoAir flights",
    //     "SpiceJet flights",
    //     "Jet Airways flights",
    //     "Vistara",
    //     "Air Arabia",
    //     "Qatar Airways",
    //   ],
    // },
    // {
    //   heading: "Domestic flights",
    //   lists: [
    //     "Mumbai to Chennai",
    //     "IndiGo flights",
    //     "GoAir flights",
    //     "SpiceJet flights",
    //     "Jet Airways flights",
    //     "Vistara",
    //     "Air Arabia",
    //     "Qatar Airways",
    //   ],
    // },
    {
      heading: "Airlines",
      items: [
        "Air India",
        "IndiGo flights",
        "GoAir flights",
        "SpiceJet flights",
        "Jet Airways flights",
        "Vistara",
        "Air Arabia",
        "Qatar Airways",
      ],
    },
    {
      heading: "Domestic Flights",
      items: [
        "Mumbai to Chennai",
        "Chennai to Mumbai",
        "Delhi to Mumbai",
        "Mumbai to Delhi",
        "Delhi to Goa",
        "Mumbai to Goa",
        "Bangalore to Mumbai",
        "Bangalore to Delhi",
        "Chennai to Delhi",
        "Delhi to Banglaore",
        "Mumbai to Banglaore",
        "Delhi to Pune",
        "Pune to Delhi",
        "Hyderabad to Delhi",
        "Delhi to Hyderabad",
        "Bangalore to Kolkata",
        "Ahemdabad to Mumbai",
        "Mumbai to Ahemdabad",
      ],
    },
    {
      heading: "International Flights",
      items: [
        "Mumbai-to-Dubai",
        "Mumbai to Bangkok",
        "Chennai to Dubai",
        "Delhi to Dubai",
        "Delhi to London",
        "Delhi to Sydney",
        "Delhi to Abu Dhabi",
        "Delhi to Singapore",
        "Mumbai to Singapore",
        "Mumbai to New York",
        "Delhi to Paris",
        "Delhi to Colombo",
        "Delhi to Melbourne",
      ],
    },
    {
      heading: "Hotels",
      items: [
        "Hotels in Mumbai",
        "Hotels in Goa",
        "Hotels in Delhi",
        "Hotels in Dubai",
        "Hotels in Sydney",
        "Hotels in New York",
        "Hotels in Singapore",
      ],
    },
    {
      heading: "Domestic Holidays",
      items: [
        "Goa holidays",
        "Andaman Tour Packages",
        "Kerala Tour Packages",
        "Northeast Packages",
        "Rajasthan Tour Packages",
        "Leh Ladakh Tour Packages",
        "Kodaikanal Tour Packages",
        "Karnataka Packages",
        "Himachal Tour Packages",
        "Kashmir Tour Packages",
        "Uttarakhand Tour Packages",
      ],
    },
    {
      heading: "International Holidays",
      items: [
        "Singapore tour package",
        "Dubai Packages",
        "Thailand Packages",
        "Egypt Tour Packages",
        "Malaysia Tour Packages",
        "Mauritius Tour Packages",
        "Bhutan Tour Packages",
        "Europe Tour Packages",
        "Turkey Tour Packages",
        "China Tour Packages",
        "Sri Lanka Tour Packages",
        "Australia Tour Packages",
        "Sharjah Holiday Packages",
        "Jordan Tour Packages",
        "South Korea Tour Package",
        "Nepal Tour Packages",
        "Bali Packages",
        "Maldives Packages",
        "New Zealand Tour Packages",
        "Switzerland Tour Packages",
        "Kenya Tour Packages",
        "Kenyan Safari Packages",
      ],
    },
    {
      heading: "Other Holiday Categories",
      items: [
        "Island holidays",
        "Honeymoon Ideas",
        "Honeymoon Packages",
        "Cruise Packages",
        "Weekend Getaways",
        "Family Holidays",
        "Beach Holidays",
        "Adventure Holiday Packages",
      ],
    },
    {
      heading: "Visas",
      items: [
        "Dubai Visa Online",
        "14 days Dubai Visa",
        "30 days Dubai Visa",
        "60 days Dubai Visa",
        "Dubai Transit Visa",
        "Singapore Visa",
        "Australia Visa",
        "New Zealand Visa",
        "UK Visa",
        "US Visa",
        "Vietnam Visa",
        "Malaysia Visa",
        "Sri Lanka Visa",
        "Thailand Visa",
        "Qatar Visa",
        "France Visa",
        "Turkey Visa",
        "Bahrain Visa",
        "China Visa",
        "Oman Visa",
        "Philippines Visa",
        "Canada Visa",
        "Italy Visa",
        "Schengen Visa",
        "Umrah Visa",
        "Egypt Visa",
        "Azerbaijan Visa",
        "Georgia Visa",
        "Indonesia Visa",
        "India Visa",
        "Hong Kong Visa",
        "Japan Visa",
        "Russia Visa",
        "South Africa Visa",
        "Switzerland Visa",
      ],
    },
    {
      heading: "Blogs",
      items: [
        "Musafir in Singapore",
        "Singapore in 3 Minutes",
        "Musafir's Guide to Dubai",
        "Musafir's Guide to Australia",
        "Musafir's Guide to Kerala",
        "Musafir's Guide to Malaysia",
        "Musafir's Guide to Tamil Nadu",
      ],
    },
    {
      heading: "Other",
      items: [
        "Videos",
        "Customer care",
        "Web check-in",
        "Contact us",
        "Musafir business",
        "Careers",
      ],
    },
  ];
  return (
    <div className="mx-35">
      {sections.map((section, index) => (
        <div key={index}>
          <h1 className="text-xl ">{section.heading}</h1>
          <ul className="flex flex-row flex-wrap">
            {section.items.map((item, i) => (
              <NavLink className="text-blue-400 mx-2  ">
                <li key={i}>{item}</li>
              </NavLink>
            ))}
          </ul>
        </div>
      ))}
    </div>
    // <div className="mx-35">
    //   <h1 className="text-xl ">
    //     Flight tickets, trip planning ideas & much more
    //   </h1>
    //   <div>
    //     <h3>
    //       Airlines
    //       {headings.map((heading, index) => (
    //         <h3 key={index}>{heading}</h3>
    //       ))}
    //     </h3>
    //     <ul>
    //       <NavLink className="flex flex-row">
    //         {lists.map((list, index) => (
    //           <li key={index}>{list}</li>
    //         ))}
    //       </NavLink>
    //     </ul>
    //   </div>
    // </div>
  );
};

export default Footers;
