import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronCircleLeftRegularProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleLeftRegular = memo(
  forwardRef<SVGSVGElement, ChevronCircleLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-circle-left" {...props}>
      <path fill="currentColor" d="M12.97 6.97a.75.75 0 0 1 1.06 1.06L10.06 12l3.97 3.97a.75.75 0 0 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronCircleLeftRegular.displayName = 'ChevronCircleLeftRegular';

// Triple export pattern (lucide-react style)
export { ChevronCircleLeftRegular, ChevronCircleLeftRegular as ChevronCircleLeftRegularIcon, ChevronCircleLeftRegular as SiChevronCircleLeftRegular };
export type { ChevronCircleLeftRegularProps };
