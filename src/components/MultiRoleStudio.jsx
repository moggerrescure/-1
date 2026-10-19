import React, { useState, useRef, useEffect } from 'react';
import {
  Briefcase,
  Brain,
  Shield,
  Cpu,
  Activity,
  Film,
  TrendingUp,
  Compass,
  Trees,
  Sparkles,
  Plus,
  Edit3,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  RotateCcw,
  Check,
  X,
  ArrowRight,
  MessageSquare,
  Zap,
  Radio,
  Sliders,
  RefreshCw,
  Users,
  UserCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import {
  SOLO_AVATARS_DATA,
  WOMAN_AVATAR_PROFILE,
  WOMAN_PROFESSIONS,
  WOMAN_VIDEOS,
  MAN_AVATAR_PROFILE,
  MAN_PROFESSIONS,
  MAN_VIDEOS
} from '../data/multiRoleAvatar';
import { playSound } from '../utils/audioEffects';

const ICON_MAP = {
  Brain,
  Shield,
  Cpu,
  Activity,
  Film,
  TrendingUp,
  Compass,
  Trees,
  Briefcase,
  Sparkles,
  Zap
};

const SOLO_STUDIO_VERSION = 7;

export default function MultiRoleStudio({ soundEffects, showToast }) {
  // --------------------------------------------------------------------------
  // Active Avatar Selection State (Man vs Woman)
  // --------------------------------------------------------------------------
  const [activeAvatarKey, setActiveAvatarKey] = useState(() => {
    try {
      const savedVersion = localStorage.getItem('nexus_solo_avatar_version');
      const saved = localStorage.getItem('nexus_solo_avatar_active_key');
      if (savedVersion === String(SOLO_STUDIO_VERSION) && (saved === 'woman' || saved === 'man')) {
        return saved;
      }
    } catch {}
    return 'man'; // Default to man so the 3 new videos are immediately showcased
  });

  // Profiles per avatar
  const [avatarProfiles, setAvatarProfiles] = useState(() => {
    const defaults = {
      woman: WOMAN_AVATAR_PROFILE,
      man: MAN_AVATAR_PROFILE
    };
    try {
      const savedVersion = localStorage.getItem('nexus_solo_avatar_version');
      if (savedVersion === String(SOLO_STUDIO_VERSION)) {
        const savedWoman = localStorage.getItem('nexus_solo_profile_woman');
        const savedMan = localStorage.getItem('nexus_solo_profile_man');
        return {
          woman: savedWoman ? JSON.parse(savedWoman) : defaults.woman,
          man: savedMan ? JSON.parse(savedMan) : defaults.man
        };
      }
    } catch {}
    return defaults;
  });

  // Professions per avatar
  const [professionsMap, setProfessionsMap] = useState(() => {
    const defaults = {
      woman: WOMAN_PROFESSIONS,
      man: MAN_PROFESSIONS
    };
    try {
      const savedVersion = localStorage.getItem('nexus_solo_avatar_version');
      if (savedVersion === String(SOLO_STUDIO_VERSION)) {
        const savedWoman = localStorage.getItem('nexus_solo_professions_woman');
        const savedMan = localStorage.getItem('nexus_solo_professions_man');
        return {
          woman: savedWoman ? JSON.parse(savedWoman) : defaults.woman,
          man: savedMan ? JSON.parse(savedMan) : defaults.man
        };
      }
    } catch {}
    return defaults;
  });

  // Active selected profession ID per avatar
  const [activeProfessionIds, setActiveProfessionIds] = useState(() => ({
    woman: WOMAN_PROFESSIONS[0]?.id || 'neuroscience',
    man: MAN_PROFESSIONS[0]?.id || 'man-black-holes'
  }));

  // Current avatar derived state
  const currentAvatarConfig = SOLO_AVATARS_DATA[activeAvatarKey] || SOLO_AVATARS_DATA.woman;
  const avatarProfile = avatarProfiles[activeAvatarKey] || currentAvatarConfig.defaultProfile;
  const professions = professionsMap[activeAvatarKey] || currentAvatarConfig.professions;
  const currentVideos = currentAvatarConfig.videos;
  const activeProfessionId =
    activeProfessionIds[activeAvatarKey] || professions[0]?.id || currentAvatarConfig.professions[0]?.id;

  const activeProfession =
    professions.find(p => p.id === activeProfessionId) || professions[0] || currentAvatarConfig.professions[0];

  const activeVideoSrc = activeProfession?.videoSrc || avatarProfile.videoSrc;
  const activePosterSrc = activeProfession?.posterSrc || avatarProfile.posterSrc;
  const activeAvatarImg = activeProfession?.avatarImage || avatarProfile.avatarImage;

  // Video playback states
  const videoRef = useRef(null);
  const playerWrapperRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Consultation Q&A state
  const [activeQA, setActiveQA] = useState({ q: '', a: '' });
  const [showQAPanel, setShowQAPanel] = useState(false);

  // Modals
  const [isEditAvatarOpen, setIsEditAvatarOpen] = useState(false);
  const [isAddProfessionOpen, setIsAddProfessionOpen] = useState(false);
  const [avatarForm, setAvatarForm] = useState(avatarProfile);
  const [newProfForm, setNewProfForm] = useState({
    title: '',
    titleEn: '',
    department: 'Applied Sciences',
    badge: 'Senior Specialist',
    accentColor: '#38bdf8',
    icon: 'Briefcase',
    experience: '8 Years',
    quote: '',
    description: '',
    skills: '',
    tools: '',
    voiceStyle: 'Confident Tone',
    sampleQ: '',
    sampleA: ''
  });

  // Sync Dynamic Theme Colors
  useEffect(() => {
    if (activeProfession) {
      document.documentElement.style.setProperty('--avatar-accent', activeProfession.accentColor);
      document.documentElement.style.setProperty(
        '--avatar-glow',
        activeProfession.glowColor || `${activeProfession.accentColor}40`
      );
    }
  }, [activeProfession]);

  // Reset active Q&A when profession or avatar switches
  useEffect(() => {
    if (activeProfession?.qa && activeProfession.qa.length > 0) {
      setActiveQA({
        q: activeProfession.qa[0].q,
        a: activeProfession.qa[0].a
      });
    } else {
      setActiveQA({ q: '', a: '' });
    }
  }, [activeProfessionId, activeAvatarKey]);

  // Persist selections and profiles
  useEffect(() => {
    try {
      localStorage.setItem('nexus_solo_avatar_version', String(SOLO_STUDIO_VERSION));
      localStorage.setItem('nexus_solo_avatar_active_key', activeAvatarKey);
      localStorage.setItem(`nexus_solo_profile_${activeAvatarKey}`, JSON.stringify(avatarProfile));
      localStorage.setItem(`nexus_solo_professions_${activeAvatarKey}`, JSON.stringify(professions));
    } catch {}
  }, [activeAvatarKey, avatarProfile, professions]);

  // --------------------------------------------------------------------------
  // Handlers
  // --------------------------------------------------------------------------
  const handleSwitchAvatar = (targetKey) => {
    if (targetKey === activeAvatarKey) return;
    playSound('switch', soundEffects);
    setActiveAvatarKey(targetKey);
    const targetConfig = SOLO_AVATARS_DATA[targetKey];
    const targetProfile = avatarProfiles[targetKey] || targetConfig.defaultProfile;

    if (showToast) {
      showToast(
        targetKey === 'woman'
          ? 'Selected Solo Woman Avatar: Elena Valeri'
          : 'Selected Solo Man Avatar: Prof. Walter Finch'
      );
    }
    confetti({ particleCount: 35, spread: 60, origin: { y: 0.4 } });
  };

  const togglePlay = () => {
    playSound('click', soundEffects);
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    playSound('click', soundEffects);
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const target = pos * (duration || 1);
    setCurrentTime(target);
    if (videoRef.current) {
      videoRef.current.currentTime = target;
    }
  };

  const toggleFullscreen = () => {
    playSound('click', soundEffects);
    if (!playerWrapperRef.current) return;
    if (!document.fullscreenElement) {
      playerWrapperRef.current.requestFullscreen?.().catch((err) => {
        console.warn('Fullscreen request failed:', err);
      });
    } else {
      document.exitFullscreen?.();
    }
  };

  const handleSelectProfession = (prof) => {
    playSound('switch', soundEffects);
    setActiveProfessionIds(prev => ({
      ...prev,
      [activeAvatarKey]: prof.id
    }));
    if (prof.videoSrc) {
      setAvatarProfiles(prev => ({
        ...prev,
        [activeAvatarKey]: {
          ...prev[activeAvatarKey],
          videoSrc: prof.videoSrc,
          posterSrc: prof.posterSrc || prev[activeAvatarKey].posterSrc,
          avatarImage: prof.avatarImage || prev[activeAvatarKey].avatarImage
        }
      }));
    }
  };

  const handleSelectRecentVideo = (v) => {
    playSound('switch', soundEffects);
    if (v.professionId) {
      setActiveProfessionIds(prev => ({
        ...prev,
        [activeAvatarKey]: v.professionId
      }));
    }
    const matching =
      professions.find(p => p.id === v.professionId) ||
      currentAvatarConfig.professions.find(p => p.id === v.professionId);

    if (matching) {
      setAvatarProfiles(prev => ({
        ...prev,
        [activeAvatarKey]: {
          ...prev[activeAvatarKey],
          videoSrc: matching.videoSrc,
          posterSrc: matching.posterSrc,
          avatarImage: matching.avatarImage || v.avatarImg || prev[activeAvatarKey].avatarImage
        }
      }));
    } else {
      setAvatarProfiles(prev => ({
        ...prev,
        [activeAvatarKey]: {
          ...prev[activeAvatarKey],
          videoSrc: v.videoSrc,
          posterSrc: v.posterSrc,
          avatarImage: v.avatarImg || prev[activeAvatarKey].avatarImage
        }
      }));
    }
  };

  const handleSaveAvatar = (e) => {
    e.preventDefault();
    playSound('react', soundEffects);
    setAvatarProfiles(prev => ({
      ...prev,
      [activeAvatarKey]: avatarForm
    }));
    setIsEditAvatarOpen(false);
    if (showToast) showToast(`${avatarForm.name} profile updated`);
    confetti({ particleCount: 35, spread: 50, origin: { y: 0.6 } });
  };

  const handleAddProfession = (e) => {
    e.preventDefault();
    if (!newProfForm.title.trim()) return;

    playSound('react', soundEffects);
    const newId = `${activeAvatarKey}-prof-${Date.now()}`;
    const skillsArray = newProfForm.skills
      ? newProfForm.skills.split(',').map(s => s.trim()).filter(Boolean)
      : ['Specialized Expertise', 'Strategic Foresight'];

    const newProfession = {
      id: newId,
      title: newProfForm.title,
      titleEn: newProfForm.titleEn || newProfForm.title,
      department: newProfForm.department || 'Applied Sciences',
      badge: newProfForm.badge || 'Fellow',
      accentColor: newProfForm.accentColor || '#38bdf8',
      glowColor: `${newProfForm.accentColor || '#38bdf8'}40`,
      icon: newProfForm.icon || 'Briefcase',
      videoSrc: avatarProfile.videoSrc,
      posterSrc: avatarProfile.posterSrc,
      avatarImage: avatarProfile.avatarImage,
      experience: newProfForm.experience || '8 Years',
      quote: newProfForm.quote || `“Excellence in ${newProfForm.title} demands continuous empirical refinement.”`,
      description: newProfForm.description || `Specialized research initiatives as ${newProfForm.title}.`,
      skills: skillsArray,
      tools: ['Studio Tools'],
      qa: [
        {
          q: newProfForm.sampleQ || `What core challenge defines the ${newProfForm.title} frontier?`,
          a: newProfForm.sampleA || `Integrating modern empirical standards with high-precision workflows.`
        }
      ]
    };

    setProfessionsMap(prev => ({
      ...prev,
      [activeAvatarKey]: [newProfession, ...prev[activeAvatarKey]]
    }));

    setActiveProfessionIds(prev => ({
      ...prev,
      [activeAvatarKey]: newId
    }));

    setIsAddProfessionOpen(false);
    if (showToast) showToast(`Role "${newProfession.title}" created for ${avatarProfile.name}`);
    confetti({ particleCount: 45, spread: 60, origin: { y: 0.6 } });
  };

  const handleResetDefaults = () => {
    playSound('click', soundEffects);
    const targetName = currentAvatarConfig.label;
    if (window.confirm(`Reset "${targetName}" (${avatarProfile.name}) to default settings?`)) {
      try {
        localStorage.removeItem(`nexus_solo_profile_${activeAvatarKey}`);
        localStorage.removeItem(`nexus_solo_professions_${activeAvatarKey}`);
      } catch {}

      setAvatarProfiles(prev => ({
        ...prev,
        [activeAvatarKey]: currentAvatarConfig.defaultProfile
      }));
      setProfessionsMap(prev => ({
        ...prev,
        [activeAvatarKey]: currentAvatarConfig.professions
      }));
      setActiveProfessionIds(prev => ({
        ...prev,
        [activeAvatarKey]: currentAvatarConfig.professions[0].id
      }));

      if (showToast) showToast(`${targetName} defaults restored`);
      confetti({ particleCount: 30, spread: 45, origin: { y: 0.6 } });
    }
  };

  const formatSeconds = (sec) => {
    if (!sec || isNaN(sec)) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div
      className="solo-cinema-theater"
      style={{
        '--hero-accent': activeProfession.accentColor,
        '--hero-glow': activeProfession.glowColor || `${activeProfession.accentColor}40`
      }}
    >
      {/* ===================================================================
          0. PROMINENT AVATAR SELECTION BAR (WOMAN & MAN TOGGLE)
          =================================================================== */}
      <div className="solo-avatar-selection-wrapper">
        <div className="solo-avatar-selection-header">
          <div className="solo-avatar-selection-title-group">
            <div className="solo-selection-badge-icon" style={{ borderColor: activeProfession.accentColor }}>
              <Users size={16} style={{ color: activeProfession.accentColor }} />
            </div>
            <div>
              <h2 className="solo-selection-heading">Solo Avatar Selection • Выбор соло-аватара</h2>
              <p className="solo-selection-subheading">
                Explore dedicated multi-discipline video roles for the Solo Woman Avatar (Elena Valeri) and Solo Man Avatar (Prof. Walter Finch)
              </p>
            </div>
          </div>
          <div className="solo-selection-active-indicator">
            <span className="solo-selection-pulse" style={{ background: activeProfession.accentColor }} />
            <span>Active: <strong>{avatarProfile.name}</strong></span>
          </div>
        </div>

        <div className="solo-avatar-toggle-grid">
          {Object.values(SOLO_AVATARS_DATA).map((item) => {
            const isSelected = activeAvatarKey === item.key;
            const currentProfile = avatarProfiles[item.key] || item.defaultProfile;
            const currentProfs = professionsMap[item.key] || item.professions;

            return (
              <button
                key={item.key}
                id={`solo-avatar-switch-${item.key}`}
                type="button"
                className={`solo-avatar-select-card ${isSelected ? 'active' : ''}`}
                onClick={() => handleSwitchAvatar(item.key)}
                style={{
                  '--card-accent': item.accentColor,
                  '--card-glow': item.glowColor
                }}
              >
                <div className="solo-select-avatar-img-wrap">
                  <img
                    src={currentProfile.avatarImage || item.avatarImg}
                    alt={currentProfile.name}
                    className="solo-select-avatar-thumb"
                  />
                  {isSelected && (
                    <div className="solo-select-check-badge" style={{ background: item.accentColor }}>
                      <Check size={12} strokeWidth={3} color="#000" />
                    </div>
                  )}
                </div>

                <div className="solo-select-info">
                  <div className="solo-select-tag-row">
                    <span className="solo-select-gender-tag">{item.label}</span>
                    <span className="solo-select-roles-badge">{currentProfs.length} Mastered Roles</span>
                  </div>
                  <h3 className="solo-select-name">{currentProfile.name}</h3>
                  <p className="solo-select-title">{currentProfile.title}</p>
                </div>

                <div className="solo-select-status-indicator">
                  {isSelected ? (
                    <span
                      className="solo-status-pill active"
                      style={{
                        background: `${item.accentColor}20`,
                        borderColor: item.accentColor,
                        color: item.accentColor
                      }}
                    >
                      <span className="solo-status-dot" style={{ background: item.accentColor }} />
                      Streaming Live
                    </span>
                  ) : (
                    <span className="solo-status-pill inactive">
                      Switch Avatar
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ===================================================================
          1. WIDESCREEN CINEMA STAGE (16:9 THEATER)
          =================================================================== */}
      <div
        ref={playerWrapperRef}
        className="solo-cinema-screen-box"
      >
        <div className="cinema-aspect-16-9">
          <video
            ref={videoRef}
            key={activeVideoSrc}
            className="solo-cinema-video"
            src={activeVideoSrc}
            poster={activePosterSrc}
            loop
            playsInline
            autoPlay
            muted={isMuted}
            style={{ objectPosition: avatarProfile.videoFocus || 'center' }}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onClick={togglePlay}
          />

          {/* Floating Unmute Button */}
          {isMuted && isPlaying && (
            <button
              className="solo-unmute-floating-pill"
              onClick={(e) => {
                e.stopPropagation();
                toggleMute();
              }}
              title="Unmute audio"
            >
              <VolumeX size={15} />
              <span>Unmute</span>
            </button>
          )}

          {/* Top Glass Bar (Title, Role, Fullscreen, Quick Avatar Swap) */}
          <div className="solo-screen-top-bar">
            <div className="solo-avatar-top-pill">
              <img
                src={activeAvatarImg}
                alt={avatarProfile.name}
                className="solo-pill-avatar-img"
              />
              <div className="solo-pill-text-block">
                <div className="solo-pill-headline">
                  <span className="solo-pill-name">{avatarProfile.name}</span>
                  <span
                    className="solo-pill-gender-tag"
                    style={{
                      borderColor: `${activeProfession.accentColor}50`,
                      color: activeProfession.accentColor
                    }}
                  >
                    {activeAvatarKey === 'woman' ? 'Solo Woman' : 'Solo Man'}
                  </span>
                </div>
                <span className="solo-pill-role" style={{ color: activeProfession.accentColor }}>
                  {activeProfession.title}
                </span>
              </div>
            </div>

            <div className="solo-screen-top-actions">
              <span className="solo-dept-tag">
                {activeProfession.department}
              </span>

              <button
                type="button"
                className="solo-quick-swap-btn"
                onClick={() => handleSwitchAvatar(activeAvatarKey === 'woman' ? 'man' : 'woman')}
                title={`Switch to ${activeAvatarKey === 'woman' ? 'Solo Man Avatar' : 'Solo Woman Avatar'}`}
              >
                <RefreshCw size={12} />
                <span>Switch to {activeAvatarKey === 'woman' ? 'Julian (Man)' : 'Elena (Woman)'}</span>
              </button>

              <button
                className="solo-screen-action-btn"
                onClick={toggleFullscreen}
                title="Fullscreen"
              >
                <Maximize size={15} />
              </button>
            </div>
          </div>

          {/* Center Play Indicator on Pause */}
          {!isPlaying && (
            <button
              className="solo-center-play-button"
              onClick={togglePlay}
              aria-label="Play video"
            >
              <Play size={36} fill="#fff" />
            </button>
          )}

          {/* Floating Cinema Controls Bar */}
          <div className="solo-screen-bottom-bar">
            {/* Progress Scrubber */}
            <div
              className="solo-scrubber-track"
              onClick={handleSeek}
              title="Seek"
            >
              <div
                className="solo-scrubber-fill"
                style={{
                  width: `${(currentTime / (duration || 1)) * 100}%`,
                  background: activeProfession.accentColor
                }}
              />
            </div>

            {/* Controls Row */}
            <div className="solo-controls-row">
              <div className="solo-controls-left">
                <button
                  className="solo-ctrl-btn"
                  onClick={togglePlay}
                  title={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause size={17} /> : <Play size={17} fill="#fff" />}
                </button>

                <button
                  className="solo-ctrl-btn"
                  onClick={toggleMute}
                  title={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} />}
                </button>

                <span className="solo-time-counter">
                  {formatSeconds(currentTime)} / {formatSeconds(duration)}
                </span>
              </div>

              <div className="solo-controls-right">
                <span className="solo-live-beacon">
                  <span className="solo-live-dot" style={{ background: activeProfession.accentColor }} />
                  <span>1080p Cinema • {activeAvatarKey === 'woman' ? 'Elena Valeri' : 'Dr. Julian Vance'}</span>
                </span>
                <button
                  className="solo-ctrl-btn"
                  onClick={toggleFullscreen}
                  title="Fullscreen"
                >
                  <Maximize size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================================================================
          2. ELEGANT HORIZONTAL FILMSTRIP (VIDEOS & PROFESSIONS)
          =================================================================== */}
      <div className="solo-filmstrip-container">
        <div className="solo-filmstrip-header">
          <div className="solo-filmstrip-title-row">
            <span className="solo-filmstrip-title">
              Role & Video Portfolio — {avatarProfile.name}
            </span>
            <span className="solo-filmstrip-count">
              {professions.length} Roles • {activeAvatarKey === 'woman' ? 'Solo Woman' : 'Solo Man'}
            </span>
          </div>

          <div className="solo-filmstrip-actions">
            <button
              className="solo-action-text-btn"
              onClick={() => {
                playSound('click', soundEffects);
                setAvatarForm(avatarProfile);
                setIsEditAvatarOpen(true);
              }}
            >
              <Edit3 size={14} />
              <span>Customize Profile</span>
            </button>

            <button
              className="solo-action-primary-btn"
              onClick={() => {
                playSound('click', soundEffects);
                setIsAddProfessionOpen(true);
              }}
              style={{
                background: activeProfession.accentColor,
                color: '#000'
              }}
            >
              <Plus size={14} />
              <span>Add Role</span>
            </button>

            <button
              className="solo-action-icon-btn"
              onClick={handleResetDefaults}
              title={`Reset ${currentAvatarConfig.label} to Defaults`}
            >
              <RefreshCw size={13} />
            </button>
          </div>
        </div>

        {/* Horizontal Reel Cards */}
        <div className="solo-filmstrip-cards-row">
          {currentVideos.map((v) => {
            const isCurrent = activeProfession.id === v.professionId;
            const matchingProf =
              professions.find(p => p.id === v.professionId) ||
              currentAvatarConfig.professions.find(p => p.id === v.professionId) ||
              v;

            return (
              <div
                key={v.id}
                id={`filmstrip-card-${v.id}`}
                className={`solo-reel-card ${isCurrent ? 'active-reel' : ''}`}
                onClick={() => handleSelectRecentVideo(v)}
                style={{
                  '--card-accent': v.accentColor,
                  '--card-glow': v.glowColor
                }}
              >
                <div className="solo-reel-thumb-wrapper">
                  <img src={v.posterSrc} alt={v.name} className="solo-reel-thumb" />
                  <div className="solo-reel-overlay-gradient" />
                  <span className="solo-reel-tag">{v.tag}</span>
                  {isCurrent && (
                    <div className="solo-reel-now-playing" style={{ background: v.accentColor }}>
                      <Play size={10} fill="#000" color="#000" />
                    </div>
                  )}
                </div>

                <div className="solo-reel-info">
                  <span className="solo-reel-role-title">
                    {matchingProf.title || v.roleTitle}
                  </span>
                  <span className="solo-reel-dept">
                    {matchingProf.department || v.department}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ===================================================================
          3. MINIMAL DOSSIER BAR (CLEAN, NO TEXT WALLS)
          =================================================================== */}
      <div className="solo-minimal-dossier-card">
        <div className="solo-dossier-quote-block">
          <p className="solo-dossier-quote">
            {activeProfession.quote}
          </p>
        </div>

        <div className="solo-dossier-tags-block">
          <div className="solo-skills-minimal-list">
            {activeProfession.skills.slice(0, 6).map((skill, i) => (
              <span
                key={i}
                className="solo-skill-minimal-pill"
                style={{
                  borderColor: `${activeProfession.accentColor}35`
                }}
              >
                {skill}
              </span>
            ))}
          </div>

          <button
            className={`solo-qa-toggle-btn ${showQAPanel ? 'active' : ''}`}
            onClick={() => {
              playSound('click', soundEffects);
              setShowQAPanel(!showQAPanel);
            }}
            style={showQAPanel ? { borderColor: activeProfession.accentColor, color: activeProfession.accentColor } : {}}
          >
            <MessageSquare size={14} />
            <span>{showQAPanel ? 'Hide Inquiries' : 'Ask Fellow Inquiries'}</span>
          </button>
        </div>

        {/* Clean Accordion Q&A */}
        {showQAPanel && (
          <div className="solo-compact-dialogue-drawer">
            <div className="solo-compact-qa-response">
              <span className="solo-qa-q-label">{activeQA.q || activeProfession.qa?.[0]?.q}</span>
              <p className="solo-qa-a-text">{activeQA.a || activeProfession.qa?.[0]?.a}</p>
            </div>

            {activeProfession.qa && activeProfession.qa.length > 1 && (
              <div className="solo-compact-questions-list">
                {activeProfession.qa.map((item, idx) => (
                  <button
                    key={idx}
                    className={`solo-compact-q-chip ${activeQA.q === item.q ? 'selected' : ''}`}
                    onClick={() => {
                      playSound('click', soundEffects);
                      setActiveQA(item);
                    }}
                    style={activeQA.q === item.q ? { borderColor: activeProfession.accentColor } : {}}
                  >
                    <span>{item.q}</span>
                    <ArrowRight size={12} />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* ===================================================================
          MODAL: EDIT AVATAR PROFILE
          =================================================================== */}
      {isEditAvatarOpen && (
        <div className="multirole-modal-overlay" onClick={() => setIsEditAvatarOpen(false)}>
          <div className="multirole-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-top">
              <div className="modal-title-wrap">
                <Edit3 size={17} style={{ color: activeProfession.accentColor }} />
                <h3>Customize {currentAvatarConfig.label}</h3>
              </div>
              <button className="modal-close-btn" onClick={() => setIsEditAvatarOpen(false)}>
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSaveAvatar} className="modal-form">
              <div className="form-group">
                <label>Avatar Name</label>
                <input
                  type="text"
                  value={avatarForm.name}
                  onChange={(e) => setAvatarForm({ ...avatarForm, name: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label>Video URL (.mp4 / .mov)</label>
                <input
                  type="text"
                  value={avatarForm.videoSrc}
                  onChange={(e) => setAvatarForm({ ...avatarForm, videoSrc: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label>Avatar Face Photo URL</label>
                <input
                  type="text"
                  value={avatarForm.avatarImage}
                  onChange={(e) => setAvatarForm({ ...avatarForm, avatarImage: e.target.value })}
                />
              </div>

              <div className="modal-actions-row">
                <button
                  type="button"
                  className="multirole-btn-secondary"
                  onClick={() => setIsEditAvatarOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="multirole-btn-primary"
                  style={{ background: activeProfession.accentColor, color: '#000' }}
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ===================================================================
          MODAL: ADD NEW ROLE
          =================================================================== */}
      {isAddProfessionOpen && (
        <div className="multirole-modal-overlay" onClick={() => setIsAddProfessionOpen(false)}>
          <div className="multirole-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-top">
              <div className="modal-title-wrap">
                <Plus size={17} style={{ color: activeProfession.accentColor }} />
                <h3>Add New Role for {avatarProfile.name}</h3>
              </div>
              <button className="modal-close-btn" onClick={() => setIsAddProfessionOpen(false)}>
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleAddProfession} className="modal-form">
              <div className="form-row-2">
                <div className="form-group">
                  <label>Role Title</label>
                  <input
                    type="text"
                    placeholder="e.g. Quantum Computing Engineer"
                    value={newProfForm.title}
                    onChange={(e) => setNewProfForm({ ...newProfForm, title: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Department</label>
                  <input
                    type="text"
                    placeholder="e.g. Applied Physics & Quantum Systems"
                    value={newProfForm.department}
                    onChange={(e) => setNewProfForm({ ...newProfForm, department: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label>Accent Glow Color</label>
                  <input
                    type="color"
                    value={newProfForm.accentColor}
                    onChange={(e) => setNewProfForm({ ...newProfForm, accentColor: e.target.value })}
                    style={{ height: 40, padding: 2, cursor: 'pointer' }}
                  />
                </div>

                <div className="form-group">
                  <label>Key Skills (comma separated)</label>
                  <input
                    type="text"
                    placeholder="Quantum Circuits, Qubits, Cryogenics"
                    value={newProfForm.skills}
                    onChange={(e) => setNewProfForm({ ...newProfForm, skills: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Core Quote / Motto</label>
                <input
                  type="text"
                  placeholder="“A defining insight reflecting this specialization”"
                  value={newProfForm.quote}
                  onChange={(e) => setNewProfForm({ ...newProfForm, quote: e.target.value })}
                />
              </div>

              <div className="modal-actions-row">
                <button
                  type="button"
                  className="multirole-btn-secondary"
                  onClick={() => setIsAddProfessionOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="multirole-btn-primary"
                  style={{ background: newProfForm.accentColor || '#38bdf8', color: '#000' }}
                >
                  Create Role
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
