import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AstriskAltFillProps = Omit<IconBaseProps, 'children'>;

const AstriskAltFill = memo(
  forwardRef<SVGSVGElement, AstriskAltFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="astrisk-alt-fill" {...props}>
      <path fill="currentColor" d="M12 2c.75 0 1.46.26 1.95.73.48.47.73 1.1.55 1.77a31 31 0 0 0-.85 4.65 30 30 0 0 0 3.59-3.06 1.8 1.8 0 0 1 1.8-.4A2.8 2.8 0 0 1 20.67 7c.37.66.5 1.4.33 2.06-.16.65-.59 1.18-1.25 1.36A31 31 0 0 0 15.3 12a30 30 0 0 0 4.45 1.59c.66.18 1.09.7 1.25 1.36.17.66.04 1.4-.34 2.05a2.8 2.8 0 0 1-1.6 1.33c-.65.18-1.33.07-1.81-.41a31 31 0 0 0-3.6-3.06 29 29 0 0 0 .85 4.64c.18.66-.07 1.3-.55 1.77A2.8 2.8 0 0 1 12 22a2.8 2.8 0 0 1-1.95-.73 1.8 1.8 0 0 1-.55-1.77 31 31 0 0 0 .85-4.65 29 29 0 0 0-3.6 3.07c-.49.49-1.16.6-1.8.4A2.8 2.8 0 0 1 3.32 17 2.8 2.8 0 0 1 3 14.95c.17-.65.6-1.18 1.26-1.36A31 31 0 0 0 8.7 12a29 29 0 0 0-4.44-1.58c-.67-.18-1.1-.7-1.26-1.36A2.8 2.8 0 0 1 3.34 7a2.8 2.8 0 0 1 1.61-1.32 1.8 1.8 0 0 1 1.8.4 31 31 0 0 0 3.6 3.07A29 29 0 0 0 9.5 4.5c-.18-.66.07-1.3.55-1.77A2.8 2.8 0 0 1 12 2" />
    </IconBase>
  ))
);

AstriskAltFill.displayName = 'AstriskAltFill';

// Triple export pattern (lucide-react style)
export { AstriskAltFill, AstriskAltFill as AstriskAltFillIcon, AstriskAltFill as SiAstriskAltFill };
export type { AstriskAltFillProps };
