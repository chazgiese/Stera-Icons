import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SlashRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SlashRegularDuotone = memo(
  forwardRef<SVGSVGElement, SlashRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="slash-duotone" {...props}>
      <path fill="currentColor" d="m12.56 12.5-8 9a.75.75 0 0 1-1.12-1l8-9z" opacity={.4} />
        <path fill="currentColor" d="M19.44 2.5a.75.75 0 0 1 1.12 1l-8 9-1.12-1z" />
    </IconBase>
  ))
);

SlashRegularDuotone.displayName = 'SlashRegularDuotone';

// Triple export pattern (lucide-react style)
export { SlashRegularDuotone, SlashRegularDuotone as SlashRegularDuotoneIcon, SlashRegularDuotone as SiSlashRegularDuotone };
export default SlashRegularDuotone;
export type { SlashRegularDuotoneProps };
