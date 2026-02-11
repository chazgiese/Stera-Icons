import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BladeKunaiBoldProps = Omit<IconBaseProps, 'children'>;

const BladeKunaiBold = memo(
  forwardRef<SVGSVGElement, BladeKunaiBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="blade-kunai-bold" {...props}>
      <path fillRule="evenodd" d="M18.4 3a2.6 2.6 0 1 1-1 5l-2.39 2.4.5.5a1 1 0 0 1-1.24 1.55l-.48 2.91a1 1 0 0 1-.51.72l-8.8 4.8a1 1 0 0 1-1.36-1.36l4.8-8.8a1 1 0 0 1 .72-.5l2.91-.5a1 1 0 0 1 1.56-1.23l.49.5 2.4-2.4A2.6 2.6 0 0 1 18.4 3m-8.96 9.1L6.5 17.5l5.4-2.94.48-2.94zM18.4 5a.6.6 0 1 0 0 1.2.6.6 0 0 0 0-1.2" clipRule="evenodd" />
    </IconBase>
  ))
);

BladeKunaiBold.displayName = 'BladeKunaiBold';

// Triple export pattern (lucide-react style)
export { BladeKunaiBold, BladeKunaiBold as BladeKunaiBoldIcon, BladeKunaiBold as SiBladeKunaiBold };
export default BladeKunaiBold;
export type { BladeKunaiBoldProps };
