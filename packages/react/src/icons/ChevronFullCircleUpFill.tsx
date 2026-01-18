import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronFullCircleUpFillProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleUpFill = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleUpFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m.98 7.37a1.25 1.25 0 0 0-1.96 0l-3.48 4.35c-.65.82-.07 2.03.98 2.03h6.96c1.05 0 1.63-1.21.98-2.03z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullCircleUpFill.displayName = 'ChevronFullCircleUpFill';

export { ChevronFullCircleUpFill };
export type { ChevronFullCircleUpFillProps };
