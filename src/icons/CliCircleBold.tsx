import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CliCircleBoldProps = Omit<IconBaseProps, 'children'>;

const CliCircleBold = memo(
  forwardRef<SVGSVGElement, CliCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="cli-circle-bold" {...props}>
      <path fill="currentColor" d="M7.3 8.3a1 1 0 0 1 1.4 0l3 3a1 1 0 0 1 0 1.4l-3 3a1 1 0 1 1-1.4-1.4L9.58 12l-2.3-2.3a1 1 0 0 1 0-1.4M16.5 14a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

CliCircleBold.displayName = 'CliCircleBold';

// Triple export pattern (lucide-react style)
export { CliCircleBold, CliCircleBold as CliCircleBoldIcon, CliCircleBold as SiCliCircleBold };
export default CliCircleBold;
export type { CliCircleBoldProps };
