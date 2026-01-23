import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronLeftRegularProps = Omit<IconBaseProps, 'children'>;

const ChevronLeftRegular = memo(
  forwardRef<SVGSVGElement, ChevronLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-left" {...props}>
      <path fill="currentColor" d="M14.47 4.47a.75.75 0 1 1 1.06 1.06L9.06 12l6.47 6.47a.75.75 0 1 1-1.06 1.06l-7-7a.75.75 0 0 1 0-1.06z" />
    </IconBase>
  ))
);

ChevronLeftRegular.displayName = 'ChevronLeftRegular';

// Triple export pattern (lucide-react style)
export { ChevronLeftRegular, ChevronLeftRegular as ChevronLeftRegularIcon, ChevronLeftRegular as SiChevronLeftRegular };
export default ChevronLeftRegular;
export type { ChevronLeftRegularProps };
