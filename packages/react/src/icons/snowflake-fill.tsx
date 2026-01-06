import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SnowflakeIconFill = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2.1a.9.9 0 0 0-.9.9v1.44l-.65-.375a.9.9 0 0 0-.9 1.56l1.55.894v2.922l-2.529-1.46v-1.79a.9.9 0 0 0-1.8 0v.751l-1.249-.72a.9.9 0 1 0-.9 1.558l1.25.721-.652.375a.901.901 0 0 0 .901 1.559l1.55-.895L10.2 12l-2.53 1.46-1.55-.895a.9.9 0 0 0-.901 1.56l.65.375-1.248.72a.9.9 0 1 0 .9 1.56l1.249-.721-.001.752a.902.902 0 0 0 1.8-.001v-1.79l2.53-1.461v2.92l-1.55.896a.9.9 0 0 0 .9 1.56l.65-.376V20a.9.9 0 1 0 1.8 0v-1.441l.65.376a.901.901 0 0 0 .9-1.56l-1.55-.895V13.56l2.532 1.462-.001 1.789a.9.9 0 0 0 1.8 0v-.75l1.247.72a.9.9 0 1 0 .9-1.559l-1.247-.72.65-.376a.9.9 0 0 0-.901-1.559l-1.548.896L13.8 12l2.531-1.46 1.549.895a.901.901 0 0 0 .901-1.559l-.65-.376 1.248-.72a.9.9 0 0 0-.9-1.56l-1.248.721v-.75a.9.9 0 0 0-1.8 0v1.79l-2.53 1.46V7.52l1.55-.894a.901.901 0 0 0-.9-1.56l-.65.375V4c0-.497-.404-.9-.901-.9"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SnowflakeIconFill.displayName = "SnowflakeIconFill";
export { SnowflakeIconFill };
