import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronsLeftBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronsLeftBold = memo(
  forwardRef<SVGSVGElement, ChevronsLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M10.3 4.3a1 1 0 1 1 1.4 1.4L5.42 12l6.3 6.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4z" />
        <path fill="currentColor" d="M18.3 4.3a1 1 0 1 1 1.4 1.4L13.42 12l6.3 6.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4z" />
    </IconBase>
  ))
);

ChevronsLeftBold.displayName = 'ChevronsLeftBold';

export { ChevronsLeftBold };
export type { ChevronsLeftBoldProps };
