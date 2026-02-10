import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DatabaseSparkleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const DatabaseSparkleBoldDuotone = memo(
  forwardRef<SVGSVGElement, DatabaseSparkleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="database-sparkle-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2c2.02 0 3.9.31 5.31.86.7.27 1.34.61 1.81 1.05.48.44.88 1.04.88 1.79v5.39a1 1 0 1 1-2 0V8.24q-.33.16-.69.3c-1.4.55-3.29.86-5.31.86s-3.9-.31-5.31-.86L6 8.24v3.46l.01.04q.01.04.08.13.14.19.56.45c.58.34 1.48.65 2.62.85a1 1 0 0 1-.35 1.97c-1.1-.2-2.11-.5-2.92-.9v4.06q0 0 .03.08t.2.23q.33.33 1.18.67c1.13.43 2.75.72 4.59.72q.5 0 .97-.03a1 1 0 0 1 .1 2Q12.57 22 12 22c-2.02 0-3.9-.31-5.31-.86a6 6 0 0 1-1.81-1.05A2.4 2.4 0 0 1 4 18.3V5.7c0-.75.4-1.35.88-1.79a6 6 0 0 1 1.81-1.05C8.09 2.3 9.98 2 12 2m0 2c-1.84 0-3.46.29-4.59.72q-.85.34-1.19.67a1 1 0 0 0-.2.23L6 5.7q0 0 .03.08t.2.23q.33.33 1.18.67c1.13.43 2.75.72 4.59.72s3.46-.29 4.59-.72q.85-.34 1.19-.67.15-.15.2-.23L18 5.7q0 0-.03-.08a1 1 0 0 0-.2-.23 4 4 0 0 0-1.18-.67A13 13 0 0 0 12 4" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.57 11.28a.45.45 0 0 1 .86 0l.36 1.09a4.5 4.5 0 0 0 2.84 2.84l1.09.36c.4.14.4.72 0 .86l-1.09.36a4.5 4.5 0 0 0-2.84 2.84l-.36 1.09a.45.45 0 0 1-.86 0l-.36-1.09a4.5 4.5 0 0 0-2.84-2.84l-1.09-.36a.45.45 0 0 1 0-.86l1.09-.36a4.5 4.5 0 0 0 2.84-2.84z" />
    </IconBase>
  ))
);

DatabaseSparkleBoldDuotone.displayName = 'DatabaseSparkleBoldDuotone';

// Triple export pattern (lucide-react style)
export { DatabaseSparkleBoldDuotone, DatabaseSparkleBoldDuotone as DatabaseSparkleBoldDuotoneIcon, DatabaseSparkleBoldDuotone as SiDatabaseSparkleBoldDuotone };
export default DatabaseSparkleBoldDuotone;
export type { DatabaseSparkleBoldDuotoneProps };
