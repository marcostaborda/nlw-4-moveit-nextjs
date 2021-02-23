export function ExperienceBar() {
  return (
    <header className="experience-bar">
      <span className="experience-bar__span">0 xp</span>
      <div className="experience-bar__div">
        <div style={{ width: '50%' }} className="experience-bar__div__level-status" />
        <span style={{ left: '50%' }} className="experience-bar__div__level-current">300xp</span>
      </div>
      <span className="experience-bar__span">600 xp</span>
    </header>
  );
}