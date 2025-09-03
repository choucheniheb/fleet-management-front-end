
const Settings = () => {
  return (
    <div>
      <h1 style={{ marginBottom: '30px', color: '#333' }}>Settings</h1>
      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h2 style={{ marginBottom: '20px', color: '#555' }}>Profile Settings</h2>
        <form>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', color: '#777' }}>Name</label>
            <input type="text" defaultValue="John Doe" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', color: '#777' }}>Email</label>
            <input type="email" defaultValue="john.doe@example.com" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
          <button type="submit" style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#337ab7', color: '#fff', cursor: 'pointer' }}>Save</button>
        </form>
      </div>
    </div>
  );
};

export default Settings;

