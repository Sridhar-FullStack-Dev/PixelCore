import "../index.css";
import Link from "next/link";
import { FaBriefcase } from "react-icons/fa";

export default function WeareHiring() {
  return (
    <div
      className="we-are-hiring hover-1 bg-black sm:h-[20vh] md:h-[30vh]"
    >
      <Link href={"#contacts"}>
        <div className="text-white flex font-roboto justify-center items-center sm:text-3xl md:text-4xl">
          <FaBriefcase />
          <h1 className=" pl-4">We Are Hiring</h1>
        </div>
      </Link>
    </div>
  );
}
