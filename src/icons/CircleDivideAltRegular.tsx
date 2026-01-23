import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideAltRegularProps = Omit<IconBaseProps, 'children'>;

const CircleDivideAltRegular = memo(
  forwardRef<SVGSVGElement, CircleDivideAltRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-divide-alt" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m-9.22 11.5a9.25 9.25 0 0 0 18.44 0zm9.22-10a9.25 9.25 0 0 0-9.22 8.5h18.44A9.25 9.25 0 0 0 12 2.75" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDivideAltRegular.displayName = 'CircleDivideAltRegular';

// Triple export pattern (lucide-react style)
export { CircleDivideAltRegular, CircleDivideAltRegular as CircleDivideAltRegularIcon, CircleDivideAltRegular as SiCircleDivideAltRegular };
export default CircleDivideAltRegular;
export type { CircleDivideAltRegularProps };
