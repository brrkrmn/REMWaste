import { FaCalendar, FaCreditCard, FaLocationDot, FaShield, FaTrash, FaTruck } from "react-icons/fa6";

export const navLinks = [
  {
    step: 1,
    icon: <FaLocationDot />,
    text: "Postcode",
    link: "postcode",
    disabled: false,
  },
  {
    step: 2,
    icon: <FaTrash />,
    text: "Waste Type",
    link: "waste-type",
    disabled: false,
  },
  {
    step: 3,
    icon: <FaTruck />,
    text: "Select Skip",
    link: "select-skip",
    disabled: false,
  },
  {
    step: 4,
    icon: <FaShield />,
    text: "Permit Check",
    link: "permit-check",
    disabled: true,
  },
  {
    step: 5,
    icon: <FaCalendar />,
    text: "Choose Date",
    link: "choose-date",
    disabled: true,
  },
  {
    step: 6,
    icon: <FaCreditCard />,
    text: "Payment",
    link: "payment",
    disabled: true,
  },
];
