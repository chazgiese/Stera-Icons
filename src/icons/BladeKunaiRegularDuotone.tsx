import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BladeKunaiRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BladeKunaiRegularDuotone = memo(
  forwardRef<SVGSVGElement, BladeKunaiRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="blade-kunai-duotone" {...props}>
      <path fillRule="evenodd" d="m14.3 11.76-.66 3.96a.8.8 0 0 1-.38.54l-9.9 5.4a.75.75 0 0 1-1.02-1.02l5.4-9.9q.18-.31.54-.38l3.96-.66zm-5.42.02-4 7.34 7.34-4 .67-4z" clipRule="evenodd" opacity={0.4} />
        <path d="M16.95 6q.37.67 1.06 1.05l-3.15 3.15-1.06-1.06z" opacity={0.4} />
        <path fill="currentColor" d="M11.92 8.32c.3-.3.77-.3 1.06 0l2.7 2.7a.75.75 0 0 1-1.06 1.06l-2.7-2.7a.75.75 0 0 1 0-1.06" />
        <path fill="currentColor" fillRule="evenodd" d="M19.2 2.25a2.55 2.55 0 1 1 0 5.1 2.55 2.55 0 0 1 0-5.1m0 1.5a1.05 1.05 0 1 0 0 2.1 1.05 1.05 0 0 0 0-2.1" clipRule="evenodd" />
    </IconBase>
  ))
);

BladeKunaiRegularDuotone.displayName = 'BladeKunaiRegularDuotone';

// Triple export pattern (lucide-react style)
export { BladeKunaiRegularDuotone, BladeKunaiRegularDuotone as BladeKunaiRegularDuotoneIcon, BladeKunaiRegularDuotone as SiBladeKunaiRegularDuotone };
export default BladeKunaiRegularDuotone;
export type { BladeKunaiRegularDuotoneProps };
