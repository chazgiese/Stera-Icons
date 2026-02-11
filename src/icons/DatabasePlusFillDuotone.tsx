import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DatabasePlusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DatabasePlusFillDuotone = memo(
  forwardRef<SVGSVGElement, DatabasePlusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="database-plus-fill-duotone" {...props}>
      <path d="M4 13.58q.57.37 1.23.66c1.27.57 2.86.97 4.61 1.15A2.25 2.25 0 0 0 12 18.25h1.75V20c0 .74.36 1.4.92 1.8Q13.4 22 12 22c-2.02 0-3.9-.31-5.31-.86a6 6 0 0 1-1.81-1.05A2.4 2.4 0 0 1 4 18.3z" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2c2.02 0 3.9.31 5.31.86.7.27 1.34.61 1.81 1.05.48.44.88 1.04.88 1.79v4.8c0 .23-.1.52-.43.87q-.44.46-1.32.9V12a2.25 2.25 0 0 0-4.5 0v1.42q-.85.08-1.75.08c-2.38 0-4.48-.43-5.96-1.09a5 5 0 0 1-1.6-1.04c-.34-.35-.44-.64-.44-.87V5.7c0-.75.4-1.35.88-1.79a6 6 0 0 1 1.81-1.05C8.09 2.3 9.98 2 12 2m0 2c-1.84 0-3.46.29-4.59.72q-.85.34-1.19.67a1 1 0 0 0-.2.23L6 5.7q0 0 .03.08t.2.23q.33.33 1.18.67c1.13.43 2.75.72 4.59.72s3.46-.29 4.59-.72q.85-.34 1.19-.67.15-.15.2-.23L18 5.7q0 0-.03-.08a1 1 0 0 0-.2-.23 4 4 0 0 0-1.18-.67A13 13 0 0 0 12 4" clipRule="evenodd" opacity={0.4} />
        <path d="M16 11a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

DatabasePlusFillDuotone.displayName = 'DatabasePlusFillDuotone';

// Triple export pattern (lucide-react style)
export { DatabasePlusFillDuotone, DatabasePlusFillDuotone as DatabasePlusFillDuotoneIcon, DatabasePlusFillDuotone as SiDatabasePlusFillDuotone };
export default DatabasePlusFillDuotone;
export type { DatabasePlusFillDuotoneProps };
