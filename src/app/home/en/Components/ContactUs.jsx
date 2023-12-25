import "../index.css";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { GrAttachment } from "react-icons/gr";
import { TiTickOutline } from "react-icons/ti";
import { contactsCategory } from "@/app/Utils";

const variants = {
  clicked: { color: "#afff54", borderColor: "#afff54" },
  notClicked: { color: "#808080", borderColor: "#808080" },
};

const inputVariants = {
  clicked: { color: "white", border: "none", outline: "none" },
  notClicked: { color: "gray", border: "none", outline: "none" },
};

export default function ContactUs() {
  const [isClicked, setIsClicked] = useState(false);
  const [clickedInput, setClickedInput] = useState(null);
  const [selectedFile, setSelectedFile] = useState();
  const [Loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const sendMail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/Email", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          description,
        }),
      });

      if (response.ok) {
        console.log(await response.json());
        setSuccess(true);
      } else {
        console.log("Failed", response.status);
        setSuccess(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = (index) => {
    setIsClicked(index);
  };

  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className="sm:h-[150vh] lg:h-[90vh] xl:h-screen w-full">
      <video
        autoPlay
        muted
        playsInline
        loop
        className="absolute z-10 w-full sm:h-[150vh] lg:h-[90vh] xl:h-screen object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      <div className="relative z-20 flex sm:flex-col lg:flex-row w-full justify-between sm:gap-4 lg:gap-0 xl:gap-16 lg:p-8">
        {/* left */}
        <div className="flex flex-col justify-between items-start p-8">
          <button className="font-bold uppercase text-white sm:hidden lg:block">
            <Link href={"/"}>
              <div id="ui">Pixel</div> Core
            </Link>
          </button>

          <div className="flex sm:flex-col font-body font-bold sm:text-[1.8rem] lg:text-5xl xl:text-6xl w-[30rem] text-white">
            <div>Have a project? </div>
            <div>We would love to help.</div>
          </div>

          <div className="font-body sm:text-[12px] lg:text-sm text-white">
            <Link href={"mailto:sridhar22122002@gmail.com"}>
              sridhar22122002@gmail.com
            </Link>
          </div>
        </div>

        {/* right */}
        <div className="sm:p-8 lg:p-0">
          <div className="bg-black text-white font-display p-8 sm:w-full lg:w-[68%] xl:w-full">
            <div className="flex justify-between w-full items-center">
              <div></div>
              <div className="flex items-center justify-center font-bold font-body">
                contact
              </div>
            </div>
            <div>I'm interested in...</div>

            {/* Form Fields */}
            <div className="flex flex-col">
              <form onSubmit={sendMail}>
                {/* Categories */}
                <div className="flex sm:flex-col md:flex-row gap-4 py-4 overflow-hidden">
                  {contactsCategory.map((category, index) => (
                    <motion.div
                      variants={variants}
                      animate={isClicked === index ? "clicked" : "notClicked"}
                      onClick={() => handleClick(index)}
                      className="border-2 bg-black h-8 w-auto font-roboto flex justify-center items-center whitespace-nowrap p-2 cursor-default lg:text-[0.8rem] xl:text-base"
                      key={index}
                    >
                      {category.name}
                    </motion.div>
                  ))}
                </div>

                {/* Inputs fields */}
                <motion.div
                  className="form-row"
                  variants={inputVariants}
                  animate={clickedInput ? "clicked" : "notClicked"}
                >
                  <div className="input-data">
                    <motion.input
                      name="name"
                      type="text"
                      id="name"
                      required
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      className="bg-black w-full text-sm font-body outline-none focus:bg-transparent"
                    />
                    <div className="underline"></div>
                    <label htmlFor="name" className="font-base font-body">
                      Your name
                    </label>
                  </div>
                </motion.div>

                <motion.div
                  className="form-row"
                  variants={inputVariants}
                  animate={clickedInput ? "clicked" : "notClicked"}
                >
                  <div className="input-data">
                    <motion.input
                      className="bg-black w-full text-sm font-body outline-none focus:bg-transparent"
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                    <div className="underline"></div>
                    <label htmlFor="email" className="font-base font-body">
                      Your email
                    </label>
                  </div>
                </motion.div>

                <motion.div
                  className="form-row"
                  variants={inputVariants}
                  animate={clickedInput ? "clicked" : "notClicked"}
                >
                  <div className="input-data">
                    <motion.input
                      className="bg-black w-full text-sm font-body outline-none focus:bg-transparent"
                      name="description"
                      type="text"
                      id="description"
                      required
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                    />
                    <div className="underline"></div>
                    <label
                      htmlFor="description"
                      className="font-base font-body"
                    >
                      Tell us about your project
                    </label>
                  </div>
                </motion.div>
                {/* Attachment btn */}
                <div
                  className="flex sm:flex-col lg:flex-row"
                  title="You can choose a file by clicking this"
                >
                  <input
                    type="file"
                    id="file-upload"
                    style={{ display: "none" }}
                    onChange={handleFileUpload}
                  />

                  <button
                    className={
                      selectedFile
                        ? "text-[#afff54] bg-black border-none font-body flex items-center gap-1"
                        : "text-white bg-black border-none font-body flex items-center gap-1"
                    }
                    onClick={() =>
                      document.getElementById("file-upload").click()
                    }
                    type="button"
                  >
                    <GrAttachment />
                    <div className="whitespace-nowrap">
                      {selectedFile ? "Selected Attachment" : "Add attachment"}
                    </div>
                  </button>
                  {selectedFile && (
                    <p className="font-display text-sm flex items-center pl-8">
                      {selectedFile.name}
                    </p>
                  )}
                </div>

                {/* Send btn */}
                <button className="send-btn mt-4" type="submit">
                  <div className="svg-wrapper-1">
                    <div className="svg-wrapper">
                      {Loading ? (
                        <span className="contact-btn-loader"></span>
                      ) : success ? (
                        <TiTickOutline className="text-[#CEF34A] text-2xl"/>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="20"
                          height="20"
                        >
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                            fill="currentColor"
                            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                          ></path>
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="font-body text-base">
                    {Loading ? "Sending.." : success ? "Sent" : "Send"}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
