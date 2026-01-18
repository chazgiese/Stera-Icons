import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronFullCircleDownBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleDownBold = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleDownBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M15.48 9.25c1.05 0 1.63 1.21.98 2.03l-3.48 4.35c-.5.63-1.46.63-1.96 0l-3.48-4.35a1.25 1.25 0 0 1 .98-2.03z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullCircleDownBold.displayName = 'ChevronFullCircleDownBold';

export { ChevronFullCircleDownBold };
export type { ChevronFullCircleDownBoldProps };
