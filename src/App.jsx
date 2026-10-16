import React, { useState, useRef, useEffect } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  RotateCcw,
  Sparkles,
  Film,
  Users,
  MessageSquare,
  HelpCircle,
  Heart,
  Flame,
  Brain,
  Share2,
  ChevronRight,
  ChevronLeft,
  Compass,
  Radio,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { AVATARS } from './data/avatars';
import { playSound } from './utils/audioEffects';

export default function App() {
  const avatarsList = AVATARS;
  const [activeAvatarId, setActiveAvatarId] = useState('biologist');
  const [activeMode, setActiveMode] = useState('cinema'); // 'cinema' | 'roster' | 'interview'
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.85);
  const [isMuted, setIsMuted] = useState(true);
  const [hoveredCardAvatarId, setHoveredCardAvatarId] = useState(null);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isLooping, setIsLooping] = useState(true);
  const [soundEffects, setSoundEffects] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [showHotkeys, setShowHotkeys] = useState(false);
  const [notification, setNotification] = useState('');

  // Reactions state
  const [reactions, setReactions] = useState(() => {
    const init = {};
    AVATARS.forEach((a, i) => {
      init[a.id] = {
        likes: 142 + i * 17,
        mindblown: 89 + i * 9,
        insightful: 64 + i * 12,
        userLiked: false,
        userMindblown: false,
        userInsightful: false
      };
    });
    return init;
  });

  const videoRef = useRef(null);
  const playerWrapperRef = useRef(null);

  const activeAvatar = avatarsList.find(a => a.id === activeAvatarId) || avatarsList[0];
  const currentIndex = avatarsList.findIndex(a => a.id === activeAvatarId);

  // Sync Dynamic Theme Colors
  useEffect(() => {
    if (activeAvatar) {
      document.documentElement.style.setProperty('--avatar-accent', activeAvatar.accentColor);
      document.documentElement.style.setProperty('--avatar-glow', activeAvatar.glowColor);
    }
  }, [activeAvatar]);

  // Video playback speed sync
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed, activeAvatarId]);

  // Toast notification helper
  const showToast = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(''), 2500);
  };

  // Switch Avatar Handler
  const handleSwitchAvatar = (id) => {
    if (id === activeAvatarId) return;
    playSound('switch', soundEffects);
    setActiveAvatarId(id);
    setCurrentTime(0);
    setIsPlaying(true);
  };

  // Next / Prev Avatar
  const handleNextAvatar = () => {
    const nextIdx = (currentIndex + 1) % avatarsList.length;
    handleSwitchAvatar(avatarsList[nextIdx].id);
  };

  const handlePrevAvatar = () => {
    const prevIdx = (currentIndex - 1 + avatarsList.length) % avatarsList.length;
    handleSwitchAvatar(avatarsList[prevIdx].id);
  };

  // Play / Pause Toggle
  const togglePlay = () => {
    if (!videoRef.current) return;
    playSound('click', soundEffects);
    if (!videoRef.current.paused) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch((err) => {
        console.warn('Play prevented:', err);
      });
    }
  };

  // Video Time & Duration listeners
  const onTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const onLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration || 20);
      videoRef.current.volume = volume;
      videoRef.current.muted = isMuted;
      videoRef.current.playbackRate = playbackSpeed;
      if (isPlaying) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch((err) => {
              console.warn('Autoplay prevented, retrying muted:', err);
              if (videoRef.current) {
                videoRef.current.muted = true;
                setIsMuted(true);
                videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {
                  setIsPlaying(false);
                });
              }
            });
        }
      }
    }
  };

  // Scrubber Seek
  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const seekTime = Math.max(0, Math.min(pos * duration, duration));
    if (videoRef.current) {
      videoRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  // Volume Change
  const handleVolumeChange = (e) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (videoRef.current) {
      videoRef.current.volume = newVol;
      if (newVol > 0 && isMuted) {
        setIsMuted(false);
        videoRef.current.muted = false;
      }
    }
  };

  const toggleMute = () => {
    playSound('click', soundEffects);
    if (videoRef.current) {
      const nextMuted = !isMuted;
      setIsMuted(nextMuted);
      videoRef.current.muted = nextMuted;
      if (!nextMuted && volume === 0) {
        setVolume(0.85);
        videoRef.current.volume = 0.85;
      }
      showToast(nextMuted ? 'Звук выключен' : 'Звук включен 🔊');
    }
  };

  // Cycle Speed
  const cycleSpeed = () => {
    playSound('click', soundEffects);
    const speeds = [0.75, 1, 1.25, 1.5];
    const nextSpeed = speeds[(speeds.indexOf(playbackSpeed) + 1) % speeds.length];
    setPlaybackSpeed(nextSpeed);
    showToast(`Скорость: ${nextSpeed}x`);
  };

  // Fullscreen Toggle
  const toggleFullscreen = () => {
    playSound('click', soundEffects);
    if (!document.fullscreenElement) {
      if (playerWrapperRef.current) {
        playerWrapperRef.current.requestFullscreen().catch(() => {});
      }
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  // Interactive Question click (seek & play)
  const handleAskQuestion = (time) => {
    playSound('click', soundEffects);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
      if (!isPlaying) {
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    }
    showToast('Переход к ответу аватара');
  };

  // Reaction Click
  const handleReaction = (type) => {
    playSound('react', soundEffects);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: [activeAvatar.accentColor, '#ffffff', '#ec4899', '#38bdf8']
    });

    setReactions(prev => {
      const current = prev[activeAvatarId] || {};
      const key = `user${type.charAt(0).toUpperCase() + type.slice(1)}`;
      const isAlready = current[key];
      return {
        ...prev,
        [activeAvatarId]: {
          ...current,
          [type]: current[type] + (isAlready ? -1 : 1),
          [key]: !isAlready
        }
      };
    });
  };

  // Share link
  const handleShare = () => {
    playSound('click', soundEffects);
    navigator.clipboard?.writeText(window.location.href);
    showToast('Ссылка на аватара скопирована!');
  };

  // Global Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.code === 'Space') {
        e.preventDefault();
        togglePlay();
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        if (e.shiftKey) {
          handleNextAvatar();
        } else if (videoRef.current) {
          videoRef.current.currentTime = Math.min(duration, videoRef.current.currentTime + 3);
        }
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        if (e.shiftKey) {
          handlePrevAvatar();
        } else if (videoRef.current) {
          videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 3);
        }
      } else if (e.code === 'KeyM') {
        toggleMute();
      } else if (e.code === 'KeyF') {
        toggleFullscreen();
      } else if (e.code === 'KeyC') {
        setActiveMode(m => (m === 'cinema' ? 'roster' : m === 'roster' ? 'interview' : 'cinema'));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying, duration, currentIndex, activeAvatarId, isMuted, soundEffects]);

  // Format MM:SS
  const formatTime = (secs) => {
    if (isNaN(secs)) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Filtered Avatars
  const categories = [
    { id: 'all', label: 'Все персоналии' },
    { id: 'science', label: 'Наука & Биология' },
    { id: 'cinema', label: 'Кино & Медиа' },
    { id: 'aviation', label: 'Авиация' },
    { id: 'engineering', label: 'Инженерия' },
    { id: 'academic', label: 'Академики' },
    { id: 'fashion', label: 'Мода & Стиль' },
    { id: 'education', label: 'Педагогика' },
    { id: 'ecology', label: 'Экология' },
    { id: 'agriculture', label: 'Агротех' }
  ];

  const filteredAvatars = categoryFilter === 'all'
    ? avatarsList
    : avatarsList.filter(a => a.category === categoryFilter);

  const currentReactions = reactions[activeAvatarId] || { likes: 0, mindblown: 0, insightful: 0 };

  return (
    <div className="app-container">
      {/* Ambient Lighting Engine */}
      <div className="ambient-lighting" aria-hidden="true">
        <div className="ambient-blob-1" />
        <div className="ambient-blob-2" />
      </div>

      {/* Toast Notification */}
      {notification && (
        <div style={{
          position: 'fixed',
          top: 24,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 9999,
          background: 'rgba(15, 23, 42, 0.95)',
          border: '1px solid var(--avatar-accent)',
          color: '#fff',
          padding: '8px 18px',
          borderRadius: '999px',
          fontSize: '0.85rem',
          boxShadow: '0 8px 30px rgba(0,0,0,0.5), 0 0 20px var(--avatar-glow)',
          backdropFilter: 'blur(10px)',
          animation: 'fadeIn 0.2s ease'
        }}>
          ✨ {notification}
        </div>
      )}

      {/* Header */}
      <header className="site-header">
        <div className="brand-section">
          <div className="brand-logo-badge">
            <Radio size={22} />
          </div>
          <div className="brand-text-wrap">
            <h1 className="brand-title">
              NEXUS <span style={{ color: 'var(--avatar-accent)', fontWeight: 300 }}>//</span> AVATARS
            </h1>
            <span className="brand-subtitle">Interactive AI Video Platform</span>
          </div>
        </div>

        {/* Navigation Modes */}
        <nav className="nav-modes" aria-label="Режимы просмотра">
          <button
            id="tab-cinema-mode"
            className={`mode-tab-btn ${activeMode === 'cinema' ? 'active' : ''}`}
            onClick={() => { playSound('click', soundEffects); setActiveMode('cinema'); }}
          >
            <Film size={16} />
            <span>Cinema Lounge</span>
          </button>
          <button
            id="tab-roster-mode"
            className={`mode-tab-btn ${activeMode === 'roster' ? 'active' : ''}`}
            onClick={() => { playSound('click', soundEffects); setActiveMode('roster'); }}
          >
            <Users size={16} />
            <span>Каталог Аватаров ({avatarsList.length})</span>
          </button>
          <button
            id="tab-interview-mode"
            className={`mode-tab-btn ${activeMode === 'interview' ? 'active' : ''}`}
            onClick={() => { playSound('click', soundEffects); setActiveMode('interview'); }}
          >
            <MessageSquare size={16} />
            <span>Интервью & Q&A</span>
          </button>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          <div className="live-badge">
            <span className="pulse-dot" />
            <span>{avatarsList.length} AI ON AIR</span>
          </div>

          <button
            id="btn-toggle-sfx"
            className={`icon-btn ${soundEffects ? 'active' : ''}`}
            onClick={() => {
              setSoundEffects(!soundEffects);
              showToast(soundEffects ? 'Звуковые эффекты выключены' : 'SFX включены');
            }}
            title="Звуковые эффекты переключения"
          >
            <Sparkles size={18} />
          </button>

          <button
            id="btn-help-hotkeys"
            className="icon-btn"
            onClick={() => { playSound('click', soundEffects); setShowHotkeys(true); }}
            title="Горячие клавиши"
          >
            <HelpCircle size={18} />
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="main-stage">
        {/* ===============================================================
            MODE 1: CINEMA LOUNGE (Default 16:9 Showcase)
            =============================================================== */}
        {activeMode === 'cinema' && (
          <div className="cinema-layout">
            <div className="cinema-primary-col">
              {/* 16:9 Cinema Player Wrapper */}
              <div
                ref={playerWrapperRef}
                className={`player-outer-wrapper ${!isPlaying ? 'is-paused' : ''}`}
              >
                <div className="player-aspect-box">
                  <video
                    ref={videoRef}
                    key={activeAvatar.videoSrc}
                    className="cinema-video-element"
                    src={activeAvatar.videoSrc}
                    poster={activeAvatar.thumbnailSrc}
                    loop={isLooping}
                    playsInline
                    autoPlay
                    muted={isMuted}
                    style={{ objectPosition: activeAvatar.videoFocus || 'center' }}
                    onTimeUpdate={onTimeUpdate}
                    onLoadedMetadata={onLoadedMetadata}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onClick={togglePlay}
                  />

                  {/* Quick Unmute Floating Badge (appears if playing muted) */}
                  {isMuted && isPlaying && (
                    <button
                      id="btn-quick-unmute"
                      className="unmute-badge-overlay"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMute();
                      }}
                      title="Включить звук видео (M)"
                    >
                      <VolumeX size={15} />
                      <span>Включить звук</span>
                    </button>
                  )}

                  {/* Top Bar Overlay */}
                  <div className="video-overlay-top">
                    <div className="overlay-avatar-pill">
                      <img
                        src={activeAvatar.thumbnailSrc}
                        alt={activeAvatar.name}
                        className="overlay-avatar-thumb"
                      />
                      <div>
                        <div className="overlay-avatar-name">{activeAvatar.name}</div>
                        <div className="overlay-avatar-role">{activeAvatar.role}</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: 8 }}>
                      <span className="category-tag">{activeAvatar.categoryLabel}</span>
                    </div>
                  </div>

                  {/* Center Play Button (Visible on Pause) */}
                  {!isPlaying && (
                    <button
                      id="btn-center-play"
                      className="center-play-trigger"
                      onClick={togglePlay}
                      aria-label="Воспроизвести"
                    >
                      <Play size={32} fill="#fff" />
                    </button>
                  )}

                  {/* Bottom Video Controls Bar */}
                  <div className="video-controls-bar">
                    {/* Scrubber Progress Bar */}
                    <div
                      className="progress-container"
                      onClick={handleSeek}
                      title="Кликните для перемотки"
                    >
                      <div className="progress-track">
                        <div
                          className="progress-fill"
                          style={{ width: `${(currentTime / (duration || 20)) * 100}%` }}
                        />
                        <div
                          className="progress-thumb"
                          style={{ left: `${(currentTime / (duration || 20)) * 100}%` }}
                        />

                        {/* Interactive Question Markers on Timeline */}
                        {activeAvatar.interactiveQuestions?.map((iq, idx) => (
                          <div
                            key={idx}
                            className="timeline-marker"
                            style={{ left: `${(iq.time / (duration || 20)) * 100}%` }}
                            title={`Вопрос: ${iq.q}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleAskQuestion(iq.time);
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Controls Row */}
                    <div className="controls-main-row">
                      <div className="controls-left-group">
                        <button
                          id="btn-player-play-pause"
                          className="ctrl-btn"
                          onClick={togglePlay}
                          title={isPlaying ? 'Пауза (Пробел)' : 'Воспроизведение (Пробел)'}
                        >
                          {isPlaying ? <Pause size={18} /> : <Play size={18} fill="#fff" />}
                        </button>

                        <button
                          id="btn-prev-avatar"
                          className="ctrl-btn"
                          onClick={handlePrevAvatar}
                          title="Предыдущий аватар (Shift + ←)"
                        >
                          <ChevronLeft size={18} />
                        </button>

                        <button
                          id="btn-next-avatar"
                          className="ctrl-btn"
                          onClick={handleNextAvatar}
                          title="Следующий аватар (Shift + →)"
                        >
                          <ChevronRight size={18} />
                        </button>

                        <div className="volume-control-wrap">
                          <button
                            id="btn-player-mute"
                            className="ctrl-btn"
                            onClick={toggleMute}
                            title="Вкл/Выкл звук (M)"
                          >
                            {isMuted || volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
                          </button>
                          <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.05"
                            value={isMuted ? 0 : volume}
                            onChange={handleVolumeChange}
                            className="volume-slider"
                            title="Громкость (Стрелки Вверх/Вниз)"
                          />
                        </div>

                        <span className="time-display">
                          {formatTime(currentTime)} / {formatTime(duration)}
                        </span>
                      </div>

                      <div className="controls-right-group">
                        <button
                          id="btn-playback-speed"
                          className="speed-badge"
                          onClick={cycleSpeed}
                          title="Скорость воспроизведения"
                        >
                          {playbackSpeed}x
                        </button>

                        <button
                          id="btn-loop-toggle"
                          className={`ctrl-btn ${isLooping ? 'active' : ''}`}
                          onClick={() => {
                            setIsLooping(!isLooping);
                            showToast(isLooping ? 'Повтор выключен' : 'Повтор включен');
                          }}
                          title="Повтор видео"
                        >
                          <RotateCcw size={16} />
                        </button>

                        <button
                          id="btn-player-fullscreen"
                          className="ctrl-btn"
                          onClick={toggleFullscreen}
                          title="На весь экран (F)"
                        >
                          <Maximize size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Avatar Dock (Quick Switcher Carousel) */}
              <section className="avatar-dock-section">
                <div className="dock-header-row">
                  <h2 className="dock-title">
                    <Compass size={16} style={{ color: 'var(--avatar-accent)' }} />
                    Быстрый выбор аватара
                  </h2>
                  <span className="dock-shortcuts-hint">
                    Кликните для моментального переключения • Shift + ← / →
                  </span>
                </div>

                <div className="dock-carousel">
                  {AVATARS.map((avatar) => {
                    const isActive = avatar.id === activeAvatarId;
                    return (
                      <div
                        key={avatar.id}
                        id={`dock-avatar-${avatar.id}`}
                        className={`avatar-dock-card ${isActive ? 'active' : ''}`}
                        onClick={() => handleSwitchAvatar(avatar.id)}
                        role="button"
                        tabIndex={0}
                        style={{
                          '--avatar-glow': avatar.glowColor,
                          '--avatar-accent': avatar.accentColor
                        }}
                      >
                        <img
                          src={avatar.thumbnailSrc}
                          alt={avatar.name}
                          className="avatar-dock-bg-thumb"
                          loading="lazy"
                        />
                        <div className="avatar-dock-gradient" />
                        {isActive && <span className="dock-active-pill" />}
                        <div className="avatar-dock-info">
                          <span className="dock-name">{avatar.name}</span>
                          <span className="dock-role">{avatar.role.split('&')[0]}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>

            {/* Right Column: Character Intelligence & Interactive Dialogue */}
            <aside className="cinema-sidebar">
              <div className="sidebar-glass-card">
                {/* Profile Header */}
                <div className="profile-header">
                  <div className="profile-avatar-frame">
                    <img
                      src={activeAvatar.thumbnailSrc}
                      alt={activeAvatar.name}
                      className="profile-avatar-img"
                    />
                  </div>
                  <div className="profile-meta">
                    <span className="category-tag">{activeAvatar.categoryLabel}</span>
                    <h2 className="profile-fullname">{activeAvatar.name}</h2>
                    <span className="profile-role-title">{activeAvatar.role}</span>
                  </div>
                </div>

                {/* Quote */}
                <div className="profile-quote-box">
                  {activeAvatar.quote}
                </div>

                {/* Bio */}
                <p className="profile-bio-text">
                  {activeAvatar.bio}
                </p>

                {/* Stats Matrix */}
                <div className="stats-matrix">
                  <div className="stat-cell">
                    <span className="stat-value">{activeAvatar.stats.experience}</span>
                    <span className="stat-label">Опыт</span>
                  </div>
                  <div className="stat-cell">
                    <span className="stat-value">{activeAvatar.duration}</span>
                    <span className="stat-label">Хронометраж</span>
                  </div>
                  <div className="stat-cell">
                    <span className="stat-value">{activeAvatar.voiceType.split(',')[0]}</span>
                    <span className="stat-label">Голос</span>
                  </div>
                </div>

                {/* Traits */}
                <div className="traits-wrap">
                  {activeAvatar.traits.map((t, idx) => (
                    <span key={idx} className="trait-badge">#{t}</span>
                  ))}
                </div>

                {/* Interactive Questions */}
                <div className="interactive-section">
                  <h3 className="interactive-title">
                    <MessageSquare size={14} />
                    Спросить аватара (Интерактив)
                  </h3>
                  <div className="questions-list">
                    {activeAvatar.interactiveQuestions?.map((item, idx) => (
                      <button
                        key={idx}
                        id={`btn-question-${idx}`}
                        className="question-chip"
                        onClick={() => handleAskQuestion(item.time)}
                      >
                        <span>{item.q}</span>
                        <ChevronRight size={14} />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Reactions & Sharing */}
                <div className="reactions-card">
                  <div className="reactions-group">
                    <button
                      id="btn-react-like"
                      className={`reaction-btn ${currentReactions.userLiked ? 'active' : ''}`}
                      onClick={() => handleReaction('likes')}
                      title="Нравится"
                    >
                      <Heart size={14} fill={currentReactions.userLiked ? '#fb7185' : 'none'} />
                      <span>{currentReactions.likes}</span>
                    </button>

                    <button
                      id="btn-react-mindblown"
                      className={`reaction-btn ${currentReactions.userMindblown ? 'active' : ''}`}
                      onClick={() => handleReaction('mindblown')}
                      title="Поразительно"
                    >
                      <Flame size={14} fill={currentReactions.userMindblown ? '#f59e0b' : 'none'} />
                      <span>{currentReactions.mindblown}</span>
                    </button>

                    <button
                      id="btn-react-insightful"
                      className={`reaction-btn ${currentReactions.userInsightful ? 'active' : ''}`}
                      onClick={() => handleReaction('insightful')}
                      title="Инсайт"
                    >
                      <Brain size={14} fill={currentReactions.userInsightful ? '#a855f7' : 'none'} />
                      <span>{currentReactions.insightful}</span>
                    </button>
                  </div>

                  <button
                    id="btn-share-avatar"
                    className="icon-btn"
                    onClick={handleShare}
                    title="Поделиться аватаром"
                  >
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
            </aside>
          </div>
        )}

        {/* ===============================================================
            MODE 2: AVATAR ROSTER / STUDIO GRID
            =============================================================== */}
        {activeMode === 'roster' && (
          <div className="roster-view">
            <div className="roster-header">
              <div className="roster-headline-wrap">
                <h2 className="roster-title">Галерея ИИ-Персоналий (10 Аватаров)</h2>
                <p className="roster-desc">
                  Выберите цифрового эксперта для детального погружения в его знания и видеоматериалы
                </p>
              </div>

              {/* Category Filter Chips */}
              <div className="category-filter-chips">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    className={`filter-chip ${categoryFilter === cat.id ? 'active' : ''}`}
                    onClick={() => { playSound('click', soundEffects); setCategoryFilter(cat.id); }}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid of Avatar Cards */}
            <div className="roster-grid">
              {filteredAvatars.map(avatar => {
                const isSelected = avatar.id === activeAvatarId;
                return (
                  <div
                    key={avatar.id}
                    id={`roster-card-${avatar.id}`}
                    className={`roster-card ${isSelected ? 'active' : ''}`}
                    style={{
                      '--card-glow': avatar.glowColor,
                      '--avatar-accent': avatar.accentColor
                    }}
                    onClick={() => {
                      handleSwitchAvatar(avatar.id);
                      setActiveMode('cinema');
                    }}
                  >
                    <div
                      className="roster-card-media"
                      onMouseEnter={() => setHoveredCardAvatarId(avatar.id)}
                      onMouseLeave={() => setHoveredCardAvatarId(null)}
                    >
                      <img
                        src={avatar.thumbnailSrc}
                        alt={avatar.name}
                        className={`roster-card-img ${hoveredCardAvatarId === avatar.id ? 'is-faded' : ''}`}
                        loading="lazy"
                      />
                      {hoveredCardAvatarId === avatar.id && (
                        <video
                          className="roster-card-video-preview"
                          src={avatar.videoSrc}
                          autoPlay
                          muted
                          loop
                          playsInline
                          style={{ objectPosition: avatar.videoFocus || 'center' }}
                        />
                      )}
                      <span className="roster-card-overlay-badge">{avatar.duration}</span>
                      <div className="roster-play-hover-btn">
                        <Play size={20} fill="#000" />
                      </div>
                    </div>

                    <div className="roster-card-body">
                      <div className="roster-card-header">
                        <span className="category-tag">{avatar.categoryLabel}</span>
                        <h3 className="roster-card-name">{avatar.name}</h3>
                        <span className="roster-card-role">{avatar.role}</span>
                      </div>

                      <p className="roster-card-bio">{avatar.bio}</p>

                      <div className="traits-wrap">
                        {avatar.traits.slice(0, 3).map((t, i) => (
                          <span key={i} className="trait-badge">#{t}</span>
                        ))}
                      </div>

                      <div className="roster-card-footer">
                        <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>
                          {avatar.stats.experience}
                        </span>
                        <button className="roster-launch-btn">
                          <span>Открыть плеер</span>
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ===============================================================
            MODE 3: INTERACTIVE Q&A / INTERVIEW
            =============================================================== */}
        {activeMode === 'interview' && (
          <div className="interactive-view">
            {/* Sidebar list of avatars for interview */}
            <div className="dialogue-roster-list">
              <h3 style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: 8 }}>
                Выберите собеседника
              </h3>
              {AVATARS.map(avatar => {
                const isActive = avatar.id === activeAvatarId;
                return (
                  <button
                    key={avatar.id}
                    id={`dialogue-select-${avatar.id}`}
                    className={`dialogue-avatar-item ${isActive ? 'active' : ''}`}
                    onClick={() => handleSwitchAvatar(avatar.id)}
                    style={{
                      '--avatar-glow': avatar.glowColor,
                      '--avatar-accent': avatar.accentColor
                    }}
                  >
                    <img
                      src={avatar.thumbnailSrc}
                      alt={avatar.name}
                      className="dialogue-item-thumb"
                    />
                    <div style={{ textAlign: 'left', overflow: 'hidden' }}>
                      <div style={{ fontWeight: 600, fontSize: '0.85rem', color: '#fff' }}>
                        {avatar.name}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                        {avatar.role}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Dialogue Stage */}
            <div className="dialogue-stage-card">
              {/* Mini 16:9 Screen for response */}
              <div
                className="player-outer-wrapper"
                style={{ borderRadius: 'var(--radius-lg)' }}
              >
                <div className="player-aspect-box">
                  <video
                    ref={videoRef}
                    key={`interview-${activeAvatar.videoSrc}`}
                    className="cinema-video-element"
                    src={activeAvatar.videoSrc}
                    poster={activeAvatar.thumbnailSrc}
                    loop
                    autoPlay
                    muted={isMuted}
                    playsInline
                    style={{ objectPosition: activeAvatar.videoFocus || 'center' }}
                    onClick={togglePlay}
                  />
                  <div className="video-overlay-top">
                    <span className="category-tag">{activeAvatar.name} отвечает</span>
                  </div>
                </div>
              </div>

              {/* Chat & Prompt Selector */}
              <div className="interview-chat-container">
                <div className="chat-bubble-ai">
                  <img
                    src={activeAvatar.thumbnailSrc}
                    alt={activeAvatar.name}
                    className="chat-ai-thumb"
                  />
                  <div className="chat-ai-message">
                    <span className="chat-speaker-name">{activeAvatar.name} ({activeAvatar.role})</span>
                    <p className="chat-text">
                      {activeAvatar.quote}
                    </p>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: 4 }}>
                      Выберите интересующий вопрос ниже — я моментально перейду к раскрытию темы на видео:
                    </span>
                  </div>
                </div>

                {/* Prompt Buttons */}
                <div className="interactive-prompt-buttons">
                  {activeAvatar.interactiveQuestions?.map((item, idx) => (
                    <button
                      key={idx}
                      id={`prompt-question-${idx}`}
                      className="prompt-btn"
                      onClick={() => {
                        handleAskQuestion(item.time);
                        showToast(`Запущен ответ: "${item.q}"`);
                      }}
                    >
                      <span>💬 {item.q}</span>
                      <ArrowRight size={16} style={{ color: 'var(--avatar-accent)' }} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-left">
          <span>© 2026 NEXUS AI Platform</span>
          <span>•</span>
          <span>10 AI Avatars In Full HD 16:9</span>
          <span>•</span>
          <span style={{ color: 'var(--avatar-accent)' }}>Real-time Neural Showcase</span>
        </div>
        <div>
          <span>Нажмите <strong>Пробел</strong> для паузы • <strong>F</strong> для полного экрана</span>
        </div>
      </footer>



      {/* Hotkeys Modal */}
      {showHotkeys && (
        <div
          className="modal-backdrop"
          onClick={() => setShowHotkeys(false)}
        >
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h3 className="modal-title">Горячие клавиши управления</h3>
              <button
                className="icon-btn"
                onClick={() => setShowHotkeys(false)}
              >
                ✕
              </button>
            </div>

            <div className="hotkeys-list">
              <div className="hotkey-row">
                <span className="key-desc">Воспроизведение / Пауза</span>
                <span className="key-badge">Space</span>
              </div>
              <div className="hotkey-row">
                <span className="key-desc">Следующий / Предыдущий аватар</span>
                <span className="key-badge">Shift + ← / →</span>
              </div>
              <div className="hotkey-row">
                <span className="key-desc">Перемотка на 3 сек</span>
                <span className="key-badge">← / →</span>
              </div>
              <div className="hotkey-row">
                <span className="key-desc">Громкость звука</span>
                <span className="key-badge">↑ / ↓</span>
              </div>
              <div className="hotkey-row">
                <span className="key-desc">Вкл / Выкл звук (Mute)</span>
                <span className="key-badge">M</span>
              </div>
              <div className="hotkey-row">
                <span className="key-desc">Полноэкранный режим</span>
                <span className="key-badge">F</span>
              </div>
              <div className="hotkey-row">
                <span className="key-desc">Сменить режим интерфейса</span>
                <span className="key-badge">C</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
