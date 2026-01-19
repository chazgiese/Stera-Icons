import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeDots0PercentFillProps = Omit<IconBaseProps, 'children'>;

const GaugeDots0PercentFill = memo(
  forwardRef<SVGSVGElement, GaugeDots0PercentFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-dots-0-percent-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m4.6 13.85a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-3.19-4.51a2 2 0 0 0-2.88.05c-.33.39-1.42 1.84-2.39 3.15l-1.32 1.78-.42.57-.11.16-.04.04v.01a1 1 0 0 0 1.4 1.4l.05-.04.16-.11.57-.42 1.78-1.32c1.3-.97 2.76-2.06 3.15-2.4l.05-.05a2 2 0 0 0 0-2.82M5.5 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m13 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M7.4 5.9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m9.2 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M12 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots0PercentFill.displayName = 'GaugeDots0PercentFill';

// Triple export pattern (lucide-react style)
export { GaugeDots0PercentFill, GaugeDots0PercentFill as GaugeDots0PercentFillIcon, GaugeDots0PercentFill as SiGaugeDots0PercentFill };
export default GaugeDots0PercentFill;
export type { GaugeDots0PercentFillProps };
