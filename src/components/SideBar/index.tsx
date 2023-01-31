import { Menu } from "antd";
import Router from "../../pages/App/Routes";
import items from "./helpers/getItemsMenu";
import { useNavigate } from "react-router-dom";


const SideBar = (): JSX.Element => {
    const navigate = useNavigate()
  return (
        <Menu
            onClick={({key}) => {
                if(key === 'signout') {
                    console.log('saiu')
                } else {
                    navigate(key)
                }
            }}
          items={items}>
            <Router />
          </Menu>
    );
};

export default SideBar;