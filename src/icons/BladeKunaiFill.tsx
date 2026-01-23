import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BladeKunaiFillProps = Omit<IconBaseProps, 'children'>;

const BladeKunaiFill = memo(
  forwardRef<SVGSVGElement, BladeKunaiFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="blade-kunai-fill" {...props}>
      <path fill="currentColor" d="M20 1a3 3 0 1 1-1.3 5.7L15.42 10l.8.8a1 1 0 1 1-1.42 1.4l-.12-.12-.68 4.08a1 1 0 0 1-.51.72l-11 6a1 1 0 0 1-1.36-1.36l6-11 .06-.1a1 1 0 0 1 .66-.4l4.08-.69-.13-.12a1 1 0 1 1 1.42-1.42l.79.8 3.3-3.3A2.98 2.98 0 0 1 20 1" />
    </IconBase>
  ))
);

BladeKunaiFill.displayName = 'BladeKunaiFill';

// Triple export pattern (lucide-react style)
export { BladeKunaiFill, BladeKunaiFill as BladeKunaiFillIcon, BladeKunaiFill as SiBladeKunaiFill };
export default BladeKunaiFill;
export type { BladeKunaiFillProps };
