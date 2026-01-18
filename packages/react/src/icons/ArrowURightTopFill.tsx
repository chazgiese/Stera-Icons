import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowURightTopFillProps = Omit<IconBaseProps, 'children'>;

const ArrowURightTopFill = memo(
  forwardRef<SVGSVGElement, ArrowURightTopFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M18.7 2.3A1 1 0 0 0 17 3v3H8.5a7.5 7.5 0 1 0 0 15H16a1 1 0 1 0 0-2H8.5a5.5 5.5 0 1 1 0-11H17v3a1 1 0 0 0 1.7.7l4-4a1 1 0 0 0 .28-.88 1 1 0 0 0-.1-.3l-.01-.02-.16-.2z" />
    </IconBase>
  ))
);

ArrowURightTopFill.displayName = 'ArrowURightTopFill';

export { ArrowURightTopFill };
export type { ArrowURightTopFillProps };
