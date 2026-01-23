import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type OptionKeyRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const OptionKeyRegularDuotone = memo(
  forwardRef<SVGSVGElement, OptionKeyRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="option-key-duotone" {...props}>
      <path fill="currentColor" d="M21 4.25a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5z" opacity={.4} />
        <path fill="currentColor" d="M9 4.25c.3 0 .57.18.69.45l5.8 13.55H21a.75.75 0 0 1 0 1.5h-6a.8.8 0 0 1-.69-.45L8.51 5.75H3a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

OptionKeyRegularDuotone.displayName = 'OptionKeyRegularDuotone';

// Triple export pattern (lucide-react style)
export { OptionKeyRegularDuotone, OptionKeyRegularDuotone as OptionKeyRegularDuotoneIcon, OptionKeyRegularDuotone as SiOptionKeyRegularDuotone };
export default OptionKeyRegularDuotone;
export type { OptionKeyRegularDuotoneProps };
