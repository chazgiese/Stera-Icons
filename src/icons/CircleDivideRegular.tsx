import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CircleDivideRegularProps = Omit<IconBaseProps, 'children'>;

const CircleDivideRegular = memo(
  forwardRef<SVGSVGElement, CircleDivideRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-divide" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m-.75 1.53a9.25 9.25 0 0 0 0 18.44zm1.5 18.44a9.25 9.25 0 0 0 0-18.44z" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDivideRegular.displayName = 'CircleDivideRegular';

// Triple export pattern (lucide-react style)
export { CircleDivideRegular, CircleDivideRegular as CircleDivideRegularIcon, CircleDivideRegular as SiCircleDivideRegular };
export default CircleDivideRegular;
export type { CircleDivideRegularProps };
