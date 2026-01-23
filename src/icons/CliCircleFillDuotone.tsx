import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CliCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CliCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, CliCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cli-circle-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22M8.2 7.8a1 1 0 0 0-1.4 1.4L9.58 12l-2.8 2.8a1 1 0 1 0 1.42 1.4l3.5-3.5a1 1 0 0 0 0-1.4zm4.8 6.7a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M6.8 7.8a1 1 0 0 1 1.4 0l3.5 3.5a1 1 0 0 1 0 1.4l-3.5 3.5a1 1 0 0 1-1.4-1.4L9.58 12l-2.8-2.8a1 1 0 0 1 0-1.4M17 14.5a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

CliCircleFillDuotone.displayName = 'CliCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { CliCircleFillDuotone, CliCircleFillDuotone as CliCircleFillDuotoneIcon, CliCircleFillDuotone as SiCliCircleFillDuotone };
export default CliCircleFillDuotone;
export type { CliCircleFillDuotoneProps };
