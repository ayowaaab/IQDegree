import { Button, Link } from "@mui/material";
import AccountMenu from "./AccountMenu";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between p-5">
        <img src="./Logo.svg" className="w-[128px] object-contain" />
        <div className="flex gap-5 justify-center items-center">
          <Button>
            <Link
              color={"#e3e3e3"}
              href="#"
              underline="none"
              sx={{ minWidth: 100, textAlign: "center" }}
            >
              Home
            </Link>
          </Button>
          <Button>
            <Link
              color={"#e3e3e3"}
              href="#"
              underline="none"
              sx={{ minWidth: 100, textAlign: "center" }}
            >
              Courses
            </Link>
          </Button>
          <Button>
            <Link
              color={"#e3e3e3"}
              href="#"
              underline="none"
              sx={{ minWidth: 100, textAlign: "center" }}
            >
              StudyMaterials
            </Link>
          </Button>
          <Button>
            <Link
              color={"#e3e3e3"}
              href="#"
              underline="none"
              sx={{ minWidth: 100, textAlign: "center" }}
            >
              Quizzes
            </Link>
          </Button>
          <Button>
            <Link
              color={"#e3e3e3"}
              href="#"
              underline="none"
              sx={{ minWidth: 100, textAlign: "center" }}
            >
              Discussion
            </Link>
          </Button>
          <Button>
            <Link
              color={"#e3e3e3"}
              href="#"
              underline="none"
              sx={{ minWidth: 100, textAlign: "center" }}
            >
              Contact
            </Link>
          </Button>
        </div>
        <AccountMenu />
      </nav>
    </>
  );
};

export default Navbar;
