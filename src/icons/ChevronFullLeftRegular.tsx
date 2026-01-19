import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronFullLeftRegularProps = Omit<IconBaseProps, 'children'>;

const ChevronFullLeftRegular = memo(
  forwardRef<SVGSVGElement, ChevronFullLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-left" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.47 4.47a.75.75 0 0 1 1.28.53v14a.75.75 0 0 1-1.28.53l-7-7a.75.75 0 0 1 0-1.06zM9.07 12l5.18 5.19V6.8z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullLeftRegular.displayName = 'ChevronFullLeftRegular';

// Triple export pattern (lucide-react style)
export { ChevronFullLeftRegular, ChevronFullLeftRegular as ChevronFullLeftRegularIcon, ChevronFullLeftRegular as SiChevronFullLeftRegular };
export default ChevronFullLeftRegular;
export type { ChevronFullLeftRegularProps };
