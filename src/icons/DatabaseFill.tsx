import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DatabaseFillProps = Omit<IconBaseProps, 'children'>;

const DatabaseFill = memo(
  forwardRef<SVGSVGElement, DatabaseFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="database-fill" {...props}>
      <path fill="currentColor" d="M20 18.3c0 .75-.4 1.35-.88 1.79a6 6 0 0 1-1.81 1.05c-1.4.55-3.29.86-5.31.86s-3.9-.31-5.31-.86a6 6 0 0 1-1.81-1.05A2.4 2.4 0 0 1 4 18.3v-4.72q.57.37 1.23.66C7 15.04 9.4 15.5 12 15.5c2.6 0 4.99-.46 6.77-1.26q.66-.3 1.23-.66z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2c2.02 0 3.9.31 5.31.86.7.27 1.34.61 1.81 1.05.48.44.88 1.04.88 1.79v4.8c0 .23-.1.52-.43.87q-.5.54-1.61 1.05A15 15 0 0 1 12 13.5c-2.38 0-4.48-.43-5.96-1.09a5 5 0 0 1-1.6-1.04c-.34-.35-.44-.64-.44-.87V5.7c0-.75.4-1.35.88-1.79a6 6 0 0 1 1.81-1.05C8.09 2.3 9.98 2 12 2m0 2c-1.84 0-3.46.29-4.59.72q-.85.34-1.19.67a1 1 0 0 0-.2.23L6 5.7q0 0 .03.08t.2.23q.33.33 1.18.67c1.13.43 2.75.72 4.59.72s3.46-.29 4.59-.72q.85-.34 1.19-.67.15-.15.2-.23L18 5.7q0 0-.03-.08a1 1 0 0 0-.2-.23 4 4 0 0 0-1.18-.67A13 13 0 0 0 12 4" clipRule="evenodd" />
    </IconBase>
  ))
);

DatabaseFill.displayName = 'DatabaseFill';

// Triple export pattern (lucide-react style)
export { DatabaseFill, DatabaseFill as DatabaseFillIcon, DatabaseFill as SiDatabaseFill };
export default DatabaseFill;
export type { DatabaseFillProps };
