import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PenNibBoldProps = Omit<IconBaseProps, 'children'>;

const PenNibBold = memo(
  forwardRef<SVGSVGElement, PenNibBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="pen-nib-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.12 1a1 1 0 0 1 .68.4c2.27 3.03 4.67 6.9 5.69 10.31.5 1.71.7 3.43.26 4.92A4.8 4.8 0 0 1 18 19.69v1.06c0 1.24-1 2.25-2.25 2.25h-7.5C7 23 6 22 6 20.75v-1.06a4.8 4.8 0 0 1-2.76-3.06c-.44-1.49-.24-3.21.27-4.92C4.53 8.3 6.93 4.43 9.2 1.4a1 1 0 0 1 .68-.4h4.24M10.5 3c-2.12 2.9-4.2 6.34-5.07 9.29q-.69 2.33-.27 3.77c.26.87.87 1.58 2.14 1.99A1 1 0 0 1 8 19v1.75q.02.23.25.25h7.5q.23-.02.25-.25V19a1 1 0 0 1 .7-.95c1.27-.41 1.88-1.12 2.14-2 .28-.94.19-2.22-.27-3.76-.88-2.95-2.95-6.4-5.07-9.29H13v7.7a2.5 2.5 0 1 1-2 0V3z" clipRule="evenodd" />
    </IconBase>
  ))
);

PenNibBold.displayName = 'PenNibBold';

// Triple export pattern (lucide-react style)
export { PenNibBold, PenNibBold as PenNibBoldIcon, PenNibBold as SiPenNibBold };
export type { PenNibBoldProps };
