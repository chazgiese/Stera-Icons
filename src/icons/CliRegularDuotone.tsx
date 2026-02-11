import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CliRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CliRegularDuotone = memo(
  forwardRef<SVGSVGElement, CliRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cli-duotone" {...props}>
      <path d="M20 17.75a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1 0-1.5z" opacity={.4} />
        <path d="M3.47 4.97c.3-.3.77-.3 1.06 0l6 6c.3.3.3.77 0 1.06l-6 6a.75.75 0 0 1-1.06-1.06l5.47-5.47-5.47-5.47a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

CliRegularDuotone.displayName = 'CliRegularDuotone';

// Triple export pattern (lucide-react style)
export { CliRegularDuotone, CliRegularDuotone as CliRegularDuotoneIcon, CliRegularDuotone as SiCliRegularDuotone };
export default CliRegularDuotone;
export type { CliRegularDuotoneProps };
