import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BladeKunaiBoldProps = Omit<IconBaseProps, 'children'>;

const BladeKunaiBold = memo(
  forwardRef<SVGSVGElement, BladeKunaiBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="blade-kunai-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M20 1a3 3 0 1 1-1.3 5.7L15.42 10l.8.8a1 1 0 1 1-1.42 1.4l-.12-.12-.68 4.08a1 1 0 0 1-.51.72l-11 6a1 1 0 0 1-1.36-1.36l6-11 .06-.1a1 1 0 0 1 .66-.4l4.08-.69-.13-.12a1 1 0 1 1 1.42-1.42l.79.8 3.3-3.3A2.98 2.98 0 0 1 20 1M8.64 11.9 4.5 19.5l7.6-4.15.68-4.13zM20 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2" clipRule="evenodd" />
    </IconBase>
  ))
);

BladeKunaiBold.displayName = 'BladeKunaiBold';

// Triple export pattern (lucide-react style)
export { BladeKunaiBold, BladeKunaiBold as BladeKunaiBoldIcon, BladeKunaiBold as SiBladeKunaiBold };
export type { BladeKunaiBoldProps };
