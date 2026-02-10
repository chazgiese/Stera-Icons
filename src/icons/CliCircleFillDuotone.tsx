import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CliCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CliCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, CliCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cli-circle-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20M8.7 8.3a1 1 0 0 0-1.4 1.4L9.58 12l-2.3 2.3a1 1 0 0 0 1.42 1.4l3-3a1 1 0 0 0 0-1.4zm3.8 5.7a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M7.3 8.3a1 1 0 0 1 1.4 0l3 3a1 1 0 0 1 0 1.4l-3 3a1 1 0 0 1-1.4-1.4L9.58 12l-2.3-2.3a1 1 0 0 1 0-1.4M16.5 14a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

CliCircleFillDuotone.displayName = 'CliCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { CliCircleFillDuotone, CliCircleFillDuotone as CliCircleFillDuotoneIcon, CliCircleFillDuotone as SiCliCircleFillDuotone };
export default CliCircleFillDuotone;
export type { CliCircleFillDuotoneProps };
