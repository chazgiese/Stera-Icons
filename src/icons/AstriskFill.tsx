import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AstriskFillProps = Omit<IconBaseProps, 'children'>;

const AstriskFill = memo(
  forwardRef<SVGSVGElement, AstriskFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="astrisk-fill" {...props}>
      <path fill="currentColor" d="M12 .5c.83 0 1.5.67 1.5 1.5v7.4l6.41-3.7a1.5 1.5 0 0 1 1.5 2.6l-6.4 3.7 6.4 3.7a1.5 1.5 0 0 1-1.5 2.6l-6.41-3.71V22a1.5 1.5 0 0 1-3 0v-7.4l-6.4 3.7a1.5 1.5 0 0 1-1.5-2.6L9 12 2.6 8.3a1.5 1.5 0 0 1 1.5-2.6l6.4 3.7V2c0-.83.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

AstriskFill.displayName = 'AstriskFill';

// Triple export pattern (lucide-react style)
export { AstriskFill, AstriskFill as AstriskFillIcon, AstriskFill as SiAstriskFill };
export type { AstriskFillProps };
