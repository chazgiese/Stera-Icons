import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SquarePlaceholderIconFill = memo(
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
          d="M14.919 21.99q-.853.012-1.919.01h-1.96L2 12.96V11c0-.712 0-1.348.01-1.919zM8.902 21.984c-.466-.01-.886-.024-1.267-.055-.896-.073-1.66-.227-2.359-.583a6 6 0 0 1-2.622-2.622c-.356-.7-.51-1.463-.583-2.359a21 21 0 0 1-.056-1.268zM19.678 20.738q-.446.347-.954.608c-.55.28-1.142.433-1.805.522L2.13 7.08c.089-.663.243-1.253.523-1.804q.26-.508.607-.955zM21.868 16.919c-.089.663-.242 1.254-.522 1.805a6 6 0 0 1-.608.954L4.321 3.26q.447-.346.955-.607c.55-.28 1.141-.434 1.804-.523zM22 11.04V13c0 .712-.001 1.348-.01 1.919L9.08 2.009C9.651 2 10.288 2 11 2h1.96zM15.097 2.015c.466.01.887.025 1.268.056.896.073 1.66.227 2.359.583a6 6 0 0 1 2.622 2.622c.356.7.51 1.463.583 2.359q.043.569.055 1.267z"
        />
      </svg>
    ))
);
SquarePlaceholderIconFill.displayName = "SquarePlaceholderIconFill";
export { SquarePlaceholderIconFill };
