import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CanLabel = memo(
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
          d="M12 10.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M17.5 2.25a.75.75 0 0 1 0 1.5h-.208l.568.994c.583 1.02.89 2.175.89 3.35v7.812c0 1.175-.307 2.33-.89 3.35l-.633 1.108a2.75 2.75 0 0 1-2.387 1.386H9.16a2.75 2.75 0 0 1-2.388-1.386l-.632-1.108a6.75 6.75 0 0 1-.89-3.35V8.094c0-1.175.307-2.33.89-3.35l.568-.994H6.5a.75.75 0 0 1 0-1.5zM7.087 17.75q.146.394.354.762l.634 1.108c.223.39.637.63 1.085.63h5.68c.448 0 .862-.24 1.085-.63l.634-1.108q.209-.368.354-.762zm-.326-10a5 5 0 0 0-.011.344v7.812q0 .173.01.344h10.48q.01-.171.01-.344V8.094q0-.173-.01-.344zm.68-2.262q-.208.368-.354.762h9.826a5 5 0 0 0-.354-.762l-.995-1.738H8.437z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CanLabel.displayName = "CanLabel";
export { CanLabel };
