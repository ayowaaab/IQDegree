import { Typography } from "@mui/material";
import AccountMenu from "./AccountMenu";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between p-5">
        <img src="./Logo.svg" className="w-[128px] object-contain" />
        <div className="flex gap-5 justify-center items-center">
          <Typography sx={{ minWidth: 100,textAlign:"center" }}>Home</Typography>
          <Typography sx={{ minWidth: 100,textAlign:"center" }}>Courses</Typography>
          <Typography sx={{ minWidth: 100,textAlign:"center" }}>StudyMaterials</Typography>
          <Typography sx={{ minWidth: 100,textAlign:"center" }}>Quizzes</Typography>
          <Typography sx={{ minWidth: 100,textAlign:"center" }}>Discussion</Typography>
          <Typography sx={{ minWidth: 100,textAlign:"center" }}>Contact</Typography>
        </div>
        <AccountMenu />
      </nav>
    </>
  );
};

export default Navbar;
