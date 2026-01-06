import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ToolsIconFillDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M6.192 13.016c.483.08.973.104 1.46.065l3.266 3.266c-.039.487-.017.977.064 1.46l-3.2 3.201a3.388 3.388 0 0 1-4.79-4.79zM19.793 2.069a1 1 0 0 1 1.07.225l.843.843a1 1 0 0 1 .15 1.222l-1.265 2.11a1 1 0 0 1-1.565.193l-.137-.137-3.47 3.468-1.414-1.414 3.469-3.469-.136-.137a1 1 0 0 1 .192-1.564l2.11-1.266z" />
        </g>
        <path
          fill="currentColor"
          d="M6.03 2.9a4.425 4.425 0 0 1 5.455 5.278l4.337 4.337A4.422 4.422 0 0 1 21.1 17.97a.25.25 0 0 1-.177.178.25.25 0 0 1-.241-.066l-1.377-1.377h-2.6v2.6l1.377 1.377a.25.25 0 0 1 .066.241.25.25 0 0 1-.178.177 4.425 4.425 0 0 1-5.455-5.279l-4.337-4.336A4.42 4.42 0 0 1 2.901 6.03l.025-.062a.25.25 0 0 1 .393-.05l1.377 1.376h2.6v-2.6L5.917 3.32a.25.25 0 0 1-.065-.242.25.25 0 0 1 .178-.176"
        />
      </svg>
    ))
);
ToolsIconFillDuotone.displayName = "ToolsIconFillDuotone";
export { ToolsIconFillDuotone };
