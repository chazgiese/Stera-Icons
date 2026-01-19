import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CircleDivideRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDivideRegularDuotone = memo(
  forwardRef<SVGSVGElement, CircleDivideRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-divide-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="m12 2.75.75.03v18.44a9 9 0 0 1-1.5 0V2.78z" />
    </IconBase>
  ))
);

CircleDivideRegularDuotone.displayName = 'CircleDivideRegularDuotone';

// Triple export pattern (lucide-react style)
export { CircleDivideRegularDuotone, CircleDivideRegularDuotone as CircleDivideRegularDuotoneIcon, CircleDivideRegularDuotone as SiCircleDivideRegularDuotone };
export default CircleDivideRegularDuotone;
export type { CircleDivideRegularDuotoneProps };
