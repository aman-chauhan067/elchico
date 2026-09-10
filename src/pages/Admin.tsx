import React, { useState } from 'react';
import styles from './Admin.module.css';
import { 
  LayoutDashboard, 
  Image as ImageIcon, 
  Utensils, 
  Settings, 
  LogOut,
  Upload,
  Edit2,
  Trash2,
  Plus
} from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

export const Admin: React.FC = () => {
  const { galleryItems, menuDatabase, siteImages, updateGalleryItem, updateMenuItemPrice, updateSiteImage } = useAdmin();
  const [activeTab, setActiveTab] = useState('gallery');

  // Helper for quick image uploads using prompt for mockup
  const handleEditGallery = (id: string, current: string) => {
    const url = prompt('Enter new image URL:', current);
    if (url) updateGalleryItem(id, url);
  };

  const handleEditMenu = (menuId: string, catIdx: number, itemIdx: number, current: number) => {
    const price = prompt('Enter new price (₹):', current.toString());
    if (price && !isNaN(Number(price))) {
      updateMenuItemPrice(menuId, catIdx, itemIdx, Number(price));
    }
  };

  const handleEditSiteImage = (key: string, current: string) => {
    const url = prompt(`Enter new image URL for ${key}:`, current);
    if (url) updateSiteImage(key, url);
  };

  return (
    <div className={styles.adminLayout}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h2>EL CHICO</h2>
          <span className={styles.badge}>Admin Panel</span>
        </div>
        
        <nav className={styles.sidebarNav}>
          <button 
            className={`${styles.navItem} ${activeTab === 'dashboard' ? styles.active : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <LayoutDashboard size={20} />
            Dashboard
          </button>
          <button 
            className={`${styles.navItem} ${activeTab === 'gallery' ? styles.active : ''}`}
            onClick={() => setActiveTab('gallery')}
          >
            <ImageIcon size={20} />
            Gallery Manager
          </button>
          <button 
            className={`${styles.navItem} ${activeTab === 'menu' ? styles.active : ''}`}
            onClick={() => setActiveTab('menu')}
          >
            <Utensils size={20} />
            Menu Editor
          </button>
          <button 
            className={`${styles.navItem} ${activeTab === 'settings' ? styles.active : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <Settings size={20} />
            Settings
          </button>
        </nav>

        <div className={styles.sidebarFooter}>
          <button className={styles.navItem}>
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.mainContent}>
        
        <header className={styles.topbar}>
          <h1>
            {activeTab === 'gallery' && 'Gallery Manager'}
            {activeTab === 'menu' && 'Menu Editor'}
            {activeTab === 'dashboard' && 'Dashboard Overview'}
            {activeTab === 'settings' && 'System Settings'}
          </h1>
          <div className={styles.userProfile}>
            <div className={styles.avatar}>A</div>
            <span>Admin User</span>
          </div>
        </header>

        <div className={styles.contentArea}>
          
          {/* GALLERY TAB MOCKUP */}
          {activeTab === 'gallery' && (
            <div className={styles.panel}>
              <div className={styles.panelHeader}>
                <h3>Uploaded Photos</h3>
                <button className={styles.primaryButton}>
                  <Upload size={16} />
                  Upload New Photo
                </button>
              </div>
              <div className={styles.photoGrid}>
                {galleryItems.filter(i => i.type === 'image').map((item) => (
                  <div key={item.id} className={styles.photoCard}>
                    <div className={styles.photoPlaceholder} style={{ backgroundImage: `url(${item.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                      {!item.src && 'No Image'}
                    </div>
                    <div className={styles.photoActions}>
                      <button className={styles.iconButton} onClick={() => handleEditGallery(item.id, item.src || '')}><Edit2 size={16} /></button>
                      <button className={styles.iconButtonDanger}><Trash2 size={16} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SITE IMAGES TAB MOCKUP */}
          {activeTab === 'settings' && (
            <div className={styles.panel}>
              <div className={styles.panelHeader}>
                <h3>Global Website Images</h3>
              </div>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Location/Key</th>
                    <th>Preview</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(siteImages).map(([key, src]) => (
                    <tr key={key}>
                      <td style={{ fontWeight: '500' }}>{key}</td>
                      <td>
                        <img src={src} alt={key} style={{ height: '40px', borderRadius: '4px' }} />
                      </td>
                      <td>
                        <button className={styles.textButton} onClick={() => handleEditSiteImage(key, src)}>Change Image</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* MENU TAB MOCKUP */}
          {activeTab === 'menu' && (
            <div className={styles.panel}>
              <div className={styles.panelHeader}>
                <h3>Active Menu Items</h3>
                <button className={styles.primaryButton}>
                  <Plus size={16} />
                  Add Item
                </button>
              </div>
              <div style={{ maxHeight: '600px', overflowY: 'auto' }}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Item Name</th>
                      <th>Category (Brand)</th>
                      <th>Price (₹)</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {menuDatabase.map(menu => 
                      menu.categories.map((cat, catIdx) => 
                        cat.items.map((item, itemIdx) => (
                          <tr key={`${menu.menuId}-${catIdx}-${itemIdx}`}>
                            <td>{item.name}</td>
                            <td>{cat.name} <span style={{fontSize: '0.8em', color: '#6b7280'}}>({menu.title})</span></td>
                            <td>{item.price !== undefined ? `₹${item.price}` : 'N/A'}</td>
                            <td>
                              <button 
                                className={styles.textButton} 
                                onClick={() => handleEditMenu(menu.menuId, catIdx, itemIdx, item.price || 0)}
                              >
                                Edit Price
                              </button>
                            </td>
                          </tr>
                        ))
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* DASHBOARD TAB MOCKUP */}
          {activeTab === 'dashboard' && (
            <div className={styles.dashboardGrid}>
              <div className={styles.statBox}>
                <h4>Total Menu Items</h4>
                <p>124</p>
              </div>
              <div className={styles.statBox}>
                <h4>Gallery Photos</h4>
                <p>42</p>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};
