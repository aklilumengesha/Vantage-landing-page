import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        value: 20,
        suffix: "M+",
        label: "Transactions",
        icon: <BsBarChartFill size={28} className="text-blue-500" />,
        description: "Transactions processed securely every day, providing real-time insights."
    },
    {
        value: 5.0,
        decimals: 1,
        suffix: "",
        label: "Star Rating",
        icon: <BsFillStarFill size={28} className="text-yellow-500" />,
        description: "Star rating, consistently maintained across app stores."
    },
    {
        value: 200,
        suffix: "+",
        label: "Institutions",
        icon: <PiGlobeFill size={28} className="text-green-600" />,
        description: "Financial Institutions, seamlessly integrated, so you can manage all accounts."
    }
];