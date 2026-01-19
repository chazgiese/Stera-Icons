import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ExpandSimpleFillProps = Omit<IconBaseProps, 'children'>;

const ExpandSimpleFill = memo(
  forwardRef<SVGSVGElement, ExpandSimpleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="expand-simple-fill" {...props}>
      <path fill="currentColor" d="M8.3 14.3a1 1 0 1 1 1.4 1.4L7.42 18l2.3 2.3A1 1 0 0 1 9 22H3l-.17-.02h-.06l-.06-.02a1 1 0 0 1-.59-.49l-.02-.04A1 1 0 0 1 2 21v-6a1 1 0 0 1 1.7-.7L6 16.58zM21 2l.16.01h.03l.01.01h.03l.06.02.14.06.04.02a1 1 0 0 1 .49.59l.01.05L22 3v6a1 1 0 0 1-1.7.7L18 7.42l-2.3 2.3a1 1 0 1 1-1.4-1.42L16.58 6l-2.3-2.3A1 1 0 0 1 15 2z" />
    </IconBase>
  ))
);

ExpandSimpleFill.displayName = 'ExpandSimpleFill';

// Triple export pattern (lucide-react style)
export { ExpandSimpleFill, ExpandSimpleFill as ExpandSimpleFillIcon, ExpandSimpleFill as SiExpandSimpleFill };
export default ExpandSimpleFill;
export type { ExpandSimpleFillProps };
