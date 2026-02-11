import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DatabaseXRegularProps = Omit<IconBaseProps, 'children'>;

const DatabaseXRegular = memo(
  forwardRef<SVGSVGElement, DatabaseXRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="database-x" {...props}>
      <path fillRule="evenodd" d="M12 2.25c2 0 3.85.31 5.22.84.68.26 1.29.6 1.74 1s.79.95.79 1.61v3.94a.75.75 0 0 1-1.5 0V7.82a7 7 0 0 1-1.03.49 15 15 0 0 1-5.22.84 15 15 0 0 1-5.22-.84q-.56-.2-1.03-.5v3.89l.01.08q.02.15.28.4.37.37 1.22.7c1.12.45 2.72.75 4.53.77a.75.75 0 0 1-.01 1.5 15 15 0 0 1-5.08-.87 7 7 0 0 1-.95-.46v4.48c0 .09.04.26.3.5q.4.36 1.27.71c1.16.45 2.82.74 4.68.74q.55 0 1.08-.03a.75.75 0 0 1 .1 1.5q-.58.03-1.18.03a15 15 0 0 1-5.22-.84 6 6 0 0 1-1.74-1c-.44-.41-.79-.95-.79-1.61V5.7c0-.66.35-1.2.8-1.6.44-.41 1.05-.75 1.73-1A15 15 0 0 1 12 2.24m0 1.5c-1.86 0-3.52.3-4.68.74q-.87.34-1.26.71c-.27.24-.31.41-.31.5s.04.26.3.5q.4.37 1.27.7c1.16.46 2.82.75 4.68.75s3.52-.3 4.68-.74q.87-.35 1.26-.71c.27-.24.31-.41.31-.5s-.04-.26-.3-.5a4 4 0 0 0-1.27-.71A14 14 0 0 0 12 3.75" clipRule="evenodd" />
        <path d="M19.47 12.47a.75.75 0 1 1 1.06 1.06l-1.97 1.97 1.97 1.97a.75.75 0 1 1-1.06 1.06l-1.97-1.97-1.97 1.97a.75.75 0 1 1-1.06-1.06l1.97-1.97-1.97-1.97a.75.75 0 1 1 1.06-1.06l1.97 1.97z" />
    </IconBase>
  ))
);

DatabaseXRegular.displayName = 'DatabaseXRegular';

// Triple export pattern (lucide-react style)
export { DatabaseXRegular, DatabaseXRegular as DatabaseXRegularIcon, DatabaseXRegular as SiDatabaseXRegular };
export default DatabaseXRegular;
export type { DatabaseXRegularProps };
