import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronFullLeftBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronFullLeftBold = memo(
  forwardRef<SVGSVGElement, ChevronFullLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.3 4.3A1 1 0 0 1 16 5v14a1 1 0 0 1-1.7.7l-7-7a1 1 0 0 1 0-1.4zM9.4 12 14 16.59V7.4z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullLeftBold.displayName = 'ChevronFullLeftBold';

export { ChevronFullLeftBold };
export type { ChevronFullLeftBoldProps };
