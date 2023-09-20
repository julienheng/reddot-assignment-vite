
import { BsArrowLeftCircle } from "react-icons/bs";
import classes from "../components/sidebar.module.css";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function SideBar({ open, setOpen }: Props) {
  return (
    <div className={`${classes.sidebar} ${open ? classes.open : classes.closed}`}>
      <BsArrowLeftCircle
        className={`${classes.arrow} ${open && classes.rotate}`}
        onClick={() => setOpen(!open)}
      />
    </div>
  );
}
