import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CircleCheckerFillProps = Omit<IconBaseProps, 'children'>;

const CircleCheckerFill = memo(
  forwardRef<SVGSVGElement, CircleCheckerFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 11H3a9 9 0 0 0 9 9zh9a9 9 0 0 0-9-9z" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleCheckerFill.displayName = 'CircleCheckerFill';

export { CircleCheckerFill };
export type { CircleCheckerFillProps };
