import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideRegularProps = Omit<IconBaseProps, 'children'>;

const CircleDivideRegular = memo(
  forwardRef<SVGSVGElement, CircleDivideRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-divide" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m-.75 1.54a8.25 8.25 0 0 0 0 16.42zm1.5 16.42a8.25 8.25 0 0 0 0-16.42z" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDivideRegular.displayName = 'CircleDivideRegular';

// Triple export pattern (lucide-react style)
export { CircleDivideRegular, CircleDivideRegular as CircleDivideRegularIcon, CircleDivideRegular as SiCircleDivideRegular };
export default CircleDivideRegular;
export type { CircleDivideRegularProps };
