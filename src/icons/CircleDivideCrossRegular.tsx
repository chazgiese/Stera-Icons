import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CircleDivideCrossRegularProps = Omit<IconBaseProps, 'children'>;

const CircleDivideCrossRegular = memo(
  forwardRef<SVGSVGElement, CircleDivideCrossRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-divide-cross" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m-9.22 11.5a9.25 9.25 0 0 0 8.47 8.47v-8.47zm9.97 0v8.47a9.25 9.25 0 0 0 8.47-8.47zm0-1.5h8.47a9.25 9.25 0 0 0-8.47-8.47zm-1.5-8.47a9.25 9.25 0 0 0-8.47 8.47h8.47z" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDivideCrossRegular.displayName = 'CircleDivideCrossRegular';

// Triple export pattern (lucide-react style)
export { CircleDivideCrossRegular, CircleDivideCrossRegular as CircleDivideCrossRegularIcon, CircleDivideCrossRegular as SiCircleDivideCrossRegular };
export type { CircleDivideCrossRegularProps };
