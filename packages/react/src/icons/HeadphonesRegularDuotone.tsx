import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HeadphonesRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const HeadphonesRegularDuotone = memo(
  forwardRef<SVGSVGElement, HeadphonesRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 1.25c3.23 0 6.13 1.43 8.1 3.69 1.73 1.98 2.24 4.4 2.2 6.87-.03 2.45-.6 5.01-1.12 7.32v.03c-.1.4-.5.66-.9.57q-.03 0-.06-.02l.58-2.6c.16-.71.02-1.42-.33-2q.3-1.7.33-3.32c.04-2.25-.43-4.27-1.83-5.87a9.23 9.23 0 0 0-13.94 0c-1.4 1.6-1.87 3.62-1.83 5.87q.03 1.63.33 3.32c-.35.58-.49 1.29-.33 2l.58 2.6-.06.02a.75.75 0 0 1-.9-.57v-.03c-.52-2.3-1.09-4.87-1.12-7.32s.47-4.9 2.2-6.87A10.7 10.7 0 0 1 12 1.25" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M5.29 13.83c1.48-.33 2.95.61 3.28 2.1l.65 2.92a2.75 2.75 0 1 1-5.37 1.2L3.2 17.1a2.75 2.75 0 0 1 2.09-3.28m1.82 2.42a1.25 1.25 0 0 0-2.44.54l.65 2.93a1.25 1.25 0 0 0 2.44-.54zM15.43 15.92a2.75 2.75 0 0 1 5.37 1.2l-.65 2.92a2.75 2.75 0 0 1-5.37-1.19zm2.95-.62a1.25 1.25 0 0 0-1.49.95l-.65 2.93a1.25 1.25 0 0 0 2.44.54l.65-2.93a1.25 1.25 0 0 0-.95-1.5" clipRule="evenodd" />
    </IconBase>
  ))
);

HeadphonesRegularDuotone.displayName = 'HeadphonesRegularDuotone';

// Triple export pattern (lucide-react style)
export { HeadphonesRegularDuotone, HeadphonesRegularDuotone as HeadphonesRegularDuotoneIcon, HeadphonesRegularDuotone as SiHeadphonesRegularDuotone };
export type { HeadphonesRegularDuotoneProps };
