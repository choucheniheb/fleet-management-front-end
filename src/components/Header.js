
const Header = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', backgroundColor: '#f0f0f0' }}>
      <input type="text" placeholder="Search..." />
      <div>
        <span>Notifications</span>
        <span>Profile</span>
      </div>
    </div>
  );
};

export default Header;

