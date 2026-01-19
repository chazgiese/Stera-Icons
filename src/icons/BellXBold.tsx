import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BellXBoldProps = Omit<IconBaseProps, 'children'>;

const BellXBold = memo(
  forwardRef<SVGSVGElement, BellXBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="bell-x-bold" {...props}>
      <path fill="currentColor" d="M13.8 7.3a1 1 0 0 1 1.4 1.4l-1.79 1.8 1.8 1.8a1 1 0 0 1-1.42 1.4L12 11.92l-1.8 1.8a1 1 0 0 1-1.4-1.42l1.79-1.79-1.8-1.8a1 1 0 1 1 1.42-1.4L12 9.08z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a9 9 0 0 1 9 9v2.45a1 1 0 0 0 .14.51l.9 1.5A3 3 0 0 1 19.47 19H16.9a5 5 0 0 1-9.8 0H4.53a3 3 0 0 1-2.57-4.54l.9-1.5a1 1 0 0 0 .14-.51V10a9 9 0 0 1 9-9M9.17 19a3 3 0 0 0 5.66 0zM12 3a7 7 0 0 0-7 7v2.45a3 3 0 0 1-.43 1.54l-.9 1.5A1 1 0 0 0 4.54 17h14.94a1 1 0 0 0 .86-1.51l-.9-1.5a3 3 0 0 1-.43-1.54V10a7 7 0 0 0-7-7" clipRule="evenodd" />
    </IconBase>
  ))
);

BellXBold.displayName = 'BellXBold';

// Triple export pattern (lucide-react style)
export { BellXBold, BellXBold as BellXBoldIcon, BellXBold as SiBellXBold };
export default BellXBold;
export type { BellXBoldProps };
