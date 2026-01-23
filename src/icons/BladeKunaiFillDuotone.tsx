import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BladeKunaiFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BladeKunaiFillDuotone = memo(
  forwardRef<SVGSVGElement, BladeKunaiFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="blade-kunai-fill-duotone" {...props}>
      <path d="m14.67 12.08-.68 4.08a1 1 0 0 1-.51.72l-11 6a1 1 0 0 1-1.36-1.36l6-11 .06-.1a1 1 0 0 1 .66-.4l4.08-.69zM17.3 5.29a3 3 0 0 0 1.4 1.42L15.42 10 14 8.59z" opacity={0.4} />
        <path fill="currentColor" d="M11.8 7.8a1 1 0 0 1 1.4 0l3 3a1 1 0 1 1-1.4 1.4l-3-3a1 1 0 0 1 0-1.4M20 1a3 3 0 1 1 0 6 3 3 0 0 1 0-6" />
    </IconBase>
  ))
);

BladeKunaiFillDuotone.displayName = 'BladeKunaiFillDuotone';

// Triple export pattern (lucide-react style)
export { BladeKunaiFillDuotone, BladeKunaiFillDuotone as BladeKunaiFillDuotoneIcon, BladeKunaiFillDuotone as SiBladeKunaiFillDuotone };
export default BladeKunaiFillDuotone;
export type { BladeKunaiFillDuotoneProps };
