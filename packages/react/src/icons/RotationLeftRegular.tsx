import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RotationLeftRegularProps = Omit<IconBaseProps, 'children'>;

const RotationLeftRegular = memo(
  forwardRef<SVGSVGElement, RotationLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M5.81 5.81a.75.75 0 0 1 1.06 1.06 7.25 7.25 0 0 0 4.86 12.38h1.46l-1.72-1.72a.75.75 0 0 1 1.06-1.06l3 3c.3.3.3.77 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72h-1.51A8.75 8.75 0 0 1 5.8 5.8M11.47.47a.75.75 0 1 1 1.06 1.06l-1.72 1.72h1.51A8.75 8.75 0 0 1 18.2 18.2a.75.75 0 0 1-1.06-1.06 7.25 7.25 0 0 0-4.86-12.37L12 4.75h-1.19l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06z" />
    </IconBase>
  ))
);

RotationLeftRegular.displayName = 'RotationLeftRegular';

export { RotationLeftRegular };
export type { RotationLeftRegularProps };
