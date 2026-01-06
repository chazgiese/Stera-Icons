import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ToolsIconFill = memo(
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
          d="M6.194 13.016c.482.08.972.104 1.459.065l3.266 3.266c-.039.486-.017.977.064 1.46l-3.2 3.201a3.388 3.388 0 0 1-4.79-4.79z"
        />
        <path
          fill="currentColor"
          d="M6.03 2.9a4.424 4.424 0 0 1 5.455 5.278l4.337 4.337A4.422 4.422 0 0 1 21.1 17.97a.25.25 0 0 1-.177.178.25.25 0 0 1-.241-.066l-1.377-1.376h-2.6v2.6l1.377 1.376a.25.25 0 0 1 .066.241.25.25 0 0 1-.178.177 4.425 4.425 0 0 1-5.455-5.278l-4.337-4.337A4.422 4.422 0 0 1 2.901 6.03l.025-.062a.25.25 0 0 1 .393-.05l1.377 1.376h2.6v-2.6L5.917 3.32a.25.25 0 0 1-.065-.241.25.25 0 0 1 .178-.177"
        />
        <path
          fill="currentColor"
          d="M19.794 2.069a1 1 0 0 1 1.07.224l.843.844c.324.325.386.829.15 1.222l-1.265 2.11a1.002 1.002 0 0 1-1.564.193l-.138-.137-3.47 3.468-1.414-1.414 3.469-3.47-.136-.136a1 1 0 0 1 .193-1.564l2.11-1.266z"
        />
      </svg>
    ))
);
ToolsIconFill.displayName = "ToolsIconFill";
export { ToolsIconFill };
