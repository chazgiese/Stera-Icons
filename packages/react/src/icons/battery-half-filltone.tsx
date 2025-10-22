import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BatteryHalfIconFilltone = memo(
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
          d="M15 5c.918 0 1.657 0 2.257.04.608.042 1.146.13 1.656.34a5 5 0 0 1 2.706 2.707c.183.44.27.903.319 1.413h.562A1.5 1.5 0 0 1 24 11v2a1.5 1.5 0 0 1-1.5 1.5h-.562c-.048.51-.136.973-.319 1.413a5 5 0 0 1-2.706 2.706c-.51.211-1.047.3-1.656.341-.6.04-1.339.04-2.257.04H7c-.918 0-1.657 0-2.257-.04-.608-.042-1.146-.13-1.656-.34A5 5 0 0 1 .38 15.912c-.211-.51-.3-1.047-.341-1.656C0 13.657 0 12.918 0 12s0-1.657.04-2.257c.042-.608.13-1.146.34-1.656A5 5 0 0 1 3.088 5.38c.51-.211 1.048-.3 1.656-.341C5.343 5 6.082 5 7 5z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M9.4 8c.264 0 .522-.001.739.017.228.018.498.063.77.2.328.169.604.424.796.737l.077.138.087.203c.072.2.1.395.114.566.018.217.017.475.017.739v2.8c0 .264.001.522-.017.739a2 2 0 0 1-.2.77 2 2 0 0 1-.875.873 2 2 0 0 1-.77.201c-.216.018-.474.017-.738.017H5.6c-.264 0-.522.001-.739-.017a2 2 0 0 1-.77-.2 2 2 0 0 1-.873-.875 2 2 0 0 1-.201-.77C2.999 13.923 3 13.665 3 13.4v-2.8c0-.264-.001-.522.017-.739.018-.228.063-.498.2-.77a2 2 0 0 1 .875-.873c.271-.138.54-.183.77-.201C5.077 7.999 5.335 8 5.6 8z"
        />
      </svg>
    ))
);
BatteryHalfIconFilltone.displayName = "BatteryHalfIconFilltone";
export { BatteryHalfIconFilltone };
