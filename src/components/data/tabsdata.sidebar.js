import {
  HomeRounded,
  FaceRounded,
  TextSnippetRounded,
  TerminalRounded,
  MessageRounded,
  ConnectWithoutContactRounded,
  CopyrightRounded,
} from "@mui/icons-material";

const tabprops = (index) => {
  return {
    id: `sidbar-tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
};

export const tabsData = () => {
  let tabs = [
    { label: "صفحه اصلی", icon: '<HomeRounded />', ...tabprops(0) },
    { label: "درباره من", icon: <FaceRounded />, ...tabprops(1) },
    { label: "روزمه من", icon: <TextSnippetRounded />, ...tabprops(2) },
    { label: "نمونه کار ها", icon: <TerminalRounded />, ...tabprops(3) },
    { label: "نظرات دانشجویان", icon: <MessageRounded />, ...tabprops(4) },
    {
      label: "ارتباط با من",
      icon: <ConnectWithoutContactRounded />,
      ...tabprops(5),
    },
  ];
  return tabs
};
