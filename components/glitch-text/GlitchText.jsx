"use client";

import "./GlitchText.css";

/**
 * @param {{
 *   children: string,
 *   speed?: number,
 *   enableShadows?: boolean,
 *   enableOnHover?: boolean,
 *   className?: string
 * }} props
 */
const GlitchText = ({
  children,
  speed = 1,
  enableShadows = true,
  enableOnHover = true,
  className = "",
}) => {
  const inlineStyles = {
    "--after-duration": `${speed * 3}s`,
    "--before-duration": `${speed * 2}s`,
    "--after-shadow": enableShadows ? "-3px 0 #ef4444" : "none",
    "--before-shadow": enableShadows ? "3px 0 #38bdf8" : "none",
  };

  const hoverClass = enableOnHover ? "enable-on-hover" : "";

  return (
    <span
      className={`glitch ${hoverClass} ${className}`.trim()}
      style={inlineStyles}
      data-text={children}
    >
      {children}
    </span>
  );
};

export default GlitchText;
