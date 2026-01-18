import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PercentCircleRegularProps = Omit<IconBaseProps, 'children'>;

const PercentCircleRegular = memo(
  forwardRef<SVGSVGElement, PercentCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M15.47 7.47a.75.75 0 1 1 1.06 1.06l-8 8a.75.75 0 1 1-1.06-1.06zM15 13.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M9 7.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

PercentCircleRegular.displayName = 'PercentCircleRegular';

// Triple export pattern (lucide-react style)
export { PercentCircleRegular, PercentCircleRegular as PercentCircleRegularIcon, PercentCircleRegular as SiPercentCircleRegular };
export type { PercentCircleRegularProps };
