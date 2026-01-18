import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowUpLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M18.53 17.47a.75.75 0 1 1-1.06 1.06L6.75 7.81V6.75h1.06z" opacity={.4} />
        <path fill="currentColor" d="M16 5.25a.75.75 0 0 1 0 1.5H6.75V16a.75.75 0 0 1-1.5 0V6c0-.41.34-.75.75-.75z" />
    </IconBase>
  ))
);

ArrowUpLeftRegularDuotone.displayName = 'ArrowUpLeftRegularDuotone';

export { ArrowUpLeftRegularDuotone };
export type { ArrowUpLeftRegularDuotoneProps };
