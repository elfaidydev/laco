export function PortraitOverlay() {
  return (
    <div className="portrait-only-overlay" aria-hidden="true">
      <div className="portrait-only-box">
        <div className="portrait-only-icon" />
        <div className="portrait-only-title">رجّع الجهاز للوضع الطولي</div>
        <div className="portrait-only-sub">Portrait only</div>
      </div>
    </div>
  );
}
