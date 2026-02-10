import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DatabaseSparkleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const DatabaseSparkleRegularDuotone = memo(
  forwardRef<SVGSVGElement, DatabaseSparkleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="database-sparkle-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.25c2 0 3.85.31 5.22.84.68.26 1.29.6 1.74 1s.79.95.79 1.61v5.39a.75.75 0 1 1-1.5 0V7.82a7 7 0 0 1-1.03.49 15 15 0 0 1-5.22.84 15 15 0 0 1-5.22-.84q-.56-.2-1.03-.5v3.95c.04.15.2.43.77.77.62.37 1.55.69 2.7.89a.75.75 0 0 1-.25 1.48 10 10 0 0 1-3.2-1.07l-.02-.01v4.48c0 .09.04.26.3.5q.4.36 1.27.71c1.16.45 2.82.74 4.68.74q.5 0 .98-.03a.75.75 0 0 1 .08 1.5q-.51.03-1.06.03a15 15 0 0 1-5.22-.84 6 6 0 0 1-1.74-1c-.44-.41-.79-.95-.79-1.61V5.7c0-.66.35-1.2.8-1.6.44-.41 1.05-.75 1.73-1A15 15 0 0 1 12 2.24m0 1.5c-1.86 0-3.52.3-4.68.74q-.87.34-1.26.71c-.27.24-.31.41-.31.5s.04.26.3.5q.4.37 1.27.7c1.16.46 2.82.75 4.68.75s3.52-.3 4.68-.74q.87-.35 1.26-.71c.27-.24.31-.41.31-.5s-.04-.26-.3-.5a4 4 0 0 0-1.27-.71A14 14 0 0 0 12 3.75" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.57 11.28a.45.45 0 0 1 .86 0l.36 1.09a4.5 4.5 0 0 0 2.84 2.84l1.09.36c.4.14.4.72 0 .86l-1.09.36a4.5 4.5 0 0 0-2.84 2.84l-.36 1.09a.45.45 0 0 1-.86 0l-.36-1.09a4.5 4.5 0 0 0-2.84-2.84l-1.09-.36a.45.45 0 0 1 0-.86l1.09-.36a4.5 4.5 0 0 0 2.84-2.84z" />
    </IconBase>
  ))
);

DatabaseSparkleRegularDuotone.displayName = 'DatabaseSparkleRegularDuotone';

// Triple export pattern (lucide-react style)
export { DatabaseSparkleRegularDuotone, DatabaseSparkleRegularDuotone as DatabaseSparkleRegularDuotoneIcon, DatabaseSparkleRegularDuotone as SiDatabaseSparkleRegularDuotone };
export default DatabaseSparkleRegularDuotone;
export type { DatabaseSparkleRegularDuotoneProps };
