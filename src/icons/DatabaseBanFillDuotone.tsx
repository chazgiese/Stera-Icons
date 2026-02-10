import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DatabaseBanFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DatabaseBanFillDuotone = memo(
  forwardRef<SVGSVGElement, DatabaseBanFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="database-ban-fill-duotone" {...props}>
      <path d="M4 13.58q.57.37 1.23.66c1.26.56 2.83.96 4.55 1.14q-.03.3-.03.62a6.25 6.25 0 0 0 4.18 5.9Q13 22 12 22c-2.02 0-3.9-.31-5.31-.86a6 6 0 0 1-1.81-1.05A2.4 2.4 0 0 1 4 18.3z" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2c2.02 0 3.9.31 5.31.86.7.27 1.34.61 1.81 1.05.48.44.88 1.04.88 1.79v4.8q0 .23-.18.55a6.25 6.25 0 0 0-9.51 2.37 14 14 0 0 1-4.27-1 5 5 0 0 1-1.6-1.05c-.34-.35-.44-.64-.44-.87V5.7c0-.75.4-1.35.88-1.79a6 6 0 0 1 1.81-1.05C8.09 2.3 9.98 2 12 2m0 2c-1.84 0-3.46.29-4.59.72q-.85.34-1.19.67a1 1 0 0 0-.2.23L6 5.7q0 0 .03.08t.2.23q.33.33 1.18.67A13 13 0 0 0 12 7.4l.68-.01c1.56-.06 2.93-.33 3.91-.71q.85-.34 1.19-.67.15-.15.2-.23L18 5.7q0 0-.03-.08a1 1 0 0 0-.2-.23 4 4 0 0 0-1.18-.67A13 13 0 0 0 12 4" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M16 11a5 5 0 1 1 0 10 5 5 0 0 1 0-10m-2.7 3.7q-.3.6-.3 1.3a3 3 0 0 0 4.3 2.7zM16 13q-.7 0-1.3.3l4 4q.3-.6.3-1.3a3 3 0 0 0-3-3" clipRule="evenodd" />
    </IconBase>
  ))
);

DatabaseBanFillDuotone.displayName = 'DatabaseBanFillDuotone';

// Triple export pattern (lucide-react style)
export { DatabaseBanFillDuotone, DatabaseBanFillDuotone as DatabaseBanFillDuotoneIcon, DatabaseBanFillDuotone as SiDatabaseBanFillDuotone };
export default DatabaseBanFillDuotone;
export type { DatabaseBanFillDuotoneProps };
