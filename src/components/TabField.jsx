import TabButton from "./TabButton";
import styles from "../styles/tabField/tabField.module.css";
import { useState } from "react";

const TabField = () => {
  const [activeTab, setActiveTab] = useState("users");
  const tabs = [
    { label: "Users", path: "/content/users" },
    { label: "Posts", path: "/content/posts" },
    { label: "Comments", path: "/content/comments" },
  ];

  return (
    <>
      <div className={styles.tabsField}>
        {tabs.map((tab, index) => (
          <TabButton
            onClick={() => setActiveTab(tab.label)}
            isActive={activeTab === tab.label}
            styles={styles}
            label={tab.label}
            path={tab.path}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default TabField;
