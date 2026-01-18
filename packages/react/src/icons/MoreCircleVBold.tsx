import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MoreCircleVBoldProps = Omit<IconBaseProps, 'children'>;

const MoreCircleVBold = memo(
  forwardRef<SVGSVGElement, MoreCircleVBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M13.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M13.5 17a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
        <path fill="currentColor" fillRule="evenodd" d="M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0m-2 0a9 9 0 1 0-18 0 9 9 0 0 0 18 0" clipRule="evenodd" />
    </IconBase>
  ))
);

MoreCircleVBold.displayName = 'MoreCircleVBold';

export { MoreCircleVBold };
export type { MoreCircleVBoldProps };
