import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RotateCircleLeftBoldProps = Omit<IconBaseProps, 'children'>;

const RotateCircleLeftBold = memo(
  forwardRef<SVGSVGElement, RotateCircleLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M10.3 5.3a1 1 0 1 1 1.4 1.4L10.42 8h2.09a5 5 0 1 1-4.08 7.89 1 1 0 0 1 1.63-1.16A3 3 0 1 0 12.5 10h-2.09l1.3 1.3a1 1 0 1 1-1.42 1.4L7.36 9.79a1.1 1.1 0 0 1 0-1.56z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

RotateCircleLeftBold.displayName = 'RotateCircleLeftBold';

export { RotateCircleLeftBold };
export type { RotateCircleLeftBoldProps };
