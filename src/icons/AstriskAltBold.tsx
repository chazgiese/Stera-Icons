import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AstriskAltBoldProps = Omit<IconBaseProps, 'children'>;

const AstriskAltBold = memo(
  forwardRef<SVGSVGElement, AstriskAltBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="astrisk-alt-bold" {...props}>
      <path fill="currentColor" d="M12 2c.6 0 1.16.21 1.55.59.39.37.58.88.45 1.41a34 34 0 0 0-.95 6.19 33 33 0 0 0 4.89-3.92c.39-.38.93-.46 1.45-.31.51.14.98.53 1.28 1.04.3.52.4 1.12.27 1.64-.14.52-.48.95-1 1.1A35 35 0 0 0 14.1 12a33 33 0 0 0 5.82 2.27c.53.15.87.58 1 1.1s.03 1.12-.27 1.63c-.3.52-.76.9-1.28 1.05s-1.06.07-1.45-.31a35 35 0 0 0-4.88-3.91A33 33 0 0 0 14 20c.13.53-.06 1.04-.45 1.41-.39.38-.95.59-1.55.59s-1.16-.21-1.55-.59A1.5 1.5 0 0 1 10 20a35 35 0 0 0 .95-6.17 33 33 0 0 0-4.87 3.9c-.4.39-.93.47-1.45.32A2.2 2.2 0 0 1 3.35 17c-.3-.51-.4-1.1-.27-1.63s.47-.95 1-1.1A35 35 0 0 0 9.9 12a33 33 0 0 0-5.83-2.26 1.5 1.5 0 0 1-1-1.1A2.2 2.2 0 0 1 3.35 7c.3-.51.77-.9 1.29-1.04a1.5 1.5 0 0 1 1.44.31 35 35 0 0 0 4.88 3.91A33 33 0 0 0 10 4c-.13-.53.06-1.04.45-1.41C10.84 2.2 11.4 2 12 2" />
    </IconBase>
  ))
);

AstriskAltBold.displayName = 'AstriskAltBold';

// Triple export pattern (lucide-react style)
export { AstriskAltBold, AstriskAltBold as AstriskAltBoldIcon, AstriskAltBold as SiAstriskAltBold };
export default AstriskAltBold;
export type { AstriskAltBoldProps };
