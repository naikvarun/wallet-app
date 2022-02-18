const SidebarIcon = ({
  icon,
  tooltip,
}: {
  icon: JSX.Element;
  tooltip?: string;
}) => {
  return (
    <div className="sidebar-icon group">
      {icon}
      {tooltip && (
        <span className="sidebar-tooltip group-hover:scale-100">{tooltip}</span>
      )}
    </div>
  );
};
SidebarIcon.defaultProps = {
  tooltip: null,
};

export default SidebarIcon;
