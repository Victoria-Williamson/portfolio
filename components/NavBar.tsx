import {GithubFilled, LinkedinFilled} from "@ant-design/icons";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {Divider, Col, Row, Menu, Button} from "antd";

export default function NavBar() {
  return (
    <AppBar sx={{backgroundColor: "rgba(30, 6, 31, 0.85)", padding: 2}}>
      <Toolbar>
        <Row className="w-full">
          {/* Page Links */}
          <Col className="flex items-center gap-5 font-bold text-xl" span={18}>
            <text> about </text>
            <text> skills </text>
            <text> experiences </text>
          </Col>
          {/* Container for Resume + Socials */}
          <Col span={6} className="flex flex-row w-full gap-5 justify-end">
            <LinkedinFilled className="text-5xl hover:opacity-75" />
            <GithubFilled className="text-5xl hover:opacity-75" />
            <Divider type="vertical" className="bg-white h-full w-[2px]" />
            <Button className="bg-transparent text-white p-8 flex flex-row items-center justify-center gap-3 text-lg font-bold border-[2px] rounded-lg hover:brightness-75 hover:border-[#6D1A72] focus:border-[#6D1A72] focus-within:border-[#6D1A72]">
              resume
            </Button>
          </Col>
        </Row>
      </Toolbar>
    </AppBar>
  );
}
