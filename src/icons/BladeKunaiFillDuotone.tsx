import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BladeKunaiFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BladeKunaiFillDuotone = memo(
  forwardRef<SVGSVGElement, BladeKunaiFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="blade-kunai-fill-duotone" {...props}>
      <path d="m11.74 9.56 2.7 2.7.03.02-.58 3.48a1 1 0 0 1-.51.72l-9.9 5.4a1 1 0 0 1-1.36-1.36l5.4-9.9.06-.1a1 1 0 0 1 .66-.4l3.48-.59zM16.64 5.94a2.8 2.8 0 0 0 1.42 1.41L15.2 10.2 13.8 8.79z" opacity={0.4} />
        <path fill="currentColor" d="M11.74 8.14a1 1 0 0 1 1.42 0l2.7 2.7a1 1 0 0 1-1.42 1.42l-2.7-2.7a1 1 0 0 1 0-1.42M19.2 2a2.8 2.8 0 1 1 0 5.6 2.8 2.8 0 0 1 0-5.6" />
    </IconBase>
  ))
);

BladeKunaiFillDuotone.displayName = 'BladeKunaiFillDuotone';

// Triple export pattern (lucide-react style)
export { BladeKunaiFillDuotone, BladeKunaiFillDuotone as BladeKunaiFillDuotoneIcon, BladeKunaiFillDuotone as SiBladeKunaiFillDuotone };
export default BladeKunaiFillDuotone;
export type { BladeKunaiFillDuotoneProps };
