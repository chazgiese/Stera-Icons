import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LightbulbIcon = memo(
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
          fillRule="evenodd"
          d="M12 1.25a6.75 6.75 0 0 1 6.018 9.812c-.251.492-.529.983-.79 1.455-.266.478-.519.941-.74 1.407-.445.934-.738 1.824-.738 2.734V19c0 1.308-.914 2.4-2.138 2.679a1.75 1.75 0 0 1-3.225 0A2.75 2.75 0 0 1 8.25 19v-2.342c0-.91-.293-1.8-.737-2.734-.222-.466-.475-.93-.74-1.407-.263-.472-.54-.963-.79-1.455A6.75 6.75 0 0 1 12 1.25M9.75 19c0 .69.56 1.25 1.25 1.25h2c.69 0 1.25-.56 1.25-1.25v-.25h-4.5zm-.07-3.25q.069.444.07.908v.592h4.5v-.592q.001-.464.07-.908zm2.32-13a5.25 5.25 0 0 0-4.68 7.63c.235.462.494.922.764 1.408.266.48.54.98.783 1.491q.226.471.411.971h5.444q.185-.5.41-.97c.245-.513.518-1.012.784-1.492.27-.486.53-.946.765-1.408A5.25 5.25 0 0 0 12 2.75"
          clipRule="evenodd"
        />
      </svg>
    ))
);
LightbulbIcon.displayName = "LightbulbIcon";
export { LightbulbIcon };
