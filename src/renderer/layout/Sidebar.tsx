import SidebarIcon from 'renderer/components/SidebarIcon';
import { GiTakeMyMoney } from 'react-icons/gi';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarIcon icon={<GiTakeMyMoney size="28" />} />
    </div>
  );
};
export default Sidebar;
