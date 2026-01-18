import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RotateCircleLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotateCircleLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, RotateCircleLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M10.3 5.3a1 1 0 0 1 1.4 1.4L10.42 8h2.1a5 5 0 1 1-4.1 7.89 1 1 0 0 1 1.64-1.16A3 3 0 1 0 12.5 10h-2.09l1.3 1.3a1 1 0 0 1-1.42 1.4L7.36 9.79a1.1 1.1 0 0 1 0-1.56z" />
    </IconBase>
  ))
);

RotateCircleLeftBoldDuotone.displayName = 'RotateCircleLeftBoldDuotone';

// Triple export pattern (lucide-react style)
export { RotateCircleLeftBoldDuotone, RotateCircleLeftBoldDuotone as RotateCircleLeftBoldDuotoneIcon, RotateCircleLeftBoldDuotone as SiRotateCircleLeftBoldDuotone };
export type { RotateCircleLeftBoldDuotoneProps };
