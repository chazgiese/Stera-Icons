import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CliCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CliCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, CliCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" opacity={.4} />
        <path d="M7.47 8.47c.3-.3.77-.3 1.06 0l3 3q.22.22.22.53t-.22.53l-3 3c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06L9.94 12 7.47 9.53c-.3-.3-.3-.77 0-1.06M16.5 14.25c.41 0 .75.34.75.75s-.34.75-.75.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

CliCircleRegularDuotone.displayName = 'CliCircleRegularDuotone';

// Triple export pattern
export { CliCircleRegularDuotone, CliCircleRegularDuotone as CliCircleRegularDuotoneIcon, CliCircleRegularDuotone as SiCliCircleRegularDuotone };
export default CliCircleRegularDuotone;
export type { CliCircleRegularDuotoneProps };
