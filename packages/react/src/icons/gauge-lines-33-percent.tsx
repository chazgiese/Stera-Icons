import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GaugeLines33PercentIcon = memo(
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
          d="M12 2.714c5.937 0 10.75 4.813 10.75 10.75 0 2.937-1.18 5.598-3.089 7.538a.749.749 0 0 1-1.12.063q-.011-.01-.021-.023l-2.097-2.097a.75.75 0 1 1 1.06-1.06l1.566 1.565a9.2 9.2 0 0 0 2.168-5.236H19a.75.75 0 0 1 0-1.5h2.217a9.2 9.2 0 0 0-2.17-5.24l-1.57 1.572a.75.75 0 0 1-1.061-1.06l1.57-1.572a9.2 9.2 0 0 0-5.231-2.167V6.47a.75.75 0 0 1-1.5 0V4.246a9.25 9.25 0 0 0-8.472 8.468H5a.75.75 0 0 1 0 1.5H2.783c.16 1.99.947 3.8 2.167 5.236l1.567-1.565a.75.75 0 1 1 1.06 1.06L5.48 21.042l-.02.023a.75.75 0 0 1-1.121-.063 10.72 10.72 0 0 1-3.088-7.538c0-5.937 4.813-10.75 10.75-10.75"
        />
        <path
          fill="currentColor"
          d="M6.52 7.983a.75.75 0 0 1 .974-.073l.004.003.052.037.159.118a651 651 0 0 1 2.355 1.74c1.31.975 2.755 2.057 3.131 2.38l.042.039a1.75 1.75 0 0 1-2.474 2.474l-.04-.042c-.323-.376-1.405-1.82-2.38-3.132-.493-.664-.967-1.307-1.318-1.783l-.42-.571-.119-.16-.038-.051-.002-.003-.071-.117a.75.75 0 0 1 .145-.859"
        />
      </svg>
    ))
);
GaugeLines33PercentIcon.displayName = "GaugeLines33PercentIcon";
export { GaugeLines33PercentIcon };
