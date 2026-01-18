import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RotateRightRegularProps = Omit<IconBaseProps, 'children'>;

const RotateRightRegular = memo(
  forwardRef<SVGSVGElement, RotateRightRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M13.53.47a.75.75 0 1 0-1.06 1.06l2.72 2.72H12A8.75 8.75 0 1 0 20.75 13a.75.75 0 0 0-1.5 0A7.25 7.25 0 1 1 12 5.75h3.19l-2.72 2.72a.75.75 0 0 0 1.06 1.06l4-4c.3-.3.3-.77 0-1.06z" />
    </IconBase>
  ))
);

RotateRightRegular.displayName = 'RotateRightRegular';

// Triple export pattern (lucide-react style)
export { RotateRightRegular, RotateRightRegular as RotateRightRegularIcon, RotateRightRegular as SiRotateRightRegular };
export type { RotateRightRegularProps };
