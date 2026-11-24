import { useState } from 'react'
import './App.css'

const paths = {
  grid: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
  people: <><circle cx="9" cy="8" r="4" /><path d="M2 21v-2a7 7 0 0 1 14 0v2M16 4a4 4 0 0 1 0 8m2 3a6 6 0 0 1 4 6" /></>,
  folder: <><path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 11h18" /></>,
  chart: <><path d="M3 3v18h18M7 14l4-4 4 3 5-7" /></>,
  settings: <><circle cx="12" cy="12" r="3" /><path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.7a8 8 0 0 1-1.7 1l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.7-1l-1.7.7-1.4-2.4L7.3 15a8 8 0 0 1 0-2l-1.4-1.1 1.4-2.4 1.7.7a8 8 0 0 1 1.7-1l.3-1.8h2.8l.3 1.8a8 8 0 0 1 1.7 1l1.7-.7 1.4 2.4-1.4 1.1a8 8 0 0 1-.1 2Z" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
  bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" /></>,
  pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  link: <><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-2 2M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l2-2" /></>,
  camera: <><path d="M14 4h-4L8 7H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z" /><circle cx="12" cy="13" r="3" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  lock: <><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></>,
  more: <><circle cx="5" cy="12" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /></>,
  arrow: <path d="m9 18 6-6-6-6" />,
}

function Icon({ name, size = 18 }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>
}

const initialProfile = {
  firstName: 'Alex',
  lastName: 'Morgan',
  email: 'alex.morgan@email.com',
  role: 'Product Designer',
  location: 'San Francisco, California',
  website: 'alexmorgan.design',
  bio: 'Designing thoughtful digital experiences, one pixel at a time. Currently exploring the intersection of product, people, and the little details that make a big difference.',
}

function App() {
  const [profile, setProfile] = useState(initialProfile)
  const [saved, setSaved] = useState(false)

  function updateField(event) {
    setProfile({ ...profile, [event.target.name]: event.target.value })
    setSaved(false)
  }

  function copyProfileLink() {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${window.location.origin}/u/alexmorgan`)
    }
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <a className="brand" href="#home" aria-label="Forma home">
          <span className="brand-mark"><i /><i /><i /><i /></span><span>forma</span>
        </a>
        <button className="workspace-switcher" type="button">
          <span className="workspace-avatar">S</span>
          <span className="workspace-copy"><strong>Studio North</strong><small>Free workspace</small></span>
          <Icon name="arrow" size={15} />
        </button>
        <span className="nav-heading">WORKSPACE</span>
        <nav className="primary-nav" aria-label="Workspace navigation">
          {[['Overview', 'grid'], ['Team', 'people'], ['Projects', 'folder'], ['Calendar', 'calendar'], ['Reports', 'chart']].map(([label, icon]) => (
            <button className="nav-item" type="button" key={label}><Icon name={icon} /><span>{label}</span>{label === 'Team' && <small>8</small>}</button>
          ))}
        </nav>
        <span className="nav-heading account-heading">ACCOUNT</span>
        <nav className="primary-nav" aria-label="Account navigation">
          <button className="nav-item is-active" type="button" aria-current="page"><Icon name="people" /><span>Profile</span></button>
          <button className="nav-item" type="button"><Icon name="settings" /><span>Settings</span></button>
        </nav>
        <div className="sidebar-bottom">
          <div className="help-card"><span>✳</span><strong>Need a hand?</strong><p>Visit our help center to find answers.</p><a href="mailto:hello@forma.example">Get help <Icon name="arrow" size={13} /></a></div>
          <button className="sidebar-user" type="button"><span className="avatar avatar-small">AM</span><span><strong>Alex Morgan</strong><small>Free plan</small></span><Icon name="more" /></button>
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <div className="breadcrumbs"><span>Account</span><Icon name="arrow" size={13} /><strong>Profile</strong></div>
          <div className="topbar-actions"><button className="icon-button" aria-label="Search" type="button"><Icon name="search" /></button><button className="icon-button notification-button" aria-label="Notifications" type="button"><Icon name="bell" /><i /></button><span className="topbar-divider" /><span className="avatar avatar-top">AM</span></div>
        </header>

        <div className="page-content">
          <div className="page-heading">
            <div><span className="eyebrow">YOUR ACCOUNT</span><h1>My profile</h1><p>Manage your personal information and how others see you.</p></div>
            <button className="share-button" type="button" onClick={copyProfileLink}><Icon name="link" size={16} /><span>Share profile</span></button>
          </div>

          <section className="profile-hero" aria-label="Profile preview">
            <div className="cover-art"><span className="cover-orb orb-one" /><span className="cover-orb orb-two" /><span className="cover-grid" /><button className="cover-edit" type="button"><Icon name="camera" size={15} /> Edit cover</button></div>
            <div className="hero-details">
              <div className="avatar avatar-large">AM<span /></div>
              <div className="hero-copy"><h2>{profile.firstName || 'Alex'} {profile.lastName || 'Morgan'} <b><Icon name="check" size={11} /></b></h2><p>{profile.role || 'Product Designer'} <i>·</i> <Icon name="pin" size={13} /> {profile.location || 'San Francisco, California'}</p></div>
              <span className="profile-status"><i /> Active</span>
            </div>
          </section>

          <div className="content-grid">
            <section className="form-card">
              <div className="card-heading"><div><h2>Personal information</h2><p>Update your details and public profile.</p></div><span className="private-label"><Icon name="lock" size={13} /> Private</span></div>
              <form onSubmit={(event) => { event.preventDefault(); setSaved(true) }}>
                <div className="field-row">
                  <label className="field"><span>First name</span><input name="firstName" value={profile.firstName} onChange={updateField} autoComplete="given-name" /></label>
                  <label className="field"><span>Last name</span><input name="lastName" value={profile.lastName} onChange={updateField} autoComplete="family-name" /></label>
                </div>
                <label className="field"><span>Email address</span><div className="input-with-icon"><Icon name="mail" size={16} /><input type="email" name="email" value={profile.email} onChange={updateField} autoComplete="email" /></div><small className="field-hint">This is the email you use to sign in to Forma.</small></label>
                <label className="field"><span>Job title</span><input name="role" value={profile.role} onChange={updateField} /></label>
                <label className="field"><span>Location</span><div className="input-with-icon"><Icon name="pin" size={16} /><input name="location" value={profile.location} onChange={updateField} /></div></label>
                <label className="field"><span>Website</span><div className="input-with-icon"><Icon name="link" size={16} /><input name="website" value={profile.website} onChange={updateField} /></div></label>
                <label className="field"><span>About you <small className="optional">Optional</small></span><textarea name="bio" rows="4" maxLength="240" value={profile.bio} onChange={updateField} /><small className="field-hint character-count">{profile.bio.length}/240 characters</small></label>
                <div className="form-footer"><span role="status">{saved ? 'Your changes have been saved.' : ''}</span><button className="save-button" type="submit">{saved && <Icon name="check" size={15} />}Save changes</button></div>
              </form>
            </section>

            <aside className="right-column">
              <section className="side-card strength-card"><div className="side-card-heading"><div><h2>Profile strength</h2><p>You’re off to a great start.</p></div><span className="strength-icon"><Icon name="chart" size={17} /></span></div><div className="strength-meter"><span /></div><div className="strength-caption"><strong>Good start</strong><span>3 of 5 complete</span></div><ul className="completion-list"><li className="done"><span><Icon name="check" size={11} /></span>Add a profile photo</li><li className="done"><span><Icon name="check" size={11} /></span>Add your job title</li><li className="done"><span><Icon name="check" size={11} /></span>Write a short bio</li><li><span />Add your website</li><li><span />Connect your socials</li></ul></section>
              <section className="side-card public-card"><div className="side-card-heading"><div><h2>Public profile</h2><p>Visible to anyone with the link.</p></div><span className="toggle" aria-label="Public profile enabled"><i /></span></div><div className="public-link"><span>forma.app/u/alexmorgan</span><button type="button" aria-label="Copy profile link" onClick={copyProfileLink}><Icon name="link" size={14} /></button></div><p className="public-footnote"><i /> Your profile is public</p></section>
              <section className="tip-card"><span>✦</span><div><strong>Make it yours</strong><p>A great profile helps your team know the person behind the work.</p></div></section>
            </aside>
          </div>
          <footer className="page-footer"><span>© 2025 Forma Inc.</span><div><a href="#privacy">Privacy</a><a href="#terms">Terms</a><a href="#support">Support</a></div></footer>
        </div>
      </main>
    </div>
  )
}

export default App
