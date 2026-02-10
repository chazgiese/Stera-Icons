import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DatabasePlusRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const DatabasePlusRegularDuotone = memo(
  forwardRef<SVGSVGElement, DatabasePlusRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="database-plus-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.25c2 0 3.85.31 5.22.84.68.26 1.29.6 1.74 1s.79.95.79 1.61v3.98a.75.75 0 0 1-1.5 0V7.82a7 7 0 0 1-1.03.49 15 15 0 0 1-5.22.84 15 15 0 0 1-5.22-.84q-.56-.2-1.03-.5v3.95c.04.16.2.45.8.8.65.36 1.62.68 2.8.88a.75.75 0 0 1-.24 1.48c-1.3-.21-2.45-.58-3.3-1.07l-.06-.03v4.48c0 .08.04.23.25.44q.31.32 1.05.66c.99.43 2.41.74 4.07.83a.75.75 0 0 1-.08 1.5c-1.78-.1-3.4-.43-4.59-.96a5 5 0 0 1-1.51-.97c-.4-.39-.69-.9-.69-1.5V5.7c0-.66.35-1.2.8-1.6.44-.41 1.05-.75 1.73-1A15 15 0 0 1 12 2.24m0 1.5c-1.86 0-3.52.3-4.68.74q-.87.34-1.26.71c-.27.24-.31.41-.31.5s.04.26.3.5q.4.37 1.27.7c1.16.46 2.82.75 4.68.75s3.52-.3 4.68-.74q.87-.35 1.26-.71c.27-.24.31-.41.31-.5s-.04-.26-.3-.5a4 4 0 0 0-1.27-.71A14 14 0 0 0 12 3.75" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M16 11.25c.42 0 .75.34.75.75v3.25H20a.75.75 0 0 1 0 1.5h-3.25V20a.75.75 0 0 1-1.5 0v-3.25H12a.75.75 0 0 1 0-1.5h3.25V12c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

DatabasePlusRegularDuotone.displayName = 'DatabasePlusRegularDuotone';

// Triple export pattern (lucide-react style)
export { DatabasePlusRegularDuotone, DatabasePlusRegularDuotone as DatabasePlusRegularDuotoneIcon, DatabasePlusRegularDuotone as SiDatabasePlusRegularDuotone };
export default DatabasePlusRegularDuotone;
export type { DatabasePlusRegularDuotoneProps };
