import TabButton from "./TabButton";
import styles from '../styles/tabField/tabField.module.css'; 

const TabField = () => {
  const tabs = [
    { label: "Users", path: "/content/users" },
    { label: "Posts", path: "/content/posts" },
    { label: "Comments", path: "/content/comments" }
  ];
  
  return (
    <>
      <div className={styles.tabsField}>
        {tabs.map((tab, index)=>(
            <TabButton styles={styles} label={tab.label} path={tab.path} key={index}/>
        ))}
      </div>
    </>
  );
};

export default TabField;
