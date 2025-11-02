import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RocketIcon = memo(
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
          d="M13.5 19.25a.75.75 0 0 1 .75.75c0 .316-.112.651-.268.96-.421.84-1.168 1.387-1.982 1.938-.815-.55-1.561-1.097-1.982-1.937-.156-.31-.268-.645-.268-.961a.75.75 0 0 1 .75-.75zM12 7.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.584 1.376a.75.75 0 0 1 .832 0c2.36 1.573 3.776 3.372 4.542 5.21a9.8 9.8 0 0 1 .72 3.031l2.852 2.853a.75.75 0 0 1 .211.644l-1 6.5a.75.75 0 0 1-1.139.522l-3.817-2.386h-5.57l-3.818 2.386a.75.75 0 0 1-1.138-.522l-1-6.5a.75.75 0 0 1 .21-.644l2.852-2.853a9.8 9.8 0 0 1 .72-3.03c.767-1.839 2.184-3.638 4.543-5.211M4.799 13.26l.768 5 2.42-1.513c-.137-.252-.3-.568-.468-.94-.442-.983-.939-2.37-1.138-3.965l-.017-.148zm12.82-1.418c-.2 1.595-.696 2.982-1.139 3.965-.167.372-.331.688-.467.94l2.42 1.513.768-5-1.566-1.566zM12 2.913c-1.882 1.349-2.975 2.817-3.572 4.25-.642 1.541-.733 3.093-.558 4.494.176 1.405.617 2.643 1.019 3.535.2.445.387.799.524 1.04l.01.018h5.155l.01-.019c.138-.24.326-.594.526-1.039.402-.892.842-2.13 1.018-3.535.175-1.401.084-2.953-.558-4.494-.597-1.433-1.69-2.901-3.573-4.25"
          clipRule="evenodd"
        />
      </svg>
    ))
);
RocketIcon.displayName = "RocketIcon";
export { RocketIcon };
