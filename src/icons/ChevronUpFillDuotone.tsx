import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronUpFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronUpFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronUpFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-up-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.3 7.3a1 1 0 0 1 1.4 0l7 7A1 1 0 0 1 19 16H5a1 1 0 0 1-.7-1.7zM7.4 14h9.18L12 9.41z" clipRule="evenodd" />
        <path fill="currentColor" d="M16.59 14H7.4L12 9.41z" opacity={.4} />
    </IconBase>
  ))
);

ChevronUpFillDuotone.displayName = 'ChevronUpFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronUpFillDuotone, ChevronUpFillDuotone as ChevronUpFillDuotoneIcon, ChevronUpFillDuotone as SiChevronUpFillDuotone };
export default ChevronUpFillDuotone;
export type { ChevronUpFillDuotoneProps };
