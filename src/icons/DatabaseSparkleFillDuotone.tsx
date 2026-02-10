import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DatabaseSparkleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DatabaseSparkleFillDuotone = memo(
  forwardRef<SVGSVGElement, DatabaseSparkleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="database-sparkle-fill-duotone" {...props}>
      <path d="M4 13.58q.57.37 1.23.66c1.09.48 2.4.85 3.84 1.05a2.44 2.44 0 0 0 1.58 3.03l1.08.37a2.5 2.5 0 0 1 1.58 1.58l.37 1.08q.1.3.25.55Q13 22 12 22c-2.02 0-3.9-.31-5.31-.86a6 6 0 0 1-1.81-1.05A2.4 2.4 0 0 1 4 18.3z" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2c2.02 0 3.9.31 5.31.86.7.27 1.34.61 1.81 1.05.48.44.88 1.04.88 1.79v4.8c0 .23-.1.52-.43.87q-.3.3-.79.61l-.1-.25-.36-1.08-.07-.2a2.45 2.45 0 0 0-4.5 0l-.07.2-.37 1.08a2.5 2.5 0 0 1-1.58 1.58l-.5.17a15 15 0 0 1-5.19-1.07 5 5 0 0 1-1.6-1.04c-.34-.35-.44-.64-.44-.87V5.7c0-.75.4-1.35.88-1.79a6 6 0 0 1 1.81-1.05C8.09 2.3 9.98 2 12 2m0 2c-1.84 0-3.46.29-4.59.72q-.85.34-1.19.67a1 1 0 0 0-.2.23L6 5.7q0 0 .03.08t.2.23q.33.33 1.18.67A13 13 0 0 0 12 7.4l.68-.01c1.56-.06 2.93-.33 3.91-.71q.85-.34 1.19-.67.15-.15.2-.23L18 5.7q0 0-.03-.08a1 1 0 0 0-.2-.23 4 4 0 0 0-1.18-.67A13 13 0 0 0 12 4" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" d="M15.57 11.28a.45.45 0 0 1 .86 0l.36 1.09a4.5 4.5 0 0 0 2.84 2.84l1.09.36c.4.14.4.72 0 .86l-1.09.36a4.5 4.5 0 0 0-2.84 2.84l-.36 1.09a.45.45 0 0 1-.86 0l-.36-1.09a4.5 4.5 0 0 0-2.84-2.84l-1.09-.36a.45.45 0 0 1 0-.86l1.09-.36a4.5 4.5 0 0 0 2.84-2.84z" />
    </IconBase>
  ))
);

DatabaseSparkleFillDuotone.displayName = 'DatabaseSparkleFillDuotone';

// Triple export pattern (lucide-react style)
export { DatabaseSparkleFillDuotone, DatabaseSparkleFillDuotone as DatabaseSparkleFillDuotoneIcon, DatabaseSparkleFillDuotone as SiDatabaseSparkleFillDuotone };
export default DatabaseSparkleFillDuotone;
export type { DatabaseSparkleFillDuotoneProps };
