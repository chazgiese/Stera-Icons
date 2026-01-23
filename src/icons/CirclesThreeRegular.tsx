import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CirclesThreeRegularProps = Omit<IconBaseProps, 'children'>;

const CirclesThreeRegular = memo(
  forwardRef<SVGSVGElement, CirclesThreeRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="circles-three" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17.5 11.78a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5m0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M6.5 11.78a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5m0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M12 2.25a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5m0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CirclesThreeRegular.displayName = 'CirclesThreeRegular';

// Triple export pattern (lucide-react style)
export { CirclesThreeRegular, CirclesThreeRegular as CirclesThreeRegularIcon, CirclesThreeRegular as SiCirclesThreeRegular };
export default CirclesThreeRegular;
export type { CirclesThreeRegularProps };
