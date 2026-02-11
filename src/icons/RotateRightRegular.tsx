import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateRightRegularProps = Omit<IconBaseProps, 'children'>;

const RotateRightRegular = memo(
  forwardRef<SVGSVGElement, RotateRightRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotate-right" {...props}>
      <path d="M12.97 1.97c.3-.3.77-.3 1.06 0l3.5 3.5a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 1 1-1.06-1.06l2.22-2.22H12a6.75 6.75 0 1 0 6.75 6.75.75.75 0 0 1 1.5 0A8.25 8.25 0 1 1 12 5.25h3.19l-2.22-2.22a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

RotateRightRegular.displayName = 'RotateRightRegular';

// Triple export pattern (lucide-react style)
export { RotateRightRegular, RotateRightRegular as RotateRightRegularIcon, RotateRightRegular as SiRotateRightRegular };
export default RotateRightRegular;
export type { RotateRightRegularProps };
