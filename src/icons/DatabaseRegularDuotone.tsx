import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DatabaseRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const DatabaseRegularDuotone = memo(
  forwardRef<SVGSVGElement, DatabaseRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="database-duotone" {...props}>
      <path d="M5.75 11.7c0 .09.04.26.3.5q.4.37 1.27.7c1.16.46 2.82.75 4.68.75s3.52-.3 4.68-.74q.87-.35 1.26-.71c.27-.24.31-.41.31-.5v2.12a7 7 0 0 1-1.03.49 15 15 0 0 1-5.22.84 15 15 0 0 1-5.22-.84 7 7 0 0 1-1.03-.5z" opacity={.4} />
        <path fillRule="evenodd" d="M12 2.25c2 0 3.85.31 5.22.84.68.26 1.29.6 1.74 1s.79.95.79 1.61v12.6c0 .66-.35 1.2-.8 1.6-.44.41-1.05.75-1.73 1a15 15 0 0 1-5.22.85 15 15 0 0 1-5.22-.84 6 6 0 0 1-1.74-1c-.44-.41-.79-.95-.79-1.61V5.7c0-.66.35-1.2.8-1.6.44-.41 1.05-.75 1.73-1A15 15 0 0 1 12 2.24m6.25 5.57a7 7 0 0 1-1.03.49 15 15 0 0 1-5.22.84 15 15 0 0 1-5.22-.84q-.56-.2-1.03-.5V18.3c0 .09.04.26.3.5q.4.36 1.27.71c1.16.45 2.82.74 4.68.74s3.52-.3 4.68-.74q.87-.35 1.26-.71c.27-.24.31-.41.31-.5zM12 3.75c-1.86 0-3.52.3-4.68.74q-.87.34-1.26.71c-.27.24-.31.41-.31.5s.04.26.3.5q.4.37 1.27.7c1.16.46 2.82.75 4.68.75s3.52-.3 4.68-.74q.87-.35 1.26-.71c.27-.24.31-.41.31-.5s-.04-.26-.3-.5a4 4 0 0 0-1.27-.71A14 14 0 0 0 12 3.75" clipRule="evenodd" />
    </IconBase>
  ))
);

DatabaseRegularDuotone.displayName = 'DatabaseRegularDuotone';

// Triple export pattern (lucide-react style)
export { DatabaseRegularDuotone, DatabaseRegularDuotone as DatabaseRegularDuotoneIcon, DatabaseRegularDuotone as SiDatabaseRegularDuotone };
export default DatabaseRegularDuotone;
export type { DatabaseRegularDuotoneProps };
