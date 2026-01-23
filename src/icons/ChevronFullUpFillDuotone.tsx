import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullUpFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullUpFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullUpFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-up-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.3 7.3a1 1 0 0 1 1.4 0l7 7A1 1 0 0 1 19 16H5a1 1 0 0 1-.7-1.7zM7.4 14h9.18L12 9.41z" clipRule="evenodd" />
        <path fill="currentColor" d="M16.59 14H7.4L12 9.41z" opacity={.4} />
    </IconBase>
  ))
);

ChevronFullUpFillDuotone.displayName = 'ChevronFullUpFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronFullUpFillDuotone, ChevronFullUpFillDuotone as ChevronFullUpFillDuotoneIcon, ChevronFullUpFillDuotone as SiChevronFullUpFillDuotone };
export default ChevronFullUpFillDuotone;
export type { ChevronFullUpFillDuotoneProps };
