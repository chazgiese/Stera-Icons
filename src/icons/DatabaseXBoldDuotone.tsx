import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DatabaseXBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const DatabaseXBoldDuotone = memo(
  forwardRef<SVGSVGElement, DatabaseXBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="database-x-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2c2.02 0 3.9.31 5.31.86.7.27 1.34.61 1.81 1.05.48.44.88 1.04.88 1.79v3.94a1 1 0 0 1-2 0v-1.4q-.33.16-.69.3c-1.4.55-3.29.86-5.31.86s-3.9-.31-5.31-.86L6 8.24v3.46l.02.07a1 1 0 0 0 .2.23q.31.32 1.13.65c1.08.43 2.65.73 4.45.75a1 1 0 0 1-.02 2c-1.98-.02-3.8-.35-5.17-.89L6 14.24v4.06q0 0 .03.08t.2.23q.33.33 1.18.67c1.13.43 2.75.72 4.59.72q.54 0 1.06-.03a1 1 0 0 1 .13 2Q12.6 22 12 22c-2.02 0-3.9-.31-5.31-.86a6 6 0 0 1-1.81-1.05A2.4 2.4 0 0 1 4 18.3V5.7c0-.75.4-1.35.88-1.79a6 6 0 0 1 1.81-1.05C8.09 2.3 9.98 2 12 2m0 2c-1.84 0-3.46.29-4.59.72q-.85.34-1.19.67a1 1 0 0 0-.2.23L6 5.7q0 0 .03.08t.2.23q.33.33 1.18.67c1.13.43 2.75.72 4.59.72s3.46-.29 4.59-.72q.85-.34 1.19-.67.15-.15.2-.23L18 5.7q0 0-.03-.08a1 1 0 0 0-.2-.23 4 4 0 0 0-1.18-.67A13 13 0 0 0 12 4" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M19.3 12.3a1 1 0 1 1 1.4 1.4l-1.79 1.8 1.8 1.8a1 1 0 0 1-1.42 1.4l-1.79-1.79-1.8 1.8a1 1 0 0 1-1.4-1.42l1.79-1.79-1.8-1.8a1 1 0 1 1 1.42-1.4l1.79 1.79z" />
    </IconBase>
  ))
);

DatabaseXBoldDuotone.displayName = 'DatabaseXBoldDuotone';

// Triple export pattern (lucide-react style)
export { DatabaseXBoldDuotone, DatabaseXBoldDuotone as DatabaseXBoldDuotoneIcon, DatabaseXBoldDuotone as SiDatabaseXBoldDuotone };
export default DatabaseXBoldDuotone;
export type { DatabaseXBoldDuotoneProps };
