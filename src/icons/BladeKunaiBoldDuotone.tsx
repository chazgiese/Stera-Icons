import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BladeKunaiBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BladeKunaiBoldDuotone = memo(
  forwardRef<SVGSVGElement, BladeKunaiBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="blade-kunai-bold-duotone" {...props}>
      <path fillRule="evenodd" d="m11.74 9.56 2.7 2.7.03.02-.58 3.48a1 1 0 0 1-.51.72l-9.9 5.4a1 1 0 0 1-1.36-1.36l5.4-9.9.06-.1a1 1 0 0 1 .66-.4l3.48-.59zM9.04 12l-3.53 6.48 6.48-3.53.6-3.54z" clipRule="evenodd" opacity={0.4} />
        <path d="M16.64 5.94a2.8 2.8 0 0 0 1.42 1.41L15.2 10.2 13.8 8.79z" opacity={0.4} />
        <path d="M11.74 8.14a1 1 0 0 1 1.42 0l2.7 2.7a1 1 0 0 1-1.42 1.42l-2.7-2.7a1 1 0 0 1 0-1.42" />
        <path fillRule="evenodd" d="M19.2 2a2.8 2.8 0 1 1 0 5.6 2.8 2.8 0 0 1 0-5.6m0 2a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6" clipRule="evenodd" />
    </IconBase>
  ))
);

BladeKunaiBoldDuotone.displayName = 'BladeKunaiBoldDuotone';

// Triple export pattern (lucide-react style)
export { BladeKunaiBoldDuotone, BladeKunaiBoldDuotone as BladeKunaiBoldDuotoneIcon, BladeKunaiBoldDuotone as SiBladeKunaiBoldDuotone };
export default BladeKunaiBoldDuotone;
export type { BladeKunaiBoldDuotoneProps };
