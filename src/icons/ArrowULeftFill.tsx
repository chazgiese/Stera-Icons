import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowULeftFillProps = Omit<IconBaseProps, 'children'>;

const ArrowULeftFill = memo(
  forwardRef<SVGSVGElement, ArrowULeftFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-u-left-fill" {...props}>
      <path d="M13.5 4a6.5 6.5 0 1 1 0 13H9v3a1 1 0 0 1-1.7.7l-4-4-.07-.07a1 1 0 0 1 .06-1.34l4-4A1 1 0 0 1 9 12v3h4.5a4.5 4.5 0 1 0 0-9H9a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

ArrowULeftFill.displayName = 'ArrowULeftFill';

// Triple export pattern (lucide-react style)
export { ArrowULeftFill, ArrowULeftFill as ArrowULeftFillIcon, ArrowULeftFill as SiArrowULeftFill };
export default ArrowULeftFill;
export type { ArrowULeftFillProps };
