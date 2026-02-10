import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CliCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CliCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, CliCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cli-circle-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M7.47 8.47c.3-.3.77-.3 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06-1.06L9.94 12 7.47 9.53a.75.75 0 0 1 0-1.06M16.5 14.25a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

CliCircleRegularDuotone.displayName = 'CliCircleRegularDuotone';

// Triple export pattern (lucide-react style)
export { CliCircleRegularDuotone, CliCircleRegularDuotone as CliCircleRegularDuotoneIcon, CliCircleRegularDuotone as SiCliCircleRegularDuotone };
export default CliCircleRegularDuotone;
export type { CliCircleRegularDuotoneProps };
