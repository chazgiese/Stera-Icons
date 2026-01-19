import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BladeKunaiRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BladeKunaiRegularDuotone = memo(
  forwardRef<SVGSVGElement, BladeKunaiRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="blade-kunai-duotone" {...props}>
      <path fillRule="evenodd" d="m14.5 11.56-.76 4.56a.8.8 0 0 1-.38.54l-11 6a.75.75 0 0 1-1.02-1.02l6-11 .05-.07q.18-.25.49-.31l4.56-.76zm-6.02.12-4.6 8.44 8.44-4.6.77-4.6z" clipRule="evenodd" opacity={0.4} />
        <path d="M17.6 5.34q.39.67 1.06 1.06l-3.6 3.6L14 8.94z" opacity={0.4} />
        <path fill="currentColor" d="M11.97 7.97c.3-.3.77-.3 1.06 0l3 3a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06" />
        <path fill="currentColor" fillRule="evenodd" d="M20 1.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clipRule="evenodd" />
    </IconBase>
  ))
);

BladeKunaiRegularDuotone.displayName = 'BladeKunaiRegularDuotone';

// Triple export pattern (lucide-react style)
export { BladeKunaiRegularDuotone, BladeKunaiRegularDuotone as BladeKunaiRegularDuotoneIcon, BladeKunaiRegularDuotone as SiBladeKunaiRegularDuotone };
export default BladeKunaiRegularDuotone;
export type { BladeKunaiRegularDuotoneProps };
