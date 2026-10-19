import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideRegularProps = Omit<IconBaseProps, 'children'>;

const CircleDivideRegular = memo(
  forwardRef<SVGSVGElement, CircleDivideRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m-.75 1.53c-4.48.38-8 4.14-8 8.72s3.52 8.34 8 8.72zm1.5 17.44c4.48-.38 8-4.14 8-8.72s-3.52-8.34-8-8.72z" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDivideRegular.displayName = 'CircleDivideRegular';

// Triple export pattern
export { CircleDivideRegular, CircleDivideRegular as CircleDivideRegularIcon, CircleDivideRegular as SiCircleDivideRegular };
export default CircleDivideRegular;
export type { CircleDivideRegularProps };
