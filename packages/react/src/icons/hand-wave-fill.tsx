import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HandWaveIconFill = memo(
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
          d="M2.629 16.071a1 1 0 0 1 1.3.558c.296.742 1.273 2.523 2.67 3.571A1 1 0 1 1 5.4 21.8c-1.802-1.352-2.959-3.504-3.329-4.429a1 1 0 0 1 .558-1.3M9.522 2.236a1.78 1.78 0 0 1 2.424.647l4.26 7.342a5.264 5.264 0 0 0-1.22 1.278 3.9 3.9 0 0 0-.66 1.9c-.05.758.134 1.604.664 2.518a.466.466 0 1 0 .805-.467c-.449-.773-.576-1.436-.54-1.991.036-.559.24-1.042.506-1.445.269-.405.597-.721.86-.937a4 4 0 0 1 .323-.241q.06-.04.09-.058l.021-.012.003-.003v-.001a.46.46 0 0 0 .234-.398l.035-3.612v-.004c0-.549.252-1.04.65-1.364A1.77 1.77 0 0 1 19.1 4.99c.982 0 1.774.791 1.774 1.762q0 .035.005.07l.56 3.685a.5.5 0 0 0 .025.095 8.42 8.42 0 0 1-3.71 10.264c-4.061 2.333-9.255.948-11.599-3.09l-3.918-6.75a1.757 1.757 0 0 1 .648-2.406c.797-.457 1.801-.23 2.327.493l.098.153 2.519 4.339a.466.466 0 0 0 .806-.467L4.436 5.905A1.757 1.757 0 0 1 5.085 3.5a1.78 1.78 0 0 1 2.424.647l3.918 6.75a.466.466 0 0 0 .804-.467L8.874 4.643c-.488-.842-.2-1.92.648-2.407M19.5 1.5c1.346 0 2.474.672 3.24 1.515C23.494 3.844 24 4.949 24 6a1 1 0 0 1-2 0c0-.45-.244-1.094-.74-1.64-.485-.532-1.107-.86-1.76-.86a1 1 0 0 1 0-2"
        />
      </svg>
    ))
);
HandWaveIconFill.displayName = "HandWaveIconFill";
export { HandWaveIconFill };
