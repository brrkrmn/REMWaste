import { FaCalendar, FaCreditCard, FaLocationDot, FaShield, FaTrash, FaTruck } from "react-icons/fa6";

export const navLinks = [
  {
    step: 1,
    icon: <FaLocationDot />,
    text: "Postcode",
    path: "postcode",
    disabled: false,
  },
  {
    step: 2,
    icon: <FaTrash />,
    text: "Waste Type",
    path: "waste-type",
    disabled: false,
  },
  {
    step: 3,
    icon: <FaTruck />,
    text: "Select Skip",
    path: "select-skip",
    disabled: false,
  },
  {
    step: 4,
    icon: <FaShield />,
    text: "Permit Check",
    path: "permit-check",
    disabled: true,
  },
  {
    step: 5,
    icon: <FaCalendar />,
    text: "Choose Date",
    path: "choose-date",
    disabled: true,
  },
  {
    step: 6,
    icon: <FaCreditCard />,
    text: "Payment",
    path: "payment",
    disabled: true,
  },
];
