import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AstriskFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AstriskFillDuotone = memo(
  forwardRef<SVGSVGElement, AstriskFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="astrisk-fill-duotone" {...props}>
      <path d="M13.5 14.59V22a1.5 1.5 0 0 1-3 0v-7.4l1.5-.87zM2.05 6.25A1.5 1.5 0 0 1 4.1 5.7l6.4 3.7v1.73L9 12 2.6 8.3a1.5 1.5 0 0 1-.55-2.04M19.91 5.7a1.5 1.5 0 0 1 1.5 2.6l-6.4 3.7-1.51-.88V9.4z" opacity={0.4} />
        <path fill="currentColor" d="M12 .5c.83 0 1.5.67 1.5 1.5v9.12l7.92 4.58a1.5 1.5 0 0 1-1.5 2.6L12 13.72l-7.9 4.56a1.5 1.5 0 0 1-1.5-2.6l7.9-4.56V2c0-.83.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

AstriskFillDuotone.displayName = 'AstriskFillDuotone';

// Triple export pattern (lucide-react style)
export { AstriskFillDuotone, AstriskFillDuotone as AstriskFillDuotoneIcon, AstriskFillDuotone as SiAstriskFillDuotone };
export type { AstriskFillDuotoneProps };
