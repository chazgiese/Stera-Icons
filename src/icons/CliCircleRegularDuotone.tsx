import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CliCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CliCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, CliCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cli-circle-duotone" {...props}>
      <path fill="currentColor" d="M6.97 7.97c.3-.3.77-.3 1.06 0l3.5 3.5a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 1 1-1.06-1.06L9.94 12 6.97 9.03a.75.75 0 0 1 0-1.06M17 14.75a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

CliCircleRegularDuotone.displayName = 'CliCircleRegularDuotone';

// Triple export pattern (lucide-react style)
export { CliCircleRegularDuotone, CliCircleRegularDuotone as CliCircleRegularDuotoneIcon, CliCircleRegularDuotone as SiCliCircleRegularDuotone };
export type { CliCircleRegularDuotoneProps };
