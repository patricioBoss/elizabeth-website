// components
import SvgIconStyle from "../../../components/SvgIconStyle";
import { FiHome } from "react-icons/fi";
import { GiWallet } from "react-icons/gi";
import { AiFillSetting } from "react-icons/ai";
import {} from "react-icons/fc";
import { BsCreditCard2Back, BsFillHddStackFill } from "react-icons/bs";
import { UserGroupIcon } from "@heroicons/react/24/solid";
import { HomeModernIcon } from "@heroicons/react/24/outline";

// ----------------------------------------------------------------------

const getIcon = (name) => (
  <SvgIconStyle src={`/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  user: getIcon("ic_user"),
  analytics: getIcon("ic_analytics"),
  dashboard: <FiHome />,
  wallet: <GiWallet />,
  settings: <AiFillSetting />,
  withdrawal: <BsCreditCard2Back />,
  portfolio: <BsFillHddStackFill />,
  affiliate: <UserGroupIcon />,
  realestate: <HomeModernIcon />,
  leaders: getIcon("rank-icon"),
};

const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    items: [
      { title: "Dashboard", path: "/dashboard/home", icon: ICONS.dashboard },
      {
        title: "Portfolios",
        path: "/dashboard/portfolio",
        icon: ICONS.portfolio,
      },
      {
        title: "Real Estate",
        path: "/dashboard/realestate",
        icon: ICONS.realestate,
      },
      {
        title: "Investments",
        path: "/dashboard/invest",
        children: [
          { title: "Investments", path: "/dashboard/invest/all" },
          { title: "Pending Invt.", path: "/dashboard/invest/pend" },
        ],
        icon: ICONS.analytics,
      },
      { title: "Wallet", path: "/dashboard/wallet", icon: ICONS.wallet },

      {
        title: "Withdrawal",
        path: "/dashboard/withdrawal",
        icon: ICONS.withdrawal,
      },
    ],
  },

  {
    subheader: "Tools",
    items: [
      {
        title: "Affiliate",
        path: "/dashboard/referral",
        children: [
          { title: "Affiliate users", path: "/dashboard/referral/list" },
          {
            title: "Affiliate commissions",
            path: "/dashboard/referral/commission",
          },
        ],
        icon: ICONS.affiliate,
      },
      {
        title: "Leaders Board",
        path: "/dashboard/leading",
        icon: ICONS.leaders,
      },
      { title: "Settings", path: "/dashboard/profile", icon: ICONS.settings },
    ],
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  // {
  //   subheader: 'management',
  //   items: [
  //     {
  //       title: 'user',
  //       path: '/dashboard/user',
  //       icon: ICONS.user,
  //       children: [
  //         { title: 'Four', path: '/dashboard/user/four' },
  //         { title: 'Five', path: '/dashboard/user/five' },
  //         { title: 'Six', path: '/dashboard/user/six' },
  //       ],
  //     },
  //   ],
  // },
];

export default sidebarConfig;
