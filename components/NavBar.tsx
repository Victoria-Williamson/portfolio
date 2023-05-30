import {GithubFilled, LinkedinFilled, MenuOutlined} from "@ant-design/icons";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {Divider, Col, Row, Button} from "antd";
import React from "react";

export default function NavBar() {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <AppBar sx={{backgroundColor: "rgba(30, 6, 31, 0.85)"}}>
      <Toolbar className="flex  justify-center">
        <Row className="w-full py-4">
          {/* Page Links */}
          <Col
            className="flex items-center gap-5 font-bold text-xl"
            span={18}
          ></Col>
          {/* Container for Resume + Socials */}
          <Col span={6} className="flex flex-row w-full gap-5 justify-end">
            <a href="https://www.linkedin.com/in/victoria-nw/" target="_blank">
              <LinkedinFilled className="text-4xl hover:opacity-75" />
            </a>
            <a target="_blank">
              <GithubFilled
                href={"https://github.com/Victoria-Williamson"}
                className="text-4xl hover:opacity-75"
              />
            </a>

            {/* <Divider type="vertical" className="bg-white h-full w-[2px]" /> */}
            {/* <Button className="bg-transparent text-white p-5 flex flex-row items-center justify-center gap-3 text-lg font-bold border-[2px] rounded-lg hover:brightness-75 hover:border-[#6D1A72] focus:border-[#6D1A72] focus-within:border-[#6D1A72]">
              resume
            </Button> */}
          </Col>
        </Row>
      </Toolbar>
    </AppBar>
  );
}

const $notSelected = "w-full justify-center";
