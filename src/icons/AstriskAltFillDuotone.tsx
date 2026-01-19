import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AstriskAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AstriskAltFillDuotone = memo(
  forwardRef<SVGSVGElement, AstriskAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="astrisk-alt-fill-duotone" {...props}>
      <path d="M12 13.75q.83.53 1.65 1.1a30 30 0 0 0 .85 4.65c.18.66-.07 1.3-.55 1.77A2.8 2.8 0 0 1 12 22a2.8 2.8 0 0 1-1.95-.73 1.8 1.8 0 0 1-.55-1.77 31 31 0 0 0 .85-4.65q.81-.58 1.65-1.1M4.95 5.68a1.8 1.8 0 0 1 1.8.4 31 31 0 0 0 3.6 3.07q.1.99.14 1.98-.88.46-1.79.87a29 29 0 0 0-4.44-1.59c-.67-.17-1.1-.7-1.26-1.36-.16-.65-.04-1.4.34-2.05s.96-1.14 1.6-1.32M17.25 6.08a1.8 1.8 0 0 1 1.8-.4A2.8 2.8 0 0 1 20.66 7c.38.65.5 1.4.34 2.05-.16.66-.6 1.19-1.25 1.36A31 31 0 0 0 15.3 12q-.91-.4-1.79-.87.03-.99.14-1.98a30 30 0 0 0 3.6-3.07" opacity={0.4} />
        <path fill="currentColor" d="M12 2c.75 0 1.46.26 1.95.73.48.47.73 1.1.55 1.77l-.19.75a29 29 0 0 0-.8 5.88 29 29 0 0 0 6.24 2.46c.66.17 1.09.7 1.25 1.36.16.65.04 1.4-.34 2.05a2.8 2.8 0 0 1-1.6 1.32c-.66.19-1.33.08-1.81-.4A31 31 0 0 0 12 13.75a29 29 0 0 0-5.24 4.16c-.49.5-1.16.6-1.81.41A2.8 2.8 0 0 1 3.34 17c-.38-.65-.5-1.4-.34-2.05.16-.66.6-1.19 1.26-1.36l.74-.21a29 29 0 0 0 5.49-2.26A29 29 0 0 0 9.5 4.5c-.18-.66.07-1.3.55-1.77S11.25 2 12 2" />
    </IconBase>
  ))
);

AstriskAltFillDuotone.displayName = 'AstriskAltFillDuotone';

// Triple export pattern (lucide-react style)
export { AstriskAltFillDuotone, AstriskAltFillDuotone as AstriskAltFillDuotoneIcon, AstriskAltFillDuotone as SiAstriskAltFillDuotone };
export default AstriskAltFillDuotone;
export type { AstriskAltFillDuotoneProps };
