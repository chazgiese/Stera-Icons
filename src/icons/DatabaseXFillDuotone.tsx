import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DatabaseXFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DatabaseXFillDuotone = memo(
  forwardRef<SVGSVGElement, DatabaseXFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="database-x-fill-duotone" {...props}>
      <path d="M4 13.58q.57.37 1.23.66C7 15.04 9.4 15.5 12 15.5q.96 0 1.88-.08l.08.08-.73.73a2.5 2.5 0 1 0 3.54 3.54l.73-.73.73.73q.32.3.7.48-.69.54-1.62.9c-1.4.54-3.29.85-5.31.85s-3.9-.31-5.31-.86a6 6 0 0 1-1.81-1.05A2.4 2.4 0 0 1 4 18.3z" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2c2.02 0 3.9.31 5.31.86.7.27 1.34.61 1.81 1.05.48.44.88 1.04.88 1.79v4.8a2.5 2.5 0 0 0-1.77.73l-.73.73-.73-.73a2.5 2.5 0 0 0-4.22 2.26l-.55.01c-2.38 0-4.48-.43-5.96-1.09a5 5 0 0 1-1.6-1.04c-.34-.35-.44-.64-.44-.87V5.7c0-.75.4-1.35.88-1.79a6 6 0 0 1 1.81-1.05C8.09 2.3 9.98 2 12 2m0 2c-1.84 0-3.46.29-4.59.72q-.85.34-1.19.67a1 1 0 0 0-.2.23L6 5.7q0 0 .03.08t.2.23q.33.33 1.18.67A13 13 0 0 0 12 7.4l.68-.01c1.56-.06 2.93-.33 3.91-.71q.85-.34 1.19-.67.15-.15.2-.23L18 5.7q0 0-.03-.08a1 1 0 0 0-.2-.23 4 4 0 0 0-1.18-.67A13 13 0 0 0 12 4" clipRule="evenodd" opacity={0.4} />
        <path d="M19.3 12.3a1 1 0 1 1 1.4 1.4l-1.79 1.8 1.8 1.8a1 1 0 0 1-1.42 1.4l-1.79-1.79-1.8 1.8a1 1 0 0 1-1.4-1.42l1.79-1.79-1.8-1.8a1 1 0 1 1 1.42-1.4l1.79 1.79z" />
    </IconBase>
  ))
);

DatabaseXFillDuotone.displayName = 'DatabaseXFillDuotone';

// Triple export pattern (lucide-react style)
export { DatabaseXFillDuotone, DatabaseXFillDuotone as DatabaseXFillDuotoneIcon, DatabaseXFillDuotone as SiDatabaseXFillDuotone };
export default DatabaseXFillDuotone;
export type { DatabaseXFillDuotoneProps };
