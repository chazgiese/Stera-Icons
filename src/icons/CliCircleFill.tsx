import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CliCircleFillProps = Omit<IconBaseProps, 'children'>;

const CliCircleFill = memo(
  forwardRef<SVGSVGElement, CliCircleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="cli-circle-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20M8.7 8.3a1 1 0 1 0-1.4 1.4L9.58 12l-2.3 2.3a1 1 0 1 0 1.42 1.4l3-3a1 1 0 0 0 0-1.4zm3.8 5.7a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

CliCircleFill.displayName = 'CliCircleFill';

// Triple export pattern (lucide-react style)
export { CliCircleFill, CliCircleFill as CliCircleFillIcon, CliCircleFill as SiCliCircleFill };
export default CliCircleFill;
export type { CliCircleFillProps };
