import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScissorsRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScissorsRegularDuotone = memo(
  forwardRef<SVGSVGElement, ScissorsRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scissors-duotone" {...props}>
      <path d="M22.16 16.7c.11.06.15.2.1.32-.35.67-1.13 1-1.85.78l-9.04-2.77q-.38-.12-.7-.36l4-2.3z" opacity={0.4} />
        <path fillRule="evenodd" d="M1.72 5.75a3.25 3.25 0 0 1 5.92 2.56l1.9 1.1a3 3 0 0 0-.32.62l-.33.84-.05-.13L6.9 9.6a3.25 3.25 0 0 1-5.17-3.86m3.69.11A1.75 1.75 0 1 0 3.66 8.9 1.75 1.75 0 0 0 5.4 5.86" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M20.38 6.1c.72-.24 1.5.09 1.84.76.06.12.02.26-.1.33l-14.5 8.38a3.25 3.25 0 1 1-.76-1.3l1.95-1.13 1.11-2.84c.25-.63.77-1.12 1.41-1.33zM6.02 15.62a1.75 1.75 0 1 0-3.04 1.75 1.75 1.75 0 0 0 3.04-1.75m5.48-5.13a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5" clipRule="evenodd" />
    </IconBase>
  ))
);

ScissorsRegularDuotone.displayName = 'ScissorsRegularDuotone';

// Triple export pattern (lucide-react style)
export { ScissorsRegularDuotone, ScissorsRegularDuotone as ScissorsRegularDuotoneIcon, ScissorsRegularDuotone as SiScissorsRegularDuotone };
export default ScissorsRegularDuotone;
export type { ScissorsRegularDuotoneProps };
