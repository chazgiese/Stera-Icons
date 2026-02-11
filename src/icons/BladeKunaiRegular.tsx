import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BladeKunaiRegularProps = Omit<IconBaseProps, 'children'>;

const BladeKunaiRegular = memo(
  forwardRef<SVGSVGElement, BladeKunaiRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="blade-kunai" {...props}>
      <path fillRule="evenodd" d="M18.4 3.25a2.35 2.35 0 1 1-1.04 4.45l-2.7 2.7.67.67a.75.75 0 0 1-1.06 1.06l-.17-.17-.56 3.36a.8.8 0 0 1-.38.54l-8.8 4.8a.75.75 0 0 1-1.02-1.02l4.8-8.8.05-.07q.18-.26.49-.31l3.36-.56-.17-.17a.75.75 0 0 1 1.06-1.06l.67.67 2.7-2.7a2.34 2.34 0 0 1 2.1-3.39m-9.12 8.63-3.4 6.24 6.24-3.4.57-3.4zm9.12-7.13a.85.85 0 1 0 0 1.7.85.85 0 0 0 0-1.7" clipRule="evenodd" />
    </IconBase>
  ))
);

BladeKunaiRegular.displayName = 'BladeKunaiRegular';

// Triple export pattern (lucide-react style)
export { BladeKunaiRegular, BladeKunaiRegular as BladeKunaiRegularIcon, BladeKunaiRegular as SiBladeKunaiRegular };
export default BladeKunaiRegular;
export type { BladeKunaiRegularProps };
