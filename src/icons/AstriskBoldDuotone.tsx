import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AstriskBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const AstriskBoldDuotone = memo(
  forwardRef<SVGSVGElement, AstriskBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="astrisk-bold-duotone" {...props}>
      <path d="M11 12.57v1.16l-7.16 4.13a1 1 0 0 1-1-1.73L10 11.99zM21.17 16.13a1 1 0 1 1-1 1.73L13 13.72v-1.15l1-.58zM12 1a1 1 0 0 1 1 1v8.26l-1 .58-1-.58V2a1 1 0 0 1 1-1" opacity={0.4} />
        <path fill="currentColor" d="M20.16 6.13a1 1 0 0 1 1 1.73L13 12.57V22a1 1 0 1 1-2 0v-9.43l-8.15-4.7a1 1 0 0 1 1-1.74l8.15 4.7z" />
    </IconBase>
  ))
);

AstriskBoldDuotone.displayName = 'AstriskBoldDuotone';

// Triple export pattern (lucide-react style)
export { AstriskBoldDuotone, AstriskBoldDuotone as AstriskBoldDuotoneIcon, AstriskBoldDuotone as SiAstriskBoldDuotone };
export type { AstriskBoldDuotoneProps };
