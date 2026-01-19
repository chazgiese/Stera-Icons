import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BladeKunaiBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BladeKunaiBoldDuotone = memo(
  forwardRef<SVGSVGElement, BladeKunaiBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="blade-kunai-bold-duotone" {...props}>
      <path fillRule="evenodd" d="m14.67 12.08-.68 4.08a1 1 0 0 1-.51.72l-11 6a1 1 0 0 1-1.36-1.36l6-11 .06-.1a1 1 0 0 1 .66-.4l4.08-.69zm-6.03-.17-4.13 7.58 7.58-4.14.7-4.13z" clipRule="evenodd" opacity={0.4} />
        <path d="M17.3 5.29a3 3 0 0 0 1.4 1.41L15.42 10 14 8.59z" opacity={0.4} />
        <path fill="currentColor" d="M11.8 7.8a1 1 0 0 1 1.4 0l3 3a1 1 0 1 1-1.4 1.4l-3-3a1 1 0 0 1 0-1.4" />
        <path fill="currentColor" fillRule="evenodd" d="M20 1a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2" clipRule="evenodd" />
    </IconBase>
  ))
);

BladeKunaiBoldDuotone.displayName = 'BladeKunaiBoldDuotone';

// Triple export pattern (lucide-react style)
export { BladeKunaiBoldDuotone, BladeKunaiBoldDuotone as BladeKunaiBoldDuotoneIcon, BladeKunaiBoldDuotone as SiBladeKunaiBoldDuotone };
export default BladeKunaiBoldDuotone;
export type { BladeKunaiBoldDuotoneProps };
