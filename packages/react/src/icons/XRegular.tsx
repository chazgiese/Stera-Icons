import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type XRegularProps = Omit<IconBaseProps, 'children'>;

const XRegular = memo(
  forwardRef<SVGSVGElement, XRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M18.47 4.47a.75.75 0 1 1 1.06 1.06L13.06 12l6.47 6.47a.75.75 0 1 1-1.06 1.06L12 13.06l-6.47 6.47a.75.75 0 0 1-1.06-1.06L10.94 12 4.47 5.53a.75.75 0 1 1 1.06-1.06L12 10.94z" />
    </IconBase>
  ))
);

XRegular.displayName = 'XRegular';

export { XRegular };
export type { XRegularProps };
