import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowURightBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowURightBold = memo(
  forwardRef<SVGSVGElement, ArrowURightBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M8.5 3a7.5 7.5 0 1 0 0 15h11.09l-2.3 2.3a1 1 0 1 0 1.42 1.4l4-4 .06-.07.1-.13v-.01a1 1 0 0 0-.16-1.2l-4-4a1 1 0 1 0-1.42 1.42L19.6 16H8.5a5.5 5.5 0 1 1 0-11H16a1 1 0 1 0 0-2z" />
    </IconBase>
  ))
);

ArrowURightBold.displayName = 'ArrowURightBold';

export { ArrowURightBold };
export type { ArrowURightBoldProps };
