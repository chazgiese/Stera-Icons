import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowDownLeftRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowDownLeftRegular = memo(
  forwardRef<SVGSVGElement, ArrowDownLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M17.47 5.47a.75.75 0 1 1 1.06 1.06L7.81 17.25H16a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75V8a.75.75 0 0 1 1.5 0v8.19z" />
    </IconBase>
  ))
);

ArrowDownLeftRegular.displayName = 'ArrowDownLeftRegular';

export { ArrowDownLeftRegular };
export type { ArrowDownLeftRegularProps };
