import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeLines33PercentFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeLines33PercentFillDuotone = memo(
  forwardRef<SVGSVGElement, GaugeLines33PercentFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.46a11 11 0 0 1 7.78 18.78 1 1 0 0 1-.7.3H4.92a1 1 0 0 1-.7-.3A11 11 0 0 1 12 2.46M7.75 17.71a1 1 0 0 0-1.41 0l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06a1 1 0 0 0 0-1.41m9.91 0a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41zM7.64 7.7a1 1 0 0 0-1.4 1.4l.01.01.04.04.11.16.42.57 1.32 1.79c.97 1.3 2.06 2.76 2.4 3.14l.05.06A2 2 0 1 0 13.36 12c-.39-.33-1.84-1.42-3.15-2.4L7.86 7.88l-.16-.12-.04-.03zM3.5 12.46a1 1 0 0 0 0 2H5a1 1 0 0 0 0-2zm15.5 0a1 1 0 0 0 0 2h1.5a1 1 0 0 0 0-2zm-.29-5.71a1 1 0 0 0-1.41 0L16.24 7.8a1 1 0 0 0 1.41 1.41l1.06-1.06a1 1 0 0 0 0-1.41M12 3.96a1 1 0 0 0-1 1v1.51a1 1 0 0 0 2 0v-1.5a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M6.34 17.7a1 1 0 1 1 1.41 1.42L6.7 20.18a1 1 0 0 1-1.41-1.41zM16.25 17.7a1 1 0 0 1 1.41 0l1.06 1.07a1 1 0 0 1-1.41 1.41l-1.06-1.06a1 1 0 0 1 0-1.41M6.34 7.8a1 1 0 0 1 1.3-.1v.01h.02q0 .03.04.04l.16.12L10.2 9.6a105 105 0 0 1 3.2 2.44 2 2 0 0 1-2.82 2.83l-.06-.06c-.33-.38-1.42-1.84-2.39-3.14L6.82 9.89l-.42-.57-.11-.16-.04-.04v-.01a1 1 0 0 1 .1-1.3M5 12.46a1 1 0 0 1 0 2H3.5a1 1 0 0 1 0-2zM20.5 12.46a1 1 0 0 1 0 2H19a1 1 0 0 1 0-2zM17.3 6.75a1 1 0 1 1 1.41 1.41l-1.06 1.06a1 1 0 0 1-1.41-1.41zM12 3.96a1 1 0 0 1 1 1v1.5a1 1 0 0 1-2 .01v-1.5a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

GaugeLines33PercentFillDuotone.displayName = 'GaugeLines33PercentFillDuotone';

export { GaugeLines33PercentFillDuotone };
export type { GaugeLines33PercentFillDuotoneProps };
