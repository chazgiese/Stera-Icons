import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RotateRightBoldProps = Omit<IconBaseProps, 'children'>;

const RotateRightBold = memo(
  forwardRef<SVGSVGElement, RotateRightBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotate-right-bold" {...props}>
      <path fill="currentColor" d="M13.7.3a1 1 0 1 0-1.4 1.4L14.58 4H12a9 9 0 1 0 9 9 1 1 0 1 0-2 0 7 7 0 1 1-7-7h2.59l-2.3 2.3a1 1 0 1 0 1.42 1.4l4-4a1 1 0 0 0 0-1.4z" />
    </IconBase>
  ))
);

RotateRightBold.displayName = 'RotateRightBold';

// Triple export pattern (lucide-react style)
export { RotateRightBold, RotateRightBold as RotateRightBoldIcon, RotateRightBold as SiRotateRightBold };
export type { RotateRightBoldProps };
