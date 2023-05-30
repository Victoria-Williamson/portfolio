import {GithubFilled, LinkedinFilled, MenuOutlined} from "@ant-design/icons";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {Divider, Col, Row, Button} from "antd";
import React from "react";

export default function NavBar() {
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <AppBar sx={{backgroundColor: "rgba(30, 6, 31, 0.85)", padding: 2}}>
      <>
        <Toolbar className="lg:flex hidden justify-center">
          <Row className="w-full">
            {/* Page Links */}
            <Col
              className="flex items-center gap-5 font-bold text-xl"
              span={18}
            >
              <button> About </button>
              <button> Skills </button>
              <button> Experiences </button>
            </Col>
            {/* Container for Resume + Socials */}
            <Col span={6} className="flex flex-row w-full gap-5 justify-end">
              <LinkedinFilled className="text-4xl hover:opacity-75" />
              <GithubFilled className="text-4xl hover:opacity-75" />
              <Divider type="vertical" className="bg-white h-full w-[2px]" />
              <Button className="bg-transparent text-white p-5 flex flex-row items-center justify-center gap-3 text-lg font-bold border-[2px] rounded-lg hover:brightness-75 hover:border-[#6D1A72] focus:border-[#6D1A72] focus-within:border-[#6D1A72]">
                resume
              </Button>
            </Col>
          </Row>
        </Toolbar>
        <Toolbar className="flex justify-center flex-col lg:hidden ">
          <Row className="w-full lg:hidden block">
            <Button
              className="border-none p-4 flex items-center justify-center"
              onClick={() => setShowMenu(!showMenu)}
            >
              <MenuOutlined className="text-3xl text-white" />
            </Button>
          </Row>
          {showMenu && (
            <div
              className="w-full items-center justify-center"
              onMouseLeave={() => setShowMenu(false)}
            >
              <button className={$notSelected}>About</button>
              <button className={$notSelected}>Skills</button>
              <button className={$notSelected}>Experiences</button>
            </div>
          )}
        </Toolbar>
      </>
    </AppBar>
  );
}

const $notSelected = "w-full justify-center";
