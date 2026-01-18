import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RotationLeftBoldProps = Omit<IconBaseProps, 'children'>;

const RotationLeftBold = memo(
  forwardRef<SVGSVGElement, RotationLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.64 5.64a1 1 0 0 1 1.41 1.41A7 7 0 0 0 11.75 19h.84l-1.3-1.3a1 1 0 1 1 1.42-1.4l3 3a1 1 0 0 1 0 1.4l-3 3a1 1 0 1 1-1.42-1.4l1.3-1.3h-.9199999999999999A9 9 0 0 1 5.64 5.63M11.3.3a1 1 0 1 1 1.4 1.4L11.42 3h.9199999999999999a9 9 0 0 1 6.03 15.36 1 1 0 0 1-1.41-1.41 7 7 0 0 0-4.7-11.94L12 5h-.59l1.3 1.3a1 1 0 0 1-1.42 1.4l-3-3a1 1 0 0 1 0-1.4z" />
    </IconBase>
  ))
);

RotationLeftBold.displayName = 'RotationLeftBold';

// Triple export pattern (lucide-react style)
export { RotationLeftBold, RotationLeftBold as RotationLeftBoldIcon, RotationLeftBold as SiRotationLeftBold };
export type { RotationLeftBoldProps };
