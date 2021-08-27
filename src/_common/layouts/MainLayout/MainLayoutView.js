import useStyles from "./MainLayoutStyle";
import Header from "./Header";

const MainLayoutView = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <main className={classes.main}>{children}</main>
    </>
  );
};

export default MainLayoutView;
