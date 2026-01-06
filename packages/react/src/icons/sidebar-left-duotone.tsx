import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SidebarLeftIconDuotone = memo(
  forwardRef < SVGSVGElement,
  IconProps >
    ((
      {
        size = 24,
        color = "currentColor",
        className,
        "aria-label": ariaLabel,
        "aria-hidden": ariaHidden,
        ...props
      },
      ref
    ) => (
      <svg
        fill={color}
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        aria-label={ariaLabel}
        aria-hidden={ariaHidden}
        ref={ref}
        {...props}
      >
        <path
          fill="currentColor"
          d="M15.6 3.25c1.107 0 1.984 0 2.688.057.713.058 1.317.18 1.868.46a4.75 4.75 0 0 1 2.076 2.077c.281.55.403 1.155.461 1.868.058.705.057 1.58.057 2.688v3.2c0 1.107 0 1.984-.057 2.688-.058.713-.18 1.317-.46 1.868a4.75 4.75 0 0 1-2.077 2.076c-.55.281-1.155.403-1.868.461-.704.058-1.58.057-2.688.057H9.75v-1.5h5.85c1.132 0 1.937 0 2.566-.052.62-.05 1.005-.147 1.31-.303a3.25 3.25 0 0 0 1.42-1.42c.155-.304.252-.688.302-1.309.052-.63.052-1.434.052-2.566v-3.2c0-1.132 0-1.937-.052-2.566-.05-.62-.147-1.005-.303-1.31a3.25 3.25 0 0 0-1.42-1.42c-.304-.155-.688-.252-1.309-.302-.63-.052-1.434-.052-2.566-.052H9.75v-1.5z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9.75 20.75H8.4c-1.107 0-1.983 0-2.688-.057-.713-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.077c-.281-.55-.403-1.155-.461-1.868-.058-.704-.057-1.58-.057-2.688v-3.2c0-1.107 0-1.983.057-2.688.058-.713.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.155-.403 1.868-.461.705-.058 1.58-.057 2.688-.057h1.35zm-1.5-16c-1.054 0-1.815.003-2.416.052-.62.05-1.005.147-1.31.302a3.25 3.25 0 0 0-1.42 1.42c-.155.305-.252.69-.302 1.31-.052.63-.052 1.434-.052 2.566v3.2c0 1.132 0 1.937.052 2.566.05.62.147 1.005.302 1.31a3.25 3.25 0 0 0 1.42 1.42c.305.155.69.252 1.31.302.601.05 1.362.05 2.416.051z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SidebarLeftIconDuotone.displayName = "SidebarLeftIconDuotone";
export { SidebarLeftIconDuotone };
