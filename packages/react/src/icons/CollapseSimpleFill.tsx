import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CollapseSimpleFillProps = Omit<IconBaseProps, 'children'>;

const CollapseSimpleFill = memo(
  forwardRef<SVGSVGElement, CollapseSimpleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M9 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1.7.7l-1.8-1.79-2.8 2.8a1 1 0 0 1-1.4-1.42l2.79-2.79-1.8-1.8A1 1 0 0 1 4 14zM20.3 2.3a1 1 0 1 1 1.4 1.4l-2.79 2.8 1.8 1.8A1 1 0 0 1 20 10h-5a1 1 0 0 1-1-1V4a1 1 0 0 1 1.7-.7l1.8 1.79z" />
    </IconBase>
  ))
);

CollapseSimpleFill.displayName = 'CollapseSimpleFill';

export { CollapseSimpleFill };
export type { CollapseSimpleFillProps };
