
const Header = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', backgroundColor: '#fff', borderBottom: '1px solid #e0e0e0' }}>
      <input type="text" placeholder="Search..." style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '300px' }} />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '20px', cursor: 'pointer' }}>Notifications</span>
        <span style={{ cursor: 'pointer' }}>Profile</span>
      </div>
    </div>
  );
};

export default Header;

