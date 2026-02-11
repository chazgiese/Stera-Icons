import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DatabasePlusBoldProps = Omit<IconBaseProps, 'children'>;

const DatabasePlusBold = memo(
  forwardRef<SVGSVGElement, DatabasePlusBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="database-plus-bold" {...props}>
      <path fillRule="evenodd" d="M12 2c2.02 0 3.9.31 5.31.86.7.27 1.34.61 1.81 1.05.48.44.88 1.04.88 1.79v3.98a1 1 0 1 1-2 0V8.24q-.33.16-.69.3c-1.4.55-3.29.86-5.31.86s-3.9-.31-5.31-.86L6 8.24v3.46l.01.04q.01.04.08.13.14.2.6.47c.6.35 1.53.66 2.7.86a1 1 0 0 1-.32 1.97A11 11 0 0 1 6 14.24v4.06l.02.06q.03.08.15.2.27.29.98.61c.95.42 2.35.73 3.98.8a1 1 0 1 1-.1 2A14 14 0 0 1 6.35 21a5 5 0 0 1-1.59-1.02c-.42-.42-.76-1-.76-1.68V5.7c0-.75.4-1.35.88-1.79a6 6 0 0 1 1.81-1.05C8.09 2.3 9.98 2 12 2m0 2c-1.84 0-3.46.29-4.59.72q-.85.34-1.19.67a1 1 0 0 0-.2.23L6 5.7q0 0 .03.08t.2.23q.33.33 1.18.67c1.13.43 2.75.72 4.59.72s3.46-.29 4.59-.72q.85-.34 1.19-.67.15-.15.2-.23L18 5.7q0 0-.03-.08a1 1 0 0 0-.2-.23 4 4 0 0 0-1.18-.67A13 13 0 0 0 12 4" clipRule="evenodd" />
        <path d="M16 11a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

DatabasePlusBold.displayName = 'DatabasePlusBold';

// Triple export pattern (lucide-react style)
export { DatabasePlusBold, DatabasePlusBold as DatabasePlusBoldIcon, DatabasePlusBold as SiDatabasePlusBold };
export default DatabasePlusBold;
export type { DatabasePlusBoldProps };
