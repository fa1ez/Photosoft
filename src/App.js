import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  styled,
  useMediaQuery,
} from "@mui/material";
import Navbar from "./Navbar";
import { FAQ, Why, heading1, subheading } from "./constants";
import img1 from "./assests/11.png";
import img2 from "./assests/2.png";
import img3 from "./assests/26.png";
import img4 from "./assests/4.png";
import img5 from "./assests/52.png";
import img11 from "./assests/11.png";
import img12 from "./assests/52.png";
import img13 from "./assests/23.png";
import img14 from "./assests/24.png";
import img15 from "./assests/25.png";
import img16 from "./assests/26.png";
import logo1 from "./assests/Item.png";
import logo2 from "./assests/Item (1).png";
import logo3 from "./assests/Item (2).png";
import logo4 from "./assests/Item (3).png";
import logo5 from "./assests/Item (4).png";
import logo6 from "./assests/Item (5).png";
import cover from "./assests/cover.png";
import right from "./assests/right.jpg";
import why from "./assests/why.png";
import DiamondIcon from "@mui/icons-material/Diamond";
import ModeIcon from "@mui/icons-material/Mode";
import pretty from "./assests/pretty.png";
import { useState } from "react";
import g1 from "./assests/g1.png";
import g2 from "./assests/g2.png";
import g3 from "./assests/g3.png";
import RemoveIcon from "@mui/icons-material/Remove";
import logo from "./assests/Logo.png";
import { SocialIcon } from "react-social-icons";
import prettybig from "./assests/prettybig.png";
import noise from "./assests/noise.png";

const AddIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="45"
    height="44"
    viewBox="0 0 45 44"
    fill="none"
  >
    <path
      d="M11.7626 22.456L22.4628 22.3626M22.4628 22.3626L33.163 22.2693M22.4628 22.3626L22.3694 11.6625M22.4628 22.3626L22.5562 33.0628"
      stroke="#96C93D"
      stroke-width="2.67514"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11.7626 22.456L22.4628 22.3626M22.4628 22.3626L33.163 22.2693M22.4628 22.3626L22.3694 11.6625M22.4628 22.3626L22.5562 33.0628"
      stroke="url(#paint0_linear_1_250)"
      stroke-width="2.67514"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1_250"
        x1="33.0696"
        y1="11.5691"
        x2="8.89864"
        y2="15.6531"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#96C93D" />
        <stop offset="1" stop-color="#00B09B" />
      </linearGradient>
    </defs>
  </svg>
);

const row1 = [img1, img2, img3, img4, img5];
const row2 = [img11, img12, img13, img14, img15, img16];
const row3 = [logo1, logo2, logo3, logo4, logo5, logo6];
const tabs = ["Photo", "Realistic", "Anime", "Cartoon", "Artistic"];

const categoryStyle = {
  width: "230px",
  height: "85px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "opacity 0.3s, transform 0.3s",
};

const selectedStyle = {
  ...categoryStyle,
  background: "linear-gradient(261deg, #96C93D 0%, #00B09B 100%)",
  borderRadius: "61px",
  transform: "scale(1.1)", // You can adjust the scaling factor or use translateX for horizontal movement
  opacity: 0.9,
};

const JoinWaitlistBtn = styled(Button)({
  marginTop: "50px",
  boxShadow: "none",
  textTransform: "none",
  width: "604.37px",
  height: "86px",
  fontSize: 30,
  padding: "3.976px 21.81px 6.087px 23px",
  borderRadius: "15px",
  lineHeight: "24px",
  background:
    "linear-gradient(261deg, #96C93D 0%, #00B09B 100%), linear-gradient(93deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%)",
  fontFamily: "Inter",
  color: "white",
});

function App() {
  const isDestop = useMediaQuery("(max-width:1500px)");
  const [category, setCategory] = useState("Realistic");
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <div
      style={{
        fontFamily: "Inter",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Navbar />

      {/* div1 */}
      <div
        style={{
          width: "80vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={heading1}>
          Generate your ideas into <i>stunning</i> visuals
        </h1>
        <h6 style={subheading}>
          Meet the new standard for modern software development.
          <br />
          Streamline issues, sprints, and product roadmaps.
        </h6>
        <input
          placeholder="Enter Your Email"
          style={{
            fontSize: "26px",
            color: "white",
            paddingLeft: "30px",
            width: "957.106px",
            height: "101.903px",
            borderRadius: "2574px",
            background: "rgba(255, 255, 255, 0.20)",
            "::placeholder": {
              color: "white",
              opacity: 1,
            },
          }}
        ></input>
        <JoinWaitlistBtn>Join The Waitlist</JoinWaitlistBtn>
      </div>

      {/* div 2 */}
      <div>
        <div
          style={{ display: "flex", justifyContent: "space-evenly", width: "100%" }}
        >
          {row1.map((src, index) => (
            <img
              src={src}
              alt={index}
              style={{
                marginLeft: index > 0 ? "-260px" : "-20px",
                width: "480px",
                height: "400px",
              }}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
            marginTop: "-120px",
          }}
        >
          {row2.map((src, index) => (
            <img
              src={src}
              alt={index}
              style={{
                marginLeft: index > 0 ? "-120px" : "-20px",
                width: "480px",
                height: "400px",
              }}
            />
          ))}
        </div>
      </div>

      {/* div 3 */}
      <div style={{ width: "100%" }}>
        <p style={{ textAlign: "center", fontSize: "24px", color: "#cfd1d5" }}>
          Features In
        </p>
        <div
          style={{
            marginLeft: "50px",
            marginRight: "50px",
            marginTop: "50px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          {row3.map((src, index) => (
            <img src={src} alt={index} style={{ height: "46.5px" }} />
          ))}
        </div>
      </div>

      {/* div 4 */}
      <div style={{ width: "90%", marginTop: "150px", color: "white" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: isDestop ? "50px" : "70px" }}>
            Why Photosoft AI
          </h1>
          <p style={{ fontSize: isDestop ? "20px" : "26px" }}>
            Meet the new standard for modern software development.
            <br />
            Streamline issues, sprints, and product roadmaps.
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {Why.map((item) => (
            <div
              style={{
                zoom: isDestop ? ".8" : "1",
                minWidth: "500px",
                borderRadius: "20px",
                background:
                  "linear-gradient(180deg, rgba(26, 25, 25, 0.51) 0.03%, rgba(24, 24, 28, 0.00) 185.98%)",
                backdropFilter: "blur(37px)",
              }}
            >
              <img
                src={item.logo}
                alt="logo"
                style={{ margin: "-30px -40px" }}
              />
              <p
                style={{ paddingLeft: "30px", margin: "0px", fontSize: "32px" }}
              >
                {item.heading}
              </p>
              <p
                style={{
                  paddingLeft: "30px",
                  width: "90%",
                  marginTop: "10px",
                  fontSize: "22px",
                }}
              >
                {item.subheading}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* div 5 */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "80px",
          flexDirection: "column",
          zoom: isDestop ? ".8" : "1",
        }}
      >
        <h1
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "70px",
            maxWidth: "70%",
          }}
        >
          Our Cutting-edge <i>features</i> Revolutionize AI Experience
        </h1>
        <img src={cover} alt="cover" style={{ transform: "rotate(0.5deg)" }} />
        <div
          style={{
            marginTop: "10px",
            width: "1577px",
            display: "flex",
            background:
              " linear-gradient(180deg, rgba(28, 28, 28, 0.67) 0.03%, rgba(24, 24, 28, 0.00) 185.98%)",
            backdropFilter: "blur(37px)",
            borderRadius: "21px",
          }}
        >
          <div style={{ width: "50%", padding: "30px" }}>
            <img
              src={why}
              alt={why}
              style={{ padding: "-50px", margin: "-50px" }}
            />
            <h1
              style={{ fontSize: "56px", color: "white", marginBottom: "0px" }}
            >
              Fully Customizable
            </h1>
            <br />
            <List>
              <ListItem style={{ width: "80%", alignItems: "flex-start" }}>
                <DiamondIcon
                  style={{
                    color: "white",
                    fontSize: "40px",
                    paddingRight: "20px",
                    paddingTop: "10px",
                  }}
                />
                <ListItemText
                  primary="Generate high-quality images"
                  secondary="A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem"
                  primaryTypographyProps={{
                    style: { fontSize: "25px", color: "white" },
                  }}
                  secondaryTypographyProps={{
                    style: { fontSize: "20px", color: "#a0a0a0" },
                  }}
                />
              </ListItem>
              <ListItem style={{ width: "80%", alignItems: "flex-start" }}>
                <ModeIcon
                  style={{
                    color: "white",
                    fontSize: "40px",
                    paddingRight: "20px",
                    paddingTop: "10px",
                  }}
                />
                <ListItemText
                  primary="Generate high-quality images"
                  secondary="A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem"
                  primaryTypographyProps={{
                    style: { fontSize: "25px", color: "white" },
                  }}
                  secondaryTypographyProps={{
                    style: { fontSize: "20px", color: "#a0a0a0" },
                  }}
                />
              </ListItem>
            </List>
          </div>
          <img
            src={right}
            alt="right"
            style={{ width: "50%", borderRadius: "15px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "1577px",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "45%",
              background:
                "linear-gradient(180deg, rgba(28, 28, 28, 0.67) 0.03%, rgba(24, 24, 28, 0.00) 185.98%)",
              borderRadius: "20px",
            }}
          >
            <img
              src={why}
              alt={why}
              style={{ padding: "-30px", margin: "-30px" }}
            />
            <span style={{ color: "white", fontSize: "33px" }}>
              Lightning Fast. Just start with an idea and see how it evolves
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "45%",
              background:
                "linear-gradient(180deg, rgba(28, 28, 28, 0.67) 0.03%, rgba(24, 24, 28, 0.00) 185.98%)",
              borderRadius: "20px",
            }}
          >
            <img
              src={why}
              alt={why}
              style={{ padding: "-30px", margin: "-30px" }}
            />
            <span style={{ color: "white", fontSize: "33px" }}>
              Lightning Fast. Just start with an idea and see how it evolves
            </span>
          </div>
        </div>
      </div>

      {/* div 6 */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "78px",
            margin: "100px auto 0px auto",
          }}
        >
          Explore Our AI tools
        </h1>
        <p style={{ color: "#80858f", fontSize: "26px", marginBottom: "50px" }}>
          Meet the new standard for modern software development.
          <br /> Streamline issues, sprints, and product roadmaps.
        </p>
        <Grid container style={{ zoom: isDestop ? ".8" : "1" }} spacing={6}>
          <Grid item>
            <div style={{ textAlign: "left" }}>
              <img src={pretty} alt="pretty woman" />
              <p
                style={{
                  color: "white",
                  fontSize: "31px",
                  marginTop: "15px",
                  marginBottom: "0px",
                }}
              >
                Text to Image
              </p>
              <p
                style={{ color: "#bababa", fontSize: "18px", marginTop: "5px" }}
              >
                Welcome back! Glad to see you, Again!
              </p>
            </div>
          </Grid>
          <Grid item>
            <div style={{ textAlign: "left" }}>
              <img src={pretty} alt="pretty woman" />
              <p
                style={{
                  color: "white",
                  fontSize: "31px",
                  marginTop: "15px",
                  marginBottom: "0px",
                }}
              >
                Text to Image
              </p>
              <p
                style={{ color: "#bababa", fontSize: "18px", marginTop: "5px" }}
              >
                Welcome back! Glad to see you, Again!
              </p>
            </div>
          </Grid>
          <Grid item>
            <div style={{ textAlign: "left" }}>
              <img src={pretty} alt="pretty woman" />
              <p
                style={{
                  color: "white",
                  fontSize: "31px",
                  marginTop: "15px",
                  marginBottom: "0px",
                }}
              >
                Text to Image
              </p>
              <p
                style={{ color: "#bababa", fontSize: "18px", marginTop: "5px" }}
              >
                Welcome back! Glad to see you, Again!
              </p>
            </div>
          </Grid>
        </Grid>
      </div>

      {/* div 7 */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "78px",
            margin: "100px auto 0px auto",
          }}
        >
          AI Images in Various Style
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "1265px",
            height: "115px",
            borderRadius: "82px",
            background: "#101010",
            border: "1.146px solid rgba(255, 255, 255, 0.10)",
            marginTop: "50px",
            marginBottom: "50px",
            zoom: isDestop ? ".8" : "1",
          }}
        >
          {tabs.map((tab, i) => (
            <div
              style={category === tab ? selectedStyle : categoryStyle}
              onClick={() => setCategory(tab)}
            >
              <span
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: "27px",
                }}
              >
                {tab}
              </span>
            </div>
          ))}
        </div>

        {category === "Realistic" ? (
          <Grid container style={{ zoom: isDestop ? ".8" : "1" }} spacing={6}>
            <Grid item>
              <div style={{ textAlign: "left" }}>
                <img
                  src={g1}
                  alt="pretty woman"
                  style={{ height: "381px", width: "507px" }}
                />
              </div>
            </Grid>
            <Grid item>
              <div style={{ textAlign: "left" }}>
                <img
                  src={g2}
                  alt="pretty woman"
                  style={{ height: "381px", width: "507px" }}
                />
              </div>
            </Grid>
            <Grid item>
              <div style={{ textAlign: "left" }}>
                <img
                  src={g3}
                  alt="pretty woman"
                  style={{ height: "381px", width: "507px" }}
                />
              </div>
            </Grid>
          </Grid>
        ) : (
          <Grid container style={{ zoom: isDestop ? ".8" : "1" }} spacing={6}>
            <Grid item>
              <div style={{ textAlign: "left" }}>
                <img
                  src={pretty}
                  alt="pretty woman"
                  style={{ height: "381px", width: "507px" }}
                />
              </div>
            </Grid>
            <Grid item>
              <div style={{ textAlign: "left" }}>
                <img
                  src={pretty}
                  alt="pretty woman"
                  style={{ height: "381px", width: "507px" }}
                />
              </div>
            </Grid>
            <Grid item>
              <div style={{ textAlign: "left" }}>
                <img
                  src={pretty}
                  alt="pretty woman"
                  style={{ height: "381px", width: "507px" }}
                />
              </div>
            </Grid>
          </Grid>
        )}
      </div>

      {/* div 8 */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "78px",
            maxWidth: "68%",
            margin: "100px auto 0px auto",
          }}
        >
          Our AI Image Generator is for <i>Everyone</i>
        </h1>
        <p
          style={{
            maxWidth: "90%",
            color: "#80858f",
            fontSize: "26px",
            marginBottom: "50px",
          }}
        >
          A picture is worth a thousand words; with AI-generated images, that
          value is multiplied by a million. Whether writing an article, building
          a webpage, or running an ad campaign, you can instantly create a
          library of creative resources to express yourself fully. With this
          technology, you can unlock the power of visual communication and
          enhance the impact of your content. 
        </p>
        <Grid
          container
          style={{ zoom: isDestop ? ".8" : "1" }}
          spacing={6}
          justifyContent={"center"}
        >
          <Grid item>
            <div
              style={{
                textAlign: "left",
                width: "498px",
                height: "338px",
                background:
                  "linear-gradient(180deg, rgba(26, 25, 25, 0.51) 0.03%, rgba(24, 24, 28, 0.00) 185.98%)",
                borderRadius: "20px",
              }}
            >
              <img
                src={why}
                alt="logo"
                style={{ padding: "-40px", margin: "-30px -40px -50px -40px" }}
              />
              <p
                style={{
                  color: "white",
                  fontSize: "33px",
                  marginTop: "15px",
                  marginBottom: "0px",
                  paddingLeft: "20px",
                }}
              >
                Content creators
              </p>
              <p
                style={{
                  paddingLeft: "20px",
                  color: "#bababa",
                  fontSize: "22px",
                  marginTop: "10px",
                }}
              >
                Create striking visual content quickly by generating images from
                the text at your fingertips.
              </p>
            </div>
          </Grid>
          <Grid item>
            <div
              style={{
                textAlign: "left",
                width: "498px",
                height: "338px",
                background:
                  "linear-gradient(180deg, rgba(26, 25, 25, 0.51) 0.03%, rgba(24, 24, 28, 0.00) 185.98%)",
                borderRadius: "20px",
              }}
            >
              <img
                src={why}
                alt="logo"
                style={{ padding: "-40px", margin: "-30px -40px -50px -40px" }}
              />
              <p
                style={{
                  color: "white",
                  fontSize: "33px",
                  marginTop: "15px",
                  marginBottom: "0px",
                  paddingLeft: "20px",
                }}
              >
                Business
              </p>
              <p
                style={{
                  paddingLeft: "20px",
                  color: "#bababa",
                  fontSize: "22px",
                  marginTop: "10px",
                }}
              >
                Differentiate yourself from competitors by using unique,
                heartfelt imagery to enhance marketing materials.
              </p>
            </div>
          </Grid>
          <Grid item>
            <div
              style={{
                textAlign: "left",
                width: "498px",
                height: "338px",
                background:
                  "linear-gradient(180deg, rgba(26, 25, 25, 0.51) 0.03%, rgba(24, 24, 28, 0.00) 185.98%)",
                borderRadius: "20px",
              }}
            >
              <img
                src={why}
                alt="logo"
                style={{ padding: "-40px", margin: "-30px -40px -50px -40px" }}
              />
              <p
                style={{
                  color: "white",
                  fontSize: "33px",
                  marginTop: "15px",
                  marginBottom: "0px",
                  paddingLeft: "20px",
                }}
              >
                Artists and Designers
              </p>
              <p
                style={{
                  paddingLeft: "20px",
                  color: "#bababa",
                  fontSize: "22px",
                  marginTop: "10px",
                }}
              >
                Inspire creativity and jumpstart your ideas with AI-generated
                images
              </p>
            </div>
          </Grid>
        </Grid>
      </div>

       {/* div 9 */}
       <div style={{display:"flex",justifyContent:"center",margin:"150px 100px",zoom: isDestop ? ".8" : "1",}}>
        <div style={{width:"53%"}}>
          <h1 style={{color:"white",fontSize:"70px",marginBottom:"10px"}}>Maximize your potential with Photosoft AI</h1>
          <p style={{color:"#b4bcd0",fontSize:"26px",marginTop:"0px",marginBottom:"40px"}}>Meet the new standard for modern software development. Streamline issues, sprints, and product roadmaps.</p>
          <div style={{display:"flex",minWidth:"1400px",overflow: "visible"}}>
            <div style={{background:"rgba(19, 23, 21, 0.67)",backdropFilter:"blur(36.97557067871094px)",borderRadius:"22px",width:"297px",height:"168px",padding:"30px",display:"flex",justifyContent:"center",flexDirection:"column"}}>
              <p style={{color:"white",fontSize:"21px",margin:"0px",padding:"0px"}}>Users Base</p>
              <p style={{color:"#fdfdfd",fontSize:"68px",margin:"0px",padding:"0px"}}>2M</p>
              <p style={{color:"rgba(255, 255, 255, 0.80)",fontSize:"18px",margin:"0px",padding:"0px"}}>Adipiscing elit, do eiusm.</p>
            </div>
            <div style={{marginLeft:"30px",background:"rgba(19, 23, 21, 0.67)",backdropFilter:"blur(36.97557067871094px)",borderRadius:"22px",width:"297px",height:"168px",padding:"30px",display:"flex",justifyContent:"center",flexDirection:"column"}}>
              <p style={{color:"white",fontSize:"21px",margin:"0px",padding:"0px"}}>Community</p>
              <p style={{color:"#fdfdfd",fontSize:"68px",margin:"0px",padding:"0px"}}>500K+</p>
              <p style={{color:"rgba(255, 255, 255, 0.80)",fontSize:"18px",margin:"0px",padding:"0px"}}>Adipiscing elit, do eiusm.</p>
            </div>
            <div style={{marginLeft:"30px",background:"rgba(19, 23, 21, 0.67)",backdropFilter:"blur(36.97557067871094px)",borderRadius:"22px",width:"297px",height:"168px",padding:"30px",display:"flex",justifyContent:"center",flexDirection:"column"}}>
              <p style={{color:"white",fontSize:"21px",margin:"0px",padding:"0px"}}>Images Generated</p>
              <p style={{color:"#fdfdfd",fontSize:"68px",margin:"0px",padding:"0px"}}>10M</p>
              <p style={{color:"rgba(255, 255, 255, 0.80)",fontSize:"18px",margin:"0px",padding:"0px"}}>Adipiscing elit, do eiusm.</p>
            </div>
          </div>
        </div>
        <img src={prettybig} alt="pretty big"  style={{width:"45%"}} />
       </div>

      {/* div 10 */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <span
          style={{
            maxWidth: "60%",
            fontSize: "64px",
            color: "white",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Oh. And if you have any questions…
        </span>
        <span
          style={{ color: "#80858f", fontSize: "26px", marginBottom: "50px" }}
        >
          …then hopefully we've got the answers right here…
        </span>

        {FAQ.map((q, index) => (
          <Accordion
            style={{
              width: "85%",
              background:
                " linear-gradient(180deg, #111 0.03%, rgba(24, 24, 28, 0.00) 185.98%)",
              color: "white",
            }}
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
          >
            <AccordionSummary
              expandIcon={
                expanded === `panel${index}` ? (
                  <RemoveIcon style={{ color: "green", fontSize: "40px" }} />
                ) : (
                  AddIcon
                )
              }
              style={{ fontWeight: 500, fontSize: "18px", lineHeight: "28px" }}
            >
              {q.heading}
            </AccordionSummary>
            <AccordionDetails
              style={{
                backgroundColor: "silver",
                fontSize: "20px",
                lineHeight: "24px",
                color: "#7a7a7a",
              }}
            >
              {q.subheading}
            </AccordionDetails>
          </Accordion>
        ))}
      </div>

      {/* footer */}
      <div
        style={{
          marginTop: "200px",
          width: "100%",
          backgroundColor: "black",
          color: "white",
          zoom: isDestop ? ".8" : "1",
          borderTop:"0.15px solid white",
        }}
      >
        <Grid
          container
          spacing={1}
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "70px",
          }}
        >
          <Grid
            item
            xs={12}
            md={3}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <div style={{ marginLeft: "100px" }}>
              <img src={logo} alt="logo" />
              <p style={{ paddingTop: "20px", color: "#d9d9d9" }}>
                Companies that can help you in developing your company for the
                future
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div>
                <p
                  style={{
                    fontSize: "22px",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Features
                </p>
                <p
                  style={{
                    fontSize: "22px",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Community
                </p>
                <p
                  style={{
                    fontSize: "22px",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Affliate
                </p>
                <p
                  style={{
                    fontSize: "22px",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  API
                </p>
                <p
                  style={{
                    fontSize: "22px",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  About
                </p>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} md={3}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginRight: "100px",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "24.67px",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Business Features
                </p>
                <p
                  style={{
                    fontSize: "22px",
                    color: "white",
                    cursor: "pointer",
                    margin: "0px",
                  }}
                >
                  Data-Based Chatbot Training
                </p>
                <p
                  style={{
                    fontSize: "22px",
                    color: "white",
                    cursor: "pointer",
                    margin: "10px 0px",
                  }}
                >
                  Model Fine-Tuning
                </p>
                <p
                  style={{
                    fontSize: "22px",
                    color: "white",
                    cursor: "pointer",
                    margin: "0px",
                  }}
                >
                  Sales & Customer Service Smart Agents
                </p>
              </div>
            </div>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={1}
          style={{
            display: "flex",
            justifyContent: "center",
            padding:"30px",
            zoom: isDestop ? ".8" : "1",
          }}
        >
          <Grid
            item
            xs={12}
            md={3}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <p style={{fontSize:"19px"}}>© 2023 Mangcoding. All rights reserved.</p>
          </Grid>
          <Grid item xs={12} md={6}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p
                style={{
                  fontSize: "22px",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Privacy policy
              </p>
              <p
                style={{
                  fontSize: "22px",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Terms of Service
              </p>
              <p
                style={{
                  fontSize: "22px",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Cookie Policy
              </p>
            </div>
          </Grid>

          <Grid
            item
            xs={12}
            md={3}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{ display: "flex" }}>
              <SocialIcon
                url="https://whatsapp.com"
                bgColor="black"
                fgColor="white"
                style={{ height: "70px", width: "50px", marginRight: "10px" }}
              />
              <SocialIcon
                url="https://linkedin.com"
                bgColor="black"
                fgColor="white"
                style={{ height: "70px", width: "50px", marginRight: "10px" }}
              />
              <SocialIcon
                url="https://twitter.com"
                bgColor="black"
                fgColor="white"
                style={{ height: "70px", width: "50px", marginRight: "10px" }}
              />
            </div>
          </Grid>
        </Grid>
        
      </div>
    </div>
  );
}

export default App;
