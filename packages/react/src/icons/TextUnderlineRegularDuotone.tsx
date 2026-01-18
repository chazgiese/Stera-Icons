import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextUnderlineRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextUnderlineRegularDuotone = memo(
  forwardRef<SVGSVGElement, TextUnderlineRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M19 21.25a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1 0-1.5z" opacity={.4} />
        <path fill="currentColor" d="M18 1.25c.41 0 .75.34.75.75v10a6.75 6.75 0 0 1-13.5 0V2a.75.75 0 0 1 1.5 0v10a5.25 5.25 0 1 0 10.5 0V2c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

TextUnderlineRegularDuotone.displayName = 'TextUnderlineRegularDuotone';

export { TextUnderlineRegularDuotone };
export type { TextUnderlineRegularDuotoneProps };
