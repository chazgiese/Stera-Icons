import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CliCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CliCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, CliCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cli-circle-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M6.8 7.8a1 1 0 0 1 1.4 0l3.5 3.5a1 1 0 0 1 0 1.4l-3.5 3.5a1 1 0 0 1-1.4-1.4L9.58 12l-2.8-2.8a1 1 0 0 1 0-1.4M17 14.5a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

CliCircleBoldDuotone.displayName = 'CliCircleBoldDuotone';

// Triple export pattern (lucide-react style)
export { CliCircleBoldDuotone, CliCircleBoldDuotone as CliCircleBoldDuotoneIcon, CliCircleBoldDuotone as SiCliCircleBoldDuotone };
export type { CliCircleBoldDuotoneProps };
