import { Button, Drawer, Menu, Navbar } from "react-daisyui";
import { Menu as MenuIcon } from "lucide-react";
import { useEffect, useState } from "react";

export const Topbar = () => {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onWindowScroll = () => {
      setAtTop(window.pageYOffset < 30);
    };
    window.addEventListener("scroll", onWindowScroll);
    onWindowScroll();
  }, []);

  return (
    <>
      <div
        id="navbar-wrapper"
        className={`sticky top-0 z-10 border-b bg-base-100 lg:bg-opacity-95 lg:backdrop-blur-sm ${
          atTop ? "border-transparent" : "border-base-content/10"
        }`}
      >
        <div className="container">
          <Navbar className="px-0">
            <Navbar.Start className="gap-2">
              <div className="flex-none lg:hidden">
                <Drawer
                  open={drawerOpened}
                  onClickOverlay={() => setDrawerOpened(!drawerOpened)}
                  side={
                    <Menu className="min-h-full w-80 gap-2 bg-base-100 p-4 text-base-content">
                      <Menu.Item className="font-medium">
                        <a href="index.html" className="text-xl font-bold">
                          Sean Ghods
                        </a>
                      </Menu.Item>

                      <Menu.Item className="font-medium">
                        <a href="#intro">Intro</a>
                      </Menu.Item>
                      <Menu.Item className="font-medium">
                        <a href="#skills">Skills</a>
                      </Menu.Item>
                      <Menu.Item className="font-medium">
                        <a href="#projects">Projects</a>
                      </Menu.Item>
                      <Menu.Item className="font-medium">
                        <a href="#resume">Resume</a>
                      </Menu.Item>
                      <Menu.Item className="font-medium">
                        <a href="#contact">contact</a>
                      </Menu.Item>
                    </Menu>
                  }
                >
                  <Button
                    shape="square"
                    color="ghost"
                    onClick={() => setDrawerOpened(true)}
                  >
                    <MenuIcon className="inline-block text-xl" />
                  </Button>
                </Drawer>
              </div>
            </Navbar.Start>

            <Navbar.Center className="hidden lg:flex">
              <Menu horizontal size="sm" className="gap-2 px-1">
                <Menu.Item className="font-medium">
                  <a href="#intro">Intro</a>
                </Menu.Item>
                <Menu.Item className="font-medium">
                  <a href="#skills">Skills</a>
                </Menu.Item>
                <Menu.Item className="font-medium">
                  <a href="#projects">Projects</a>
                </Menu.Item>
                <Menu.Item className="font-medium">
                  <a href="#resume">Resume</a>
                </Menu.Item>
                <Menu.Item className="font-medium">
                  <a href="#contact">Contact</a>
                </Menu.Item>
              </Menu>
            </Navbar.Center>

            <Navbar.End />
          </Navbar>
        </div>
      </div>
    </>
  );
};
