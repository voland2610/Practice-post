import TabButton from "./TabButton";

const TabField = (props) => {
  const { onClick } = props;
  const tabs = [
    { label: "Users", path: "/content/users" },
    { label: "Posts", path: "/content/posts" },
    { label: "Comments", path: "/content/comments" }
  ];
  
  return (
    <>
      <div>
        {tabs.map((tab, index)=>(
            <TabButton label={tab.label} path={tab.path} key={index}/>
        ))}
      </div>
    </>
  );
};

export default TabField;
