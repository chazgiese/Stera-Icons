import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const VideoOffIconLinetone = memo(
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
        <g fill="currentColor" opacity={0.32}>
          <path d="M2.333 6.019a1 1 0 0 1 1.334 1.49 2 2 0 0 0-.45.583c-.079.156-.144.38-.18.82C3 9.361 3 9.942 3 10.8v2.4c0 .857 0 1.439.037 1.889.036.438.101.663.18.82a2 2 0 0 0 .875.873c.156.08.38.145.82.18C5.361 17 5.942 17 6.8 17h5.4c.857 0 1.439 0 1.889-.037.438-.036.663-.101.82-.18a1 1 0 1 1 .907 1.781c-.485.248-1.002.346-1.564.392-.55.045-1.228.044-2.052.044H6.8c-.824 0-1.502.001-2.052-.044-.562-.046-1.08-.144-1.564-.392a4 4 0 0 1-1.748-1.748c-.248-.485-.346-1.002-.392-1.564C.999 14.702 1 14.024 1 13.2v-2.4c0-.824-.001-1.502.044-2.052.046-.562.144-1.08.392-1.564a4 4 0 0 1 .897-1.165" />
          <path
            fillRule="evenodd"
            d="M12.2 5c.824 0 1.502-.001 2.052.044.562.046 1.08.144 1.564.392a4 4 0 0 1 1.748 1.748c.248.485.346 1.002.392 1.564q.007.097.01.196l3.409-2.725A1.001 1.001 0 0 1 23 7v10a1 1 0 0 1-1.625.781l-5-4A1 1 0 0 1 16 13v-2.2c0-.857 0-1.439-.037-1.889-.036-.438-.101-.663-.18-.82a2 2 0 0 0-.875-.873c-.156-.08-.38-.145-.82-.18C13.639 7 13.058 7 12.2 7H6.934a1 1 0 1 1 0-2zm5.8 6.48v1.039l3 2.399V9.081z"
            clipRule="evenodd"
          />
        </g>
        <path
          fill="currentColor"
          d="M.229 4.364a1 1 0 0 1 1.407-.136l17 14a1 1 0 0 1-1.271 1.543l-17-14a1 1 0 0 1-.136-1.407"
        />
      </svg>
    ))
);
VideoOffIconLinetone.displayName = "VideoOffIconLinetone";
export { VideoOffIconLinetone };
