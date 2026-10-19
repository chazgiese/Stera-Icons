import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDivideRegularDuotone = memo(
  forwardRef<SVGSVGElement, CircleDivideRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.75 1.78c5.31.38 9.5 4.81 9.5 10.22 0 5.4-4.19 9.83-9.5 10.22v-1.5c4.48-.38 8-4.14 8-8.72s-3.52-8.34-8-8.72z" opacity={.4} />
        <path fillRule="evenodd" d="m12 1.75.75.03v20.44l-.75.03C6.34 22.25 1.75 17.66 1.75 12S6.34 1.75 12 1.75m-.75 1.53c-4.48.38-8 4.14-8 8.72s3.52 8.34 8 8.72z" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDivideRegularDuotone.displayName = 'CircleDivideRegularDuotone';

// Triple export pattern
export { CircleDivideRegularDuotone, CircleDivideRegularDuotone as CircleDivideRegularDuotoneIcon, CircleDivideRegularDuotone as SiCircleDivideRegularDuotone };
export default CircleDivideRegularDuotone;
export type { CircleDivideRegularDuotoneProps };
