import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RotateCircleLeftRegularProps = Omit<IconBaseProps, 'children'>;

const RotateCircleLeftRegular = memo(
  forwardRef<SVGSVGElement, RotateCircleLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotate-circle-left" {...props}>
      <path fill="currentColor" d="M10.47 5.47a.75.75 0 1 1 1.06 1.06L9.81 8.25h2.69a4.75 4.75 0 1 1-3.88 7.5.75.75 0 1 1 1.22-.87 3.25 3.25 0 1 0 2.66-5.13H9.81l1.72 1.72a.75.75 0 1 1-1.06 1.06L7.54 9.6a.85.85 0 0 1 0-1.2z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

RotateCircleLeftRegular.displayName = 'RotateCircleLeftRegular';

// Triple export pattern (lucide-react style)
export { RotateCircleLeftRegular, RotateCircleLeftRegular as RotateCircleLeftRegularIcon, RotateCircleLeftRegular as SiRotateCircleLeftRegular };
export default RotateCircleLeftRegular;
export type { RotateCircleLeftRegularProps };
