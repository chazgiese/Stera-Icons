import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type VolleyballBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const VolleyballBoldDuotone = memo(
  forwardRef<SVGSVGElement, VolleyballBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.78 11.98q.5 0 1.1.07c.59 4.06 2.45 6.6 4.76 8.44l-.3-.01q-1.98-.16-3.62-1.14c-1.41-1.86-2.45-4.2-2.85-7.25q.4-.1.91-.1M19.44 7.88q.89 1.6 1.04 3.52c-.99 2.31-2.9 4.54-5.9 6.4q-.32-.37-.57-.81t-.44-.92c4.1-2.55 5.64-5.67 5.74-8.41zM7.43 4.83c1.13-.12 2.25-.02 3.29.21 1.75.4 3.32 1.18 4.45 2q-.24.45-.58.94l-.54.72c-.9-.66-2.24-1.36-3.77-1.7-1.89-.43-3.96-.29-5.8 1.03l.1-.19c.7-1.22 1.67-2.25 2.85-3M21.19 6.9v.03-.02" opacity={0.4} />
        <path fillRule="evenodd" d="M12 1.5c1.84 0 3.58.48 5.09 1.31 1.72.96 3.14 2.38 4.1 4.1.83 1.51 1.31 3.25 1.31 5.09 0 3.92-2.15 7.34-5.33 9.14-1.53.87-3.3 1.36-5.17 1.36q-.4 0-.8-.03c-5.32-.4-9.52-4.75-9.7-10.13V12c0-1.87.49-3.62 1.34-5.14C4.64 3.66 8.07 1.5 12 1.5M5.78 11.98c-1.04.02-1.73.32-2.25.74.35 4.14 3.67 7.44 7.82 7.76l.65.02q1.16 0 2.22-.3c-.84-.61-1.48-1.4-1.95-2.22-.65-1.14-1.01-2.37-1.21-3.4l-.04.04-.1-.8-.07-.59c-2.27-.95-3.9-1.27-5.07-1.25m11.97-6.24c-.2 1.17-.79 2.32-1.52 3.38q-.36.52-.8 1.06c-.76.94-1.66 1.87-2.6 2.77.1.97.37 2.63 1.18 4.04.56.98 1.36 1.8 2.53 2.2 2.38-1.51 3.96-4.17 3.96-7.19 0-1.5-.39-2.9-1.06-4.12q-.68-1.2-1.7-2.14M12 3.5c-3.18 0-5.96 1.75-7.41 4.34Q3.92 9 3.66 10.37q.9-.36 2.08-.39c1.54-.03 3.44.4 5.84 1.4 1.2-1.15 2.25-2.3 3-3.4q1.51-2.2 1.19-3.6-1.73-.86-3.77-.88" clipRule="evenodd" />
    </IconBase>
  ))
);

VolleyballBoldDuotone.displayName = 'VolleyballBoldDuotone';

// Triple export pattern
export { VolleyballBoldDuotone, VolleyballBoldDuotone as VolleyballBoldDuotoneIcon, VolleyballBoldDuotone as SiVolleyballBoldDuotone };
export default VolleyballBoldDuotone;
export type { VolleyballBoldDuotoneProps };
